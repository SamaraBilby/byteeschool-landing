<script setup lang="ts">
import BaseSectionHeader from "../header/BaseSectionHeader.vue";

const { t } = useLandingI18n();
const columns = computed(() => t.value.transparency.columns);
</script>

<template>
  <section class="py-24 px-6 bg-white" id="transparencia" data-purpose="product-roadmap">
    <div class="container mx-auto">
      <BaseSectionHeader :eyebrow="t.transparency.eyebrow" :title="t.transparency.title" :subtitle="t.transparency.subtitle" :center="true" />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(column, columnIndex) in columns" :key="column.title" class="p-8 rounded-2xl flex flex-col gap-6" :class="columnIndex === 0 ? 'bg-green-50' : columnIndex === 1 ? 'bg-amber-50' : 'bg-purple-50'">
          <div>
            <span class="text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-2" :class="columnIndex === 0 ? 'bg-green-700' : columnIndex === 1 ? 'bg-amber-500' : 'bg-pm'">
              <span class="w-1.5 h-1.5 bg-white rounded-full" />
              {{ column.badge }}
            </span>
          </div>

          <div>
            <h3 class="text-xl font-extrabold text-slate-900 mb-2">{{ column.title }}</h3>
            <p class="text-sm text-slate-600 leading-relaxed">{{ column.description }}</p>
          </div>

          <ul class="space-y-3">
            <li v-for="(item, i) in column.items" :key="item" class="flex items-center gap-3 text-slate-700 text-sm font-medium pb-2" :class="i < column.items.length - 1 ? 'border-b border-slate-200/50' : ''">
              <span class="w-1.5 h-1.5 rounded-full flex-shrink-0" :class="columnIndex === 0 ? 'bg-green-700' : columnIndex === 1 ? 'bg-amber-500' : 'bg-pm'" />
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <p class="mt-10 text-center text-xs text-slate-500 max-w-3xl mx-auto">{{ t.transparency.note }}</p>
    </div>
  </section>
</template>
