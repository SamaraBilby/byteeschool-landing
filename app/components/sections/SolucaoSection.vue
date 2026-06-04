<script setup lang="ts">
import BaseBadge from "../badge/BaseBadge.vue";

const withoutList = [
  "Provas e atividades no Google Forms ou Microsoft Forms, sem conexão direta com a turma, o plano de aula e o cronograma pedagógico",
  "Exercícios criados em ferramentas soltas, dificultando saber qual conteúdo foi praticado por cada turma",
  "Revisões, tarefas e provas espalhadas entre links, mensagens, planilhas e arquivos separados",
  "Flashcards em aplicativos externos, sem ligação clara com a aula, o material didático ou o nível do aluno",
  "Atividades manuais, trabalhos e entregas controlados por WhatsApp, papel ou planilhas",
  "Professor gastando tempo criando plano, exercício, revisão e tarefa do zero",
  "Coordenação sem visão clara do que foi planejado, praticado, revisado e avaliado",
];

const withList = [
  "Provas, exercícios e atividades conectados à turma, ao conteúdo estudado e ao planejamento pedagógico",
  "Cronograma da turma com aulas, revisões, provas, tarefas e atividades em uma visão centralizada",
  "Materiais didáticos, livros, unidades e capítulos vinculados ao plano da aula",
  "Flashcards conectados ao conteúdo para reforço, memorização e revisão contínua",
  "Atividades manuais e trabalhos registrados como parte da rotina pedagógica da turma",
  "Professor com uma base organizada para planejar, aplicar, revisar e acompanhar atividades",
  "Auxílio de IA, quando habilitado pela escola, para sugerir planos, exercícios, revisões e tarefas",
];

const features = [
  {
    icon: "calendar_month",
    iconBg: "bg-pm/5",
    iconColor: "text-pm",
    title: "Plano e cronograma da turma",
    description:
      "Organize o caminho pedagógico da turma com aulas planejadas, conteúdos, revisões, provas, tarefas e materiais vinculados.",
    status: "launch",
  },
  {
    icon: "assignment",
    iconBg: "bg-om/5",
    iconColor: "text-om",
    title: "Exercícios e atividades",
    description:
      "Crie atividades para prática dos alunos e conecte cada exercício ao conteúdo, ao plano da aula e à turma correspondente.",
    status: "launch",
  },
  {
    icon: "quiz",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    title: "Provas com contexto pedagógico",
    description:
      "Planeje provas, revisões e atividades avaliativas dentro do cronograma da turma, sem depender apenas de links soltos em ferramentas externas.",
    status: "launch",
  },
  {
    icon: "style",
    iconBg: "bg-pm/5",
    iconColor: "text-pm",
    title: "Flashcards para reforço",
    description:
      "Use flashcards para apoiar memorização, vocabulário, revisão de conceitos e prática contínua conectada ao conteúdo estudado.",
    status: "launch",
  },
  {
    icon: "edit_note",
    iconBg: "bg-om/5",
    iconColor: "text-om",
    title: "Atividades manuais e trabalhos",
    description:
      "Organize tarefas em folha, redações, projetos, trabalhos e entregas manuais sem perder o vínculo com turma, professor e aula.",
    status: "launch",
  },
  {
    icon: "auto_awesome",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    title: "Auxílio de IA para professores",
    description:
      "Em evolução: sugestões assistidas para planos de aula, exercícios, revisões, tarefas e atividades, sempre com revisão do professor.",
    status: "roadmap",
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
        >
          A SOLUÇÃO
        </span>

        <h2
          class="text-3xl md:text-5xl font-extrabold text-pd mb-6 leading-tight"
        >
          De links e planilhas soltas para uma<br class="hidden md:block" />
          rotina pedagógica conectada
        </h2>

        <p class="text-slate-600 max-w-2xl">
          Google Forms, planilhas e mensagens ajudam em partes da rotina, mas
          não conectam tudo. A b8edu organiza turmas, materiais didáticos,
          planos de aula, exercícios, provas, flashcards e atividades em uma
          visão pedagógica centralizada.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <!-- SEM A B8EDU -->
        <div class="p-6 lg:p-8">
          <div class="flex items-center gap-2 mb-8">
            <span class="w-2 h-2 bg-red-500 rounded-full" />

            <h3
              class="text-xs font-extrabold text-slate-800 uppercase tracking-widest"
            >
              SEM A B8EDU
            </h3>
          </div>

          <ul class="space-y-5">
            <li v-for="item in withoutList" :key="item" class="flex gap-4">
              <span
                class="material-symbols-outlined text-red-500 font-bold flex-shrink-0 mt-0.5"
              >
                close
              </span>

              <p class="text-sm text-slate-700 font-medium">
                {{ item }}
              </p>
            </li>
          </ul>
        </div>

        <!-- COM A B8EDU -->
        <div class="bg-pm/5 border border-pm/10 p-8 lg:p-10 rounded-3xl">
          <div class="flex items-center gap-2 mb-8">
            <span class="w-2 h-2 bg-pm rounded-full" />

            <h3
              class="text-xs font-extrabold text-pm uppercase tracking-widest"
            >
              COM A B8EDU
            </h3>
          </div>

          <ul class="space-y-5">
            <li v-for="item in withList" :key="item" class="flex gap-4">
              <span
                class="material-symbols-outlined text-green-600 font-bold flex-shrink-0 mt-0.5"
              >
                check_box
              </span>

              <p class="text-sm text-slate-800 font-bold">
                {{ item }}
              </p>
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
            >
              {{ feature.icon }}
            </span>
          </div>

          <h4 class="text-lg font-extrabold text-pd mb-2">
            {{ feature.title }}
          </h4>

          <p class="text-sm text-slate-600 mb-6 leading-relaxed flex-1">
            {{ feature.description }}
          </p>

          <BaseBadge v-if="feature.status === 'launch'" variant="available">
            DISPONÍVEL NO LANÇAMENTO
          </BaseBadge>

          <span
            v-else
            class="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-purple-700 border border-purple-100"
          >
            EM EVOLUÇÃO
          </span>
        </div>
      </div>
    </div>
  </section>
</template>