<script setup lang="ts">
import BaseSectionHeader from "../header/BaseSectionHeader.vue";
import BaseBadge from "../badge/BaseBadge.vue";

const steps = [
  {
    title: "Escola cria sua identidade",
    description:
      "Em minutos, a escola configura logo, cores e domínio personalizado. Cada tenant é completamente isolado — dados, usuários e configurações são exclusivos.",
    tag: "Automático",
    tagVariant: "available" as const,
    active: true,
  },
  {
    title: "Professores, turmas e permissões configuradas",
    description:
      "Administrador cadastra professores, define turmas e atribui permissões granulares por perfil. Cada usuário acessa apenas o que é seu.",
    tag: "Simples",
    tagVariant: "purple" as const,
    active: false,
  },
  {
    title: "Banco de questões e provas montadas — sem burocracia",
    description:
      "Professor cria ou importa questões, monta templates de prova com o Exam Builder e publica para uma ou várias turmas simultaneamente.",
    tag: "Simples",
    tagVariant: "orange" as const,
    active: false,
  },
  {
    title: "Prova aplicada — Aluno recebe notificação instantânea",
    description:
      "Quando a prova é liberada, alunos recebem push notification imediatamente. Podem responder pelo PWA, inclusive sem internet.",
    tag: "PWA Offline",
    tagVariant: "available" as const,
    active: false,
  },
  {
    title: "Suporte centralizado — Escola atua dentro da plataforma",
    description:
      "Dúvidas, solicitações e problemas viram tickets rastreáveis. A equipe atua com prioridade, histórico e notificações a cada atualização — sem WhatsApp, sem email perdido.",
    tag: "Central de Tickets",
    tagVariant: "purple" as const,
    active: false,
  },
];
</script>
<template>
  <section
    class="py-24 px-6 bg-slate-50"
    id="como-funciona"
    data-purpose="how-it-works"
  >
    <div class="container mx-auto max-w-5xl">
      <BaseSectionHeader
        eyebrow="COMO FUNCIONA"
        title="Da bagunça à operação centralizada"
        subtitle="Cinco passos para transformar a gestão da sua escola de idiomas."
        :center="true"
      />

      <div class="flex flex-col gap-0">
        <div
          v-for="(step, index) in steps"
          :key="step.title"
          class="relative flex gap-6 lg:gap-10"
          :class="index < steps.length - 1 ? 'pb-10' : ''"
        >
          <!-- Line + Number -->
          <div class="flex flex-col items-center">
            <div
              class="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-lg flex-shrink-0 z-10"
              :class="step.active ? 'bg-om shadow-lg shadow-om/30' : 'bg-pm'"
            >
              {{ index + 1 }}
            </div>
            <!-- Connector line -->
            <div
              v-if="index < steps.length - 1"
              class="w-0.5 flex-1 mt-3"
              :class="step.active ? 'bg-om/30' : 'bg-pm/20'"
            />
          </div>

          <!-- Content -->
          <div class="pb-2 flex-1 pt-2">
            <div class="flex items-center gap-3 mb-2 flex-wrap">
              <h3 class="text-lg font-extrabold text-pd">{{ step.title }}</h3>
              <BaseBadge
                v-if="step.tag"
                :variant="step.tagVariant || 'available'"
                size="sm"
              >
                {{ step.tag }}
              </BaseBadge>
            </div>
            <p class="text-slate-600 text-sm leading-relaxed max-w-2xl">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
