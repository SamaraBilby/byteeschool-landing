<script setup lang="ts">
import BaseSectionHeader from "../header/BaseSectionHeader.vue";
const starterFeatures = [
  "Até 150 alunos ativos",
  "Banco de questões ilimitado",
  "Exam Builder completo",
  "Push notifications",
  "Central de tickets",
  "Suporte por chat",
];

const proFeatures = [
  "Até 500 alunos ativos",
  "Tudo do Starter",
  "Multi-tenant & branding",
  "Pagamentos Asaas integrado",
  "Relatórios avançados",
  "App mobile (iOS & Android)",
  "Importação em massa",
  "Suporte prioritário",
];

const enterpriseFeatures = [
  "Alunos ilimitados",
  "Tudo do Profissional",
  "SLA garantido",
  "Onboarding dedicado",
  "Integração com ERP",
  "Gestor de conta exclusivo",
];
</script>
<template>
  <section class="py-24 px-6 bg-white" id="planos" data-purpose="pricing">
    <div class="container mx-auto max-w-5xl">
      <BaseSectionHeader
        title="Planos que crescem com você"
        subtitle="Escolha o plano ideal para o tamanho e momento da sua escola."
        :center="true"
      />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <!-- Plano Starter -->
        <div
          class="border border-slate-200 rounded-2xl p-8 flex flex-col gap-6 hover:border-pm/30 transition-all hover:shadow-lg"
        >
          <div>
            <h3 class="text-lg font-extrabold text-pd mb-1">Starter</h3>
            <div class="flex items-end gap-1">
              <span class="text-4xl font-black text-pd"
                >R$<span class="text-3xl">197</span></span
              >
              <span class="text-slate-400 text-sm mb-1">/mês</span>
            </div>
            <p class="text-slate-500 text-xs mt-2">
              Ideal para escolas em crescimento
            </p>
          </div>
          <ul class="space-y-3 flex-1">
            <li
              v-for="item in starterFeatures"
              :key="item"
              class="flex items-start gap-3 text-sm text-slate-700"
            >
              <span
                class="material-symbols-outlined text-green-500 text-base mt-0.5 flex-shrink-0"
                >check_circle</span
              >
              {{ item }}
            </li>
          </ul>
          <a
            href="#lista-espera"
            class="w-full inline-flex items-center justify-center gap-2 border-2 border-pm text-pm font-bold py-3 px-6 rounded-xl hover:bg-pm hover:text-white transition-all active:scale-95 text-sm"
          >
            Quero este plano
          </a>
        </div>

        <!-- Plano Profissional (destacado) -->
        <div
          class="gradient-hero rounded-2xl p-8 flex flex-col gap-6 relative shadow-xl shadow-pm/20 -mt-0 md:-mt-4"
        >
          <div class="absolute -top-3 left-1/2 -translate-x-1/2">
            <span
              class="bg-om text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap"
            >
              ⭐ Mais Escolhido
            </span>
          </div>
          <div>
            <h3 class="text-lg font-extrabold text-white mb-1">Profissional</h3>
            <div class="flex items-end gap-1">
              <span class="text-4xl font-black text-white"
                >R$<span class="text-3xl">599</span></span
              >
              <span class="text-white/60 text-sm mb-1">/mês</span>
            </div>
            <p class="text-white/60 text-xs mt-2">Para escolas consolidadas</p>
          </div>
          <ul class="space-y-3 flex-1">
            <li
              v-for="item in proFeatures"
              :key="item"
              class="flex items-start gap-3 text-sm text-white/90"
            >
              <span
                class="material-symbols-outlined text-om text-base mt-0.5 flex-shrink-0"
                >check_circle</span
              >
              {{ item }}
            </li>
          </ul>
          <a
            href="#lista-espera"
            class="w-full inline-flex items-center justify-center gap-2 bg-om text-white font-bold py-3 px-6 rounded-xl hover:bg-orange-600 transition-all active:scale-95 text-sm shadow-lg shadow-om/30"
          >
            <span class="material-symbols-outlined text-base"
              >rocket_launch</span
            >
            Entrar Profissional
          </a>
        </div>

        <!-- Plano Enterprise -->
        <div
          class="border border-slate-200 rounded-2xl p-8 flex flex-col gap-6 hover:border-pm/30 transition-all hover:shadow-lg"
        >
          <div>
            <h3 class="text-lg font-extrabold text-pd mb-1">Enterprise</h3>
            <div class="flex items-end gap-1">
              <span class="text-2xl font-black text-pd">Sob Consulta</span>
            </div>
            <p class="text-slate-500 text-xs mt-2">Para redes e franquias</p>
          </div>
          <ul class="space-y-3 flex-1">
            <li
              v-for="item in enterpriseFeatures"
              :key="item"
              class="flex items-start gap-3 text-sm text-slate-700"
            >
              <span
                class="material-symbols-outlined text-green-500 text-base mt-0.5 flex-shrink-0"
                >check_circle</span
              >
              {{ item }}
            </li>
          </ul>
          <a
            href="#lista-espera"
            class="w-full inline-flex items-center justify-center gap-2 border-2 border-pm text-pm font-bold py-3 px-6 rounded-xl hover:bg-pm hover:text-white transition-all active:scale-95 text-sm"
          >
            Falar com especialista
          </a>
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
