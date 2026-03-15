<script setup lang="ts">
const schoolTypes = [
  "Escolas",
  "Escolas de Idiomas",
  "Franquias Educacionais",
  "Cursos Livres",
];

const questionOptions = [
  { label: "She has been living there since 2018", selected: false },
  { label: "She lived there for five years", selected: true },
  { label: "She will move next year", selected: false },
  { label: "She had never visited before", selected: false },
];

const heroStats = [
  { value: "4+", label: "Tipos de questão" },
  { value: "100%", label: "PWA & Offline" },
  { value: "∞", label: "Multi-tenant" },
];
</script>
<template>
  <!-- pt-20 = compensa o header fixo de h-20 -->
  <section
    class="gradient-hero pt-32 pb-20 px-6 relative overflow-hidden"
    data-purpose="hero"
    id="hero"
  >
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl"
      />
      <div
        class="absolute bottom-0 -left-32 w-80 h-80 bg-om/10 rounded-full blur-3xl"
      />
    </div>

    <div class="container mx-auto relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- LEFT: Copy -->
        <div>
          <!-- Eyebrow badge -->
          <div
            class="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest"
          >
            <span class="w-2 h-2 bg-om rounded-full animate-pulse" />
            Hub educacional — Em breve no Brasil
          </div>

          <!-- Headline -->
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Chega de ferramentas
            <span class="text-om relative">
              espalhadas
              <svg
                class="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 300 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6C60 2 180 2 298 6"
                  stroke="#E8820C"
                  stroke-width="3"
                  stroke-linecap="round"
                  opacity="0.6"
                />
              </svg>
            </span>
            na sua escola
          </h1>

          <!-- Subheadline -->
          <p class="text-white/80 text-lg leading-relaxed mb-10 max-w-lg">
            Avaliações, turmas, comunicação, suporte e pagamentos em um único
            ecossistema educacional.
          </p>

          <!-- CTA Group -->
          <div class="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#lista-espera"
              class="inline-flex items-center justify-center gap-2 bg-om text-white font-bold px-8 py-4 rounded-xl hover:bg-orange-600 transition-all active:scale-95 shadow-lg text-base"
            >
              <span class="material-symbols-outlined">rocket_launch</span>
              Garantir meu acesso antecipado
            </a>
            <a
              href="#solucao"
              class="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-6 py-4 rounded-xl hover:bg-white/20 transition-all text-base"
            >
              Ver como funciona
              <span class="material-symbols-outlined text-base"
                >arrow_forward</span
              >
            </a>
          </div>

          <!-- Social Proof: Tipos de escola -->
          <div>
            <p
              class="text-white/50 text-xs font-bold uppercase tracking-widest mb-3"
            >
              Feito para
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="type in schoolTypes"
                :key="type"
                class="text-xs font-semibold text-white/80 bg-white/10 border border-white/20 px-3 py-1.5 rounded-lg"
              >
                {{ type }}
              </span>
            </div>
          </div>
        </div>

        <!-- RIGHT: Live UI Preview Cards -->
        <div class="hidden lg:block relative">
          <!-- Main Card: Exam Builder -->
          <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-sm ml-auto">
            <!-- Card Header -->
            <div class="flex justify-between items-center mb-5">
              <div>
                <div
                  class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1"
                >
                  Exam Builder
                </div>
                <div class="text-sm font-extrabold text-pd">
                  Prova de Listening — B2
                </div>
              </div>
              <span
                class="bg-green-50 text-green-700 text-[10px] font-bold px-2.5 py-1 rounded-full border border-green-100 uppercase tracking-wider"
              >
                Publicada
              </span>
            </div>

            <!-- Progress -->
            <div class="mb-5">
              <div
                class="flex justify-between text-[10px] text-slate-400 mb-1.5"
              >
                <span>Respondendo</span>
                <span class="font-bold text-pd">47%</span>
              </div>
              <div class="w-full bg-slate-100 rounded-full h-1.5">
                <div class="bg-pm h-1.5 rounded-full" style="width: 47%" />
              </div>
            </div>

            <!-- Question preview -->
            <div class="bg-slate-50 rounded-xl p-4 mb-4 text-xs">
              <div
                class="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-2"
              >
                Questão 3 de 10
              </div>
              <div class="text-slate-700 font-medium">
                Selecione a alternativa que melhor completa a frase:
              </div>
            </div>

            <!-- Options -->
            <div class="space-y-2 mb-4">
              <div
                v-for="(opt, i) in questionOptions"
                :key="i"
                class="flex items-center gap-3 p-2.5 rounded-lg border text-xs font-medium cursor-pointer transition-all"
                :class="
                  opt.selected
                    ? 'border-pm bg-pm/5 text-pd'
                    : 'border-slate-100 text-slate-600 hover:border-pm/30'
                "
              >
                <div
                  class="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                  :class="opt.selected ? 'border-pm bg-pm' : 'border-slate-300'"
                >
                  <div
                    v-if="opt.selected"
                    class="w-2 h-2 bg-white rounded-full"
                  />
                </div>
                {{ opt.label }}
              </div>
            </div>

            <!-- Stats row -->
            <div class="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
              <div
                v-for="stat in heroStats"
                :key="stat.label"
                class="text-center"
              >
                <div class="text-pd font-bold text-base">{{ stat.value }}</div>
                <div
                  class="text-[9px] text-slate-400 uppercase tracking-wide leading-tight"
                >
                  {{ stat.label }}
                </div>
              </div>
            </div>
          </div>

          <!-- Floating card: Notification -->
          <div
            class="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 w-56 border border-slate-100"
          >
            <div class="flex justify-between items-start mb-2">
              <span
                class="text-[10px] font-bold text-slate-400 uppercase tracking-wider"
                >Push Notification</span
              >
              <span
                class="bg-pm/10 text-pm text-[10px] font-bold px-2 py-0.5 rounded-full"
                >Enviado</span
              >
            </div>
            <div class="flex gap-3 items-start">
              <div
                class="w-8 h-8 bg-pm/5 rounded-xl flex items-center justify-center text-pm flex-shrink-0"
              >
                <span class="material-symbols-outlined text-sm"
                  >notifications_active</span
                >
              </div>
              <div>
                <h4 class="text-xs font-extrabold text-pd">
                  Nova prova liberada!
                </h4>
                <p class="text-[10px] text-slate-500 leading-snug">
                  Sua prova de Listening está disponível.
                </p>
              </div>
            </div>
          </div>

          <!-- Floating card: Ticket -->
          <div
            class="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-xl p-4 w-60 border border-slate-100"
          >
            <div class="flex justify-between items-start mb-2">
              <span
                class="text-[10px] font-bold text-slate-400 uppercase tracking-wider"
                >Ticket de Suporte</span
              >
              <span
                class="bg-om/10 text-om text-[10px] font-bold px-2 py-0.5 rounded-full"
                >Em andamento</span
              >
            </div>
            <div class="flex gap-3 items-start">
              <div
                class="w-8 h-8 bg-om/5 rounded-xl flex items-center justify-center text-om flex-shrink-0"
              >
                <span class="material-symbols-outlined text-sm"
                  >chat_bubble</span
                >
              </div>
              <div>
                <h4 class="text-xs font-extrabold text-pd">
                  #0042 — Erro na importação
                </h4>
                <p class="text-[10px] text-slate-500 leading-snug">
                  English Way · Aberto há 2h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.gradient-hero {
  background: linear-gradient(135deg, #3d2066 0%, #5b2d8e 100%);
}
</style>
