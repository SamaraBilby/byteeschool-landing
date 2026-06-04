<script setup lang="ts">
import BaseSectionHeader from "../header/BaseSectionHeader.vue";

const { t } = useLandingI18n();
const problems = computed(() => t.value.problem.items);
</script>

<template>
  <section class="py-24 px-6 bg-white" id="problemas" data-purpose="problem-awareness">
    <div class="container mx-auto">
      <BaseSectionHeader :title="t.problem.title" :subtitle="t.problem.subtitle" :center="true" />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="problem in problems"
          :key="problem.title"
          class="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-pm/20 transition-all hover:shadow-xl group cursor-default"
        >
          <div class="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
            <span class="material-symbols-outlined">{{ problem.icon }}</span>
          </div>
          <h3 class="text-xl font-bold text-slate-800 mb-3">{{ problem.title }}</h3>
          <p class="text-slate-600 leading-relaxed text-sm">{{ problem.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
