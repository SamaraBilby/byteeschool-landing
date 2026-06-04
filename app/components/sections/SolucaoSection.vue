<script setup lang="ts">
import BaseBadge from "../badge/BaseBadge.vue";

const { t } = useLandingI18n();
const withoutList = computed(() => t.value.solution.withoutList);
const withList = computed(() => t.value.solution.withList);
const features = computed(() => t.value.solution.features);
</script>

<template>
  <section class="py-24 px-6 bg-white" id="s-solucao">
    <div class="container mx-auto max-w-6xl">
      <div class="mb-12">
        <span class="text-om font-bold uppercase tracking-widest text-sm mb-2 block">
          {{ t.solution.eyebrow }}
        </span>

        <h2 class="text-3xl md:text-5xl font-extrabold text-pd mb-6 leading-tight" v-html="t.solution.title" />

        <p class="text-slate-600 max-w-2xl">
          {{ t.solution.subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div class="p-6 lg:p-8">
          <div class="flex items-center gap-2 mb-8">
            <span class="w-2 h-2 bg-red-500 rounded-full" />
            <h3 class="text-xs font-extrabold text-slate-800 uppercase tracking-widest">
              {{ t.solution.withoutTitle }}
            </h3>
          </div>

          <ul class="space-y-5">
            <li v-for="item in withoutList" :key="item" class="flex gap-4">
              <span class="material-symbols-outlined text-red-500 font-bold flex-shrink-0 mt-0.5">close</span>
              <p class="text-sm text-slate-700 font-medium">{{ item }}</p>
            </li>
          </ul>
        </div>

        <div class="bg-pm/5 border border-pm/10 p-8 lg:p-10 rounded-3xl">
          <div class="flex items-center gap-2 mb-8">
            <span class="w-2 h-2 bg-pm rounded-full" />
            <h3 class="text-xs font-extrabold text-pm uppercase tracking-widest">
              {{ t.solution.withTitle }}
            </h3>
          </div>

          <ul class="space-y-5">
            <li v-for="item in withList" :key="item" class="flex gap-4">
              <span class="material-symbols-outlined text-green-600 font-bold flex-shrink-0 mt-0.5">check_box</span>
              <p class="text-sm text-slate-800 font-bold">{{ item }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="py-24 px-6 bg-slate-50" id="solucao" data-purpose="the-solution">
    <div class="container mx-auto max-w-6xl">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
        <div v-for="feature in features" :key="feature.title" class="flex flex-col items-start text-left">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-6" :class="feature.iconBg">
            <span class="material-symbols-outlined" :class="feature.iconColor">{{ feature.icon }}</span>
          </div>

          <h4 class="text-lg font-extrabold text-pd mb-2">{{ feature.title }}</h4>
          <p class="text-sm text-slate-600 mb-6 leading-relaxed flex-1">{{ feature.description }}</p>

          <BaseBadge v-if="feature.status === 'launch'" variant="available">
            {{ t.solution.launchBadge }}
          </BaseBadge>

          <span v-else class="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-purple-700 border border-purple-100">
            {{ t.solution.roadmapBadge }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
