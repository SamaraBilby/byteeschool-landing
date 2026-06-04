<script setup lang="ts">
import BaseSectionHeader from "../header/BaseSectionHeader.vue";

const problems = [
  {
    icon: "event_busy",
    title: "Planejamento pedagógico espalhado",
    description:
      "Planos de aula, conteúdos, revisões e provas acabam divididos entre planilhas, cadernos, mensagens e arquivos soltos. A coordenação perde a visão do caminho da turma.",
  },
  {
    icon: "assignment_late",
    title: "Exercícios e provas desconectados",
    description:
      "Atividades, exercícios, provas e revisões muitas vezes são criados fora do planejamento da turma, dificultando saber o que foi praticado, avaliado e retomado em cada etapa.",
  },
  {
    icon: "style",
    title: "Flashcards fora da rotina de estudo",
    description:
      "Flashcards podem ajudar muito na fixação, especialmente em idiomas e conteúdos de memorização, mas geralmente ficam em ferramentas separadas e sem ligação com a aula do dia.",
  },
  {
    icon: "edit_note",
    title: "Atividades manuais sem organização",
    description:
      "Trabalhos, tarefas em folha, redações, projetos, atividades em sala e entregas manuais nem sempre ficam conectados à turma, ao professor, ao conteúdo e ao cronograma.",
  },
  {
    icon: "menu_book",
    title: "Material didático sem vínculo com a aula",
    description:
      "Livros, apostilas, unidades, capítulos e conteúdos próprios muitas vezes não ficam ligados ao plano da turma, dificultando saber exatamente o que será ensinado e praticado.",
  },
  {
    icon: "auto_awesome",
    title: "Professor cria tudo do zero",
    description:
      "Montar plano de aula, exercício, revisão, atividade e tarefa consome tempo. Sem apoio inteligente, o professor repete trabalho manual que poderia ser agilizado com sugestões assistidas.",
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
        title="A rotina pedagógica ainda fica espalhada demais"
        subtitle="Turmas, planos de aula, materiais, exercícios, provas, flashcards e atividades precisam conversar entre si para a escola acompanhar melhor o aprendizado."
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
            <span class="material-symbols-outlined">
              {{ problem.icon }}
            </span>
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