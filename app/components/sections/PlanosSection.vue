<script setup lang="ts">
import BaseSectionHeader from "../header/BaseSectionHeader.vue";

const { t } = useLandingI18n();
const cards = computed(() => t.value.plans.cards);
</script>

<template>
  <section class="py-24 px-6 bg-white" id="planos" data-purpose="pricing">
    <div class="container mx-auto max-w-5xl">
      <BaseSectionHeader :title="t.plans.title" :subtitle="t.plans.subtitle" :center="true" />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div v-for="card in cards" :key="card.name" class="rounded-2xl p-8 flex flex-col gap-6 relative transition-all hover:shadow-lg" :class="card.highlighted ? 'gradient-hero shadow-xl shadow-pm/20 -mt-0 md:-mt-4' : 'border border-slate-200 hover:border-pm/30'">
          <div v-if="card.ribbon" class="absolute -top-3 left-1/2 -translate-x-1/2">
            <span class="bg-om text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">{{ card.ribbon }}</span>
          </div>

          <div>
            <h3 class="text-lg font-extrabold mb-1" :class="card.highlighted ? 'text-white' : 'text-pd'">{{ card.name }}</h3>
            <div class="flex flex-col gap-1">
              <span class="text-2xl font-black" :class="card.highlighted ? 'text-white' : 'text-pd'">{{ card.price }}</span>
              <span class="text-xs" :class="card.highlighted ? 'text-white/60' : 'text-slate-400'">{{ card.period }}</span>
            </div>
            <p class="text-xs mt-3 leading-relaxed" :class="card.highlighted ? 'text-white/70' : 'text-slate-500'">{{ card.description }}</p>
          </div>

          <ul class="space-y-3 flex-1">
            <li v-for="item in card.features" :key="item" class="flex items-start gap-3 text-sm" :class="card.highlighted ? 'text-white/90' : 'text-slate-700'">
              <span class="material-symbols-outlined text-base mt-0.5 flex-shrink-0" :class="card.highlighted ? 'text-om' : 'text-green-500'">check_circle</span>
              {{ item }}
            </li>
          </ul>

          <a href="#lista-espera" class="w-full inline-flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-xl transition-all active:scale-95 text-sm" :class="card.highlighted ? 'bg-om text-white hover:bg-orange-600 shadow-lg shadow-om/30' : 'border-2 border-pm text-pm hover:bg-pm hover:text-white'">
            <span v-if="card.highlighted" class="material-symbols-outlined text-base">rocket_launch</span>
            {{ card.cta }}
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
