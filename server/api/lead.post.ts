import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body?.email) {
    throw createError({
      statusCode: 400,
      statusMessage: "E-mail é obrigatório.",
    });
  }

  // Pega as variáveis de ambiente
  const config = useRuntimeConfig();

  // Cria o cliente manualmente com a anon key
  const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabaseKey,
  );

  const { error } = await supabase.from("leads").insert({
    tipo: body.tipo,
    nome: body.nome ?? null,
    email: body.email,
    telefone: body.telefone ?? null,
    escola: body.escola ?? null,
    tipo_escola: body.tipo_escola ?? null,
    mensagem: body.mensagem ?? null,
    status: "novo",
  });

  if (error) {
    console.error("[lead.post] erro Supabase:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Erro ao salvar no banco.",
    });
  }
  const resend = new Resend(config.resendApiKey);

  const { data, error: resendError } = await resend.emails.send({
    from: "ByteESchool <contato@byteeschool.com>",
    to: ["samarabilby@hotmail.com"],
    subject: `🎉 Novo lead (${body.tipo}): ${body.email}`,
    html: `
    <h2>Novo lead cadastrado!</h2>
    <p><b>Tipo:</b> ${body.tipo}</p>
    <p><b>Email:</b> ${body.email}</p>
    <p><b>Nome:</b> ${body.nome ?? "-"}</p>
    <p><b>Telefone:</b> ${body.telefone ?? "-"}</p>
  `,
  });

  console.log("[resend] data:", data);
  console.log("[resend] error:", resendError);

  return { success: true };
});
