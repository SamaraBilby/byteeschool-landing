<script setup lang="ts">
import BaseSectionHeader from "../header/BaseSectionHeader.vue";

const firstVersion = [
  "Gestão de escolas, usuários, perfis e permissões",
  "Cadastro de turmas, professores e alunos",
  "Níveis, disciplinas e estrutura customizável por escola",
  "Materiais didáticos, livros, unidades e capítulos",
  "Plano pedagógico da turma",
  "Cronograma de aulas com conteúdos, revisões, provas e tarefas",
  "Exercícios e atividades vinculados ao plano de aula",
  "Provas e revisões dentro do cronograma da turma",
  "Flashcards para reforço e memorização",
  "Atividades manuais, trabalhos e entregas organizadas por turma",
  "Branding com logo e cores da escola",
];

const nextSteps = [
  "Diário de aula e registro do que foi realmente ministrado",
  "Chamada e controle de frequência",
  "Boletim e acompanhamento de desempenho por período",
  "Relatórios pedagógicos por turma, aluno e professor",
  "Painel avançado da coordenação",
  "Portal do responsável",
  "Notificações para alunos, professores e coordenação",
  "Integração com calendário",
];

const futureVision = [
  "Auxílio de IA para sugerir planos de aula",
  "IA para apoiar criação de exercícios, revisões e tarefas",
  "Sugestões de flashcards com base no conteúdo estudado",
  "Análise de alunos com dificuldade ou baixa participação",
  "Pagamentos e mensalidades com Asaas",
  "Certificados digitais",
  "Aulas ao vivo e videoaulas integradas",
  "Marketplace de conteúdos educacionais",
];
</script>

<template>
  <section
    class="py-24 px-6 bg-white"
    id="transparencia"
    data-purpose="product-roadmap"
  >
    <div class="container mx-auto">
      <BaseSectionHeader
        eyebrow="TRANSPARÊNCIA"
        title="O que vamos entregar primeiro e o que vem depois"
        subtitle="A b8edu está sendo construída por etapas. Primeiro, vamos organizar a base pedagógica: turmas, materiais, planos, aulas, atividades, provas e cronogramas. Depois, evoluímos para registros, relatórios, pagamentos e IA."
        :center="true"
      />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Coluna 1: Primeira versão -->
        <div class="bg-[#EBF5EE] p-8 rounded-2xl flex flex-col gap-6">
          <div>
            <span
              class="bg-[#388E3C] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-2"
            >
              <span class="w-1.5 h-1.5 bg-white rounded-full" />
              PRIMEIRA VERSÃO
            </span>
          </div>

          <div>
            <h3 class="text-xl font-extrabold text-slate-900 mb-2">
              Base pedagógica
            </h3>

            <p class="text-sm text-slate-600 leading-relaxed">
              O foco inicial é dar clareza para a rotina pedagógica da escola:
              organizar turmas, materiais, planos de aula, atividades, provas,
              flashcards e cronogramas.
            </p>
          </div>

          <ul class="space-y-3">
            <li
              v-for="(item, i) in firstVersion"
              :key="item"
              class="flex items-center gap-3 text-slate-700 text-sm font-medium pb-2"
              :class="
                i < firstVersion.length - 1
                  ? 'border-b border-slate-200/50'
                  : ''
              "
            >
              <span
                class="w-1.5 h-1.5 bg-[#388E3C] rounded-full flex-shrink-0"
              />
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Coluna 2: Próximas etapas -->
        <div class="bg-[#FFF9EE] p-8 rounded-2xl flex flex-col gap-6">
          <div>
            <span
              class="bg-[#F59E0B] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-2"
            >
              <span class="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              PRÓXIMAS ETAPAS
            </span>
          </div>

          <div>
            <h3 class="text-xl font-extrabold text-slate-900 mb-2">
              Registro e acompanhamento
            </h3>

            <p class="text-sm text-slate-600 leading-relaxed">
              Depois da base pedagógica, a plataforma evolui para acompanhar o
              que aconteceu na prática: aula dada, frequência, desempenho e
              relatórios.
            </p>
          </div>

          <ul class="space-y-3">
            <li
              v-for="(item, i) in nextSteps"
              :key="item"
              class="flex items-center gap-3 text-slate-700 text-sm font-medium pb-2"
              :class="
                i < nextSteps.length - 1
                  ? 'border-b border-slate-200/50'
                  : ''
              "
            >
              <span
                class="w-1.5 h-1.5 bg-[#F59E0B] rounded-full flex-shrink-0"
              />
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Coluna 3: Visão futura -->
        <div class="bg-[#F0EBFF] p-8 rounded-2xl flex flex-col gap-6">
          <div>
            <span
              class="bg-pm text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-2"
            >
              <span class="w-1.5 h-1.5 bg-white rounded-full" />
              VISÃO FUTURA
            </span>
          </div>

          <div>
            <h3 class="text-xl font-extrabold text-slate-900 mb-2">
              Inteligência e automação
            </h3>

            <p class="text-sm text-slate-600 leading-relaxed">
              A visão de futuro é reduzir trabalho repetitivo, apoiar
              professores com IA e conectar a operação pedagógica com recursos
              financeiros e administrativos.
            </p>
          </div>

          <ul class="space-y-3">
            <li
              v-for="(item, i) in futureVision"
              :key="item"
              class="flex items-center gap-3 text-slate-700 text-sm font-medium pb-2"
              :class="
                i < futureVision.length - 1
                  ? 'border-b border-slate-200/50'
                  : ''
              "
            >
              <span class="w-1.5 h-1.5 bg-pm rounded-full flex-shrink-0" />
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <p class="mt-10 text-center text-xs text-slate-500 max-w-3xl mx-auto">
        A ordem das funcionalidades pode evoluir conforme validação com escolas,
        professores e coordenação pedagógica. A proposta é construir a b8edu com
        clareza, sem prometer tudo de uma vez.
      </p>
    </div>
  </section>
</template>