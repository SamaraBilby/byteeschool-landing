<script setup lang="ts">
import BaseBadge from "../badge/BaseBadge.vue";

const withoutList = [
  "Provas no Google Forms ou Microsoft Forms, sem contexto pedagógico",
  "Avisos e comunicação perdidos no WhatsApp",
  "Suporte por email sem protocolo nem histórico",
  "Controle de alunos e notas em planilhas",
  "Cobranças feitas manualmente, inadimplência sem alerta",
  "Cada professor aplica prova do seu jeito",
  "Nenhuma notificação automática para aluno ou professor",
];

const withList = [
  "Avaliações dentro da plataforma, conectadas à turma e ao histórico",
  "Push notifications automáticas para aluno e professor",
  "Central de tickets com status, prioridade e histórico rastreável",
  "Histórico pedagógico imutável e rastreável por aluno",
  "Pagamentos com alerta de vencimento e bloqueio automático",
  "Banco de questões e Exam Builder com padronização total",
  "Alertas automáticos: prova liberada, nota disponível, ticket respondido",
];

const features = [
  {
    icon: "menu_book",
    iconBg: "bg-pm/5",
    iconColor: "text-pm",
    title: "Banco de Questões",
    description:
      "Múltipla escolha, discursiva, áudio e imagem. Questões organizadas por nível e tema, reaproveitáveis em qualquer turma.",
  },
  {
    icon: "layers",
    iconBg: "bg-om/5",
    iconColor: "text-om",
    title: "Exam Builder",
    description:
      "Monte templates de prova com drag & drop. Reutilize em múltiplas turmas. Defina pesos e ordem das questões.",
  },
  {
    icon: "notifications",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    title: "Notificações",
    description:
      "Aluno recebe alerta quando prova é liberada. Professor é notificado quando há entrega ou correção pendente. Tudo automático.",
  },
  {
    icon: "chat_bubble",
    iconBg: "bg-pm/5",
    iconColor: "text-pm",
    title: "Central de Tickets",
    description:
      "Solicitações, dúvidas e problemas abertos diretamente na plataforma. Com status, prioridade, histórico e notificação a cada atualização.",
  },
  {
    icon: "insights",
    iconBg: "bg-om/5",
    iconColor: "text-om",
    title: "Correção Híbrida",
    description:
      "Múltipla escolha corrigida na hora com nota imediata. Discursivas com rastreabilidade total: quem corrigiu, quando e critério.",
  },
  {
    icon: "verified_user",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    title: "Branding",
    description:
      "Cada escola com logo e cores próprias. Dados 100% isolados — uma escola nunca vê informações da outra.",
  },
];
</script>

<template>
  <!-- PARTE 1: Antes vs Depois -->
  <section class="py-24 px-6 bg-white" id="s-solucao">
    <div class="container mx-auto max-w-6xl">
      <div class="mb-12">
        <span
          class="text-om font-bold uppercase tracking-widest text-sm mb-2 block"
          >A SOLUÇÃO</span
        >
        <h2
          class="text-3xl md:text-5xl font-extrabold text-pd mb-6 leading-tight"
        >
          De ferramentas espalhadas para um<br class="hidden md:block" />
          ecossistema único
        </h2>
        <p class="text-slate-600 max-w-2xl">
          O ByteESchool não é mais um sistema. É o hub central da sua escola —
          onde pedagógico, administrativo, comunicação e financeiro convivem no
          mesmo lugar.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <!-- SEM O BYTEESCHOOL -->
        <div class="p-6 lg:p-8">
          <div class="flex items-center gap-2 mb-8">
            <span class="w-2 h-2 bg-red-500 rounded-full" />
            <h3
              class="text-xs font-extrabold text-slate-800 uppercase tracking-widest"
            >
              SEM O BYTEESCHOOL
            </h3>
          </div>
          <ul class="space-y-5">
            <li v-for="item in withoutList" :key="item" class="flex gap-4">
              <span
                class="material-symbols-outlined text-red-500 font-bold flex-shrink-0 mt-0.5"
                >close</span
              >
              <p class="text-sm text-slate-700 font-medium">{{ item }}</p>
            </li>
          </ul>
        </div>

        <!-- COM O BYTEESCHOOL -->
        <div class="bg-pm/5 border border-pm/10 p-8 lg:p-10 rounded-3xl">
          <div class="flex items-center gap-2 mb-8">
            <span class="w-2 h-2 bg-pm rounded-full" />
            <h3
              class="text-xs font-extrabold text-pm uppercase tracking-widest"
            >
              COM O BYTEESCHOOL
            </h3>
          </div>
          <ul class="space-y-5">
            <li v-for="item in withList" :key="item" class="flex gap-4">
              <span
                class="material-symbols-outlined text-green-600 font-bold flex-shrink-0 mt-0.5"
                >check_box</span
              >
              <p class="text-sm text-slate-800 font-bold">{{ item }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- PARTE 2: Grid de Features -->
  <section
    class="py-24 px-6 bg-slate-50"
    id="solucao"
    data-purpose="the-solution"
  >
    <div class="container mx-auto max-w-6xl">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14"
      >
        <div
          v-for="feature in features"
          :key="feature.title"
          class="flex flex-col items-start text-left"
        >
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
            :class="feature.iconBg"
          >
            <span
              class="material-symbols-outlined"
              :class="feature.iconColor"
              >{{ feature.icon }}</span
            >
          </div>
          <h4 class="text-lg font-extrabold text-pd mb-2">
            {{ feature.title }}
          </h4>
          <p class="text-sm text-slate-600 mb-6 leading-relaxed flex-1">
            {{ feature.description }}
          </p>
          <BaseBadge variant="available">DISPONÍVEL NO LANÇAMENTO</BaseBadge>
        </div>
      </div>
    </div>
  </section>
</template>
