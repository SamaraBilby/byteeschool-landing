<script setup lang="ts">
import BaseSectionHeader from "../header/BaseSectionHeader.vue";

const problems = [
  {
    icon: "assignment_late",
    title: "Avaliações em ferramentas genéricas",
    description:
      "Uso excessivo de Google Forms que não geram histórico acadêmico automático e dificultam a análise de desempenho por aluno.",
  },
  {
    icon: "chat_error",
    title: "Operação espalhada",
    description:
      "Dados de alunos em planilhas, avisos no WhatsApp e notas em cadernos. O risco de perda de dados é constante e o retrabalho é diário.",
  },
  {
    icon: "payments",
    title: "Financeiro Manual",
    description:
      "Emissão de boletos um a um, controle de inadimplência em cadernos e falta de régua de cobrança automática para os pais.",
  },
  {
    icon: "group_off",
    title: "Abandono de Alunos",
    description:
      "Dificuldade em identificar alunos com baixa frequência ou queda de notas a tempo de evitar o cancelamento da matrícula.",
  },
  {
    icon: "speed",
    title: "Lentidão na Secretaria",
    description:
      "Matrículas que dependem de papéis físicos e presença dos pais, tornando o processo lento e propenso a erros de digitação.",
  },
  {
    icon: "insights",
    title: "Falta de Indicadores",
    description:
      "Impossibilidade de ver o faturamento real, ticket médio e taxa de retenção em um painel único e atualizado em tempo real.",
  },
];
</script>
<template>
  <section
    class="py-24 px-6 bg-white"
    id="problemas"
    data-purpose="problem-awareness"
  >
    <div class="container mx-auto">
      <BaseSectionHeader
        title="O problema real das escolas hoje"
        subtitle="Sua equipe perde tempo alternando entre janelas, planilhas e sistemas que não se conversam."
        :center="true"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="problem in problems"
          :key="problem.title"
          class="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-pm/20 transition-all hover:shadow-xl group cursor-default"
        >
          <div
            class="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors"
          >
            <span class="material-symbols-outlined">{{ problem.icon }}</span>
          </div>
          <h3 class="text-xl font-bold text-slate-800 mb-3">
            {{ problem.title }}
          </h3>
          <p class="text-slate-600 leading-relaxed text-sm">
            {{ problem.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
