<script setup lang="ts">
import BaseSectionHeader from "../header/BaseSectionHeader.vue";
import BaseBadge from "../badge/BaseBadge.vue";

const steps = [
  {
    title: "A escola configura sua estrutura",
    description:
      "A b8edu se adapta ao formato da escola: escola regular, escola de idiomas, curso livre, reforço escolar ou curso técnico. A escola define sua identidade, níveis, disciplinas, perfis e permissões.",
    tag: "Multi-tenant",
    tagVariant: "available" as const,
    active: true,
  },
  {
    title: "Turmas, professores e alunos são organizados",
    description:
      "A coordenação cadastra turmas por nível, período, modalidade e horário. Professores e alunos são vinculados às turmas, mantendo cada informação no contexto certo.",
    tag: "Base pedagógica",
    tagVariant: "purple" as const,
    active: false,
  },
  {
    title: "Materiais e conteúdos entram no plano",
    description:
      "Livros, apostilas, unidades, capítulos, cursos e conteúdos próprios podem ser conectados ao plano da turma. Assim, o material didático deixa de ficar solto e passa a fazer parte do cronograma.",
    tag: "Materiais",
    tagVariant: "orange" as const,
    active: false,
  },
  {
    title: "A turma ganha um plano e um cronograma",
    description:
      "A coordenação ou o professor monta o caminho pedagógico da turma: aulas, conteúdos, revisões, provas, atividades, flashcards, tarefas e entregas manuais organizados por data.",
    tag: "Cronograma",
    tagVariant: "available" as const,
    active: false,
  },
  {
    title: "Professor e aluno acompanham a rotina",
    description:
      "O professor visualiza o que será trabalhado em cada aula e o aluno acompanha conteúdos, atividades, provas, revisões e tarefas publicadas para sua turma.",
    tag: "Visão por perfil",
    tagVariant: "purple" as const,
    active: false,
  },
  {
    title: "A plataforma evolui com registros e IA",
    description:
      "Nas próximas etapas, a b8edu evolui para diário de aula, frequência, boletim, relatórios e auxílio de IA para sugerir planos, exercícios, revisões, flashcards e tarefas, sempre com revisão do professor.",
    tag: "Em evolução",
    tagVariant: "orange" as const,
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
        title="Da rotina espalhada ao planejamento conectado"
        subtitle="A b8edu organiza o caminho pedagógico da escola em etapas: estrutura, turmas, materiais, planos, cronogramas, atividades e acompanhamento."
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
              <h3 class="text-lg font-extrabold text-pd">
                {{ step.title }}
              </h3>

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