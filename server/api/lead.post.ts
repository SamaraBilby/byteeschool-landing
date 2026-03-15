import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { Redis } from "@upstash/redis";

const WINDOW_SECONDS = 10 * 60; // 10 minutos
const LIMIT_PER_IP = 5;
const LIMIT_PER_EMAIL = 2;

function getClientIp(event: any) {
  const xff = event.node.req.headers["x-forwarded-for"];
  const realIp = event.node.req.headers["x-real-ip"];

  const ipFromXff = Array.isArray(xff) ? xff[0] : xff?.split(",")[0]?.trim();
  const ip = (
    ipFromXff ||
    realIp ||
    event.node.req.socket?.remoteAddress ||
    "unknown"
  ).trim();
  return ip;
}

function normalizeEmail(email: string) {
  return String(email).trim().toLowerCase();
}

async function hitRateLimit(redis: Redis, keyBase: string, limit: number) {
  const bucket = Math.floor(Date.now() / 1000 / WINDOW_SECONDS);
  const key = `${keyBase}:${bucket}`;

  const count = await redis.incr(key);
  await redis.expire(key, WINDOW_SECONDS + 5);

  return count <= limit;
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // 1) Honeypot: se preencheu, é bot -> responde "ok" e não faz nada
  if (body?.hp && String(body.hp).trim().length > 0) {
    return { success: true };
  }

  if (!body?.email) {
    throw createError({
      statusCode: 400,
      statusMessage: "E-mail é obrigatório.",
    });
  }

  const config = useRuntimeConfig();

  // 2) Rate limit (Upstash)
  const redis = new Redis({
    url: config.upstashRedisRestUrl!,
    token: config.upstashRedisRestToken!,
  });

  const ip = getClientIp(event);
  const emailNorm = normalizeEmail(body.email);

  // IP limit
  const ipOk = await hitRateLimit(redis, `rl:lead:ip:${ip}`, LIMIT_PER_IP);
  if (!ipOk) {
    throw createError({
      statusCode: 429,
      statusMessage: "Muitas tentativas. Tente novamente em alguns minutos.",
    });
  }

  // Email limit
  const emailOk = await hitRateLimit(
    redis,
    `rl:lead:email:${emailNorm}`,
    LIMIT_PER_EMAIL,
  );
  if (!emailOk) {
    // aqui você pode retornar success:true se quiser “não dar pista”
    throw createError({
      statusCode: 429,
      statusMessage: "Muitas tentativas. Tente novamente em alguns minutos.",
    });
  }

  // 3) Supabase (continua com anon key + policy insert com validações)
  const supabase = createClient(
    config.public.supabaseUrl,
    config.supabaseServiceRoleKey,
  );

  const payload = {
    tipo: body.tipo,
    nome: body.nome ?? null,
    email: emailNorm, // salva normalizado
    telefone: body.telefone ?? null,
    escola: body.escola ?? null,
    tipo_escola: body.tipo_escola ?? null,
    mensagem: body.mensagem ?? null,
    status: "novo",
  };

  const { error } = await supabase.from("leads").insert(payload);

  // 4) Dedupe: se bater no unique (tipo + lower(email)), trate como sucesso silencioso
  if (error) {
    // Postgres unique violation costuma vir como 23505 no supabase-js
    const code = (error as any).code;
    if (code === "23505") {
      return { success: true };
    }

    console.error("[lead.post] erro Supabase:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Erro ao salvar no banco.",
    });
  }

  // 5) Email via Resend (só manda se realmente inseriu)
  const resend = new Resend(config.resendApiKey);

  const { data, error: resendError } = await resend.emails.send({
    from: "ByteESchool <contato@byteeschool.com>",
    to: ["samarabilby@hotmail.com"],
    subject: `🎉 Novo lead (${body.tipo}): ${emailNorm}`,
    html: `
      <h2>Novo lead cadastrado!</h2>
      <p><b>Tipo:</b> ${body.tipo}</p>
      <p><b>Email:</b> ${emailNorm}</p>
      <p><b>Nome:</b> ${body.nome ?? "-"}</p>
      <p><b>Telefone:</b> ${body.telefone ?? "-"}</p>
    `,
  });

  console.log("[resend] data:", data);
  console.log("[resend] error:", resendError);

  return { success: true };
});
