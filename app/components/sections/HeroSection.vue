<script setup lang="ts">
const { t } = useLandingI18n();

const schoolTypes = computed(() => t.value.hero.schoolTypes);
const lessonPlanItems = computed(() => t.value.hero.lessonPlanItems);
const heroStats = computed(() => t.value.hero.stats);
</script>

<template>
  <!-- pt-20 = compensa o header fixo de h-20 -->
  <section
    class="gradient-hero md:pt-40 pb-20 px-6 relative overflow-hidden"
    data-purpose="hero"
    id="hero"
  >
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl"
      />
      <div
        class="absolute bottom-0 -left-32 w-80 h-80 bg-om/10 rounded-full blur-3xl"
      />
    </div>

    <div class="container mx-auto relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- LEFT: Copy -->
        <div>
          <!-- Eyebrow badge -->
          <div
            class="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest"
          >
            <span class="w-2 h-2 bg-om rounded-full animate-pulse" />
            {{ t.hero.eyebrow }}
          </div>

          <!-- Headline -->
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            {{ t.hero.titleBefore }}
            <span class="text-om relative">
              {{ t.hero.titleHighlight }}
              <svg
                class="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 300 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6C60 2 180 2 298 6"
                  stroke="#E8820C"
                  stroke-width="3"
                  stroke-linecap="round"
                  opacity="0.6"
                />
              </svg>
            </span>
            {{ t.hero.titleAfter }}
          </h1>

          <!-- Subheadline -->
          <p class="text-white/80 text-lg leading-relaxed mb-10 max-w-xl">
            {{ t.hero.subtitle }}
          </p>

          <!-- CTA Group -->
          <div class="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#lista-espera"
              class="inline-flex items-center justify-center gap-2 bg-om text-white font-bold px-8 py-4 rounded-xl hover:bg-orange-600 transition-all active:scale-95 shadow-lg text-base"
            >
              <span class="material-symbols-outlined">rocket_launch</span>
              {{ t.hero.primaryCta }}
            </a>

            <a
              href="#solucao"
              class="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-6 py-4 rounded-xl hover:bg-white/20 transition-all text-base"
            >
              {{ t.hero.secondaryCta }}
              <span class="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </a>
          </div>

          <!-- Social Proof: Tipos de escola -->
          <div>
            <p
              class="text-white/50 text-xs font-bold uppercase tracking-widest mb-3"
            >
              {{ t.hero.schoolTypesLabel }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="type in schoolTypes"
                :key="type"
                class="text-xs font-semibold text-white/80 bg-white/10 border border-white/20 px-3 py-1.5 rounded-lg"
              >
                {{ type }}
              </span>
            </div>
          </div>
        </div>

        <!-- RIGHT: Live UI Preview Cards -->
        <div class="hidden lg:block relative">
          <!-- Main Card: Classroom Schedule -->
          <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-sm ml-auto">
            <!-- Card Header -->
            <div class="flex justify-between items-center mb-5">
              <div>
                <div
                  class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1"
                >
                  {{ t.hero.card.eyebrow }}
                </div>

                <div class="text-sm font-extrabold text-pd">
                  {{ t.hero.card.title }}
                </div>
              </div>

              <span
                class="bg-green-50 text-green-700 text-[10px] font-bold px-2.5 py-1 rounded-full border border-green-100 uppercase tracking-wider"
              >
                {{ t.hero.card.status }}
              </span>
            </div>

            <!-- Progress -->
            <div class="mb-5">
              <div
                class="flex justify-between text-[10px] text-slate-400 mb-1.5"
              >
                <span>{{ t.hero.card.progressLabel }}</span>
                <span class="font-bold text-pd">62%</span>
              </div>

              <div class="w-full bg-slate-100 rounded-full h-1.5">
                <div class="bg-pm h-1.5 rounded-full" style="width: 62%" />
              </div>
            </div>

            <!-- Lesson preview -->
            <div class="bg-slate-50 rounded-xl p-4 mb-4 text-xs">
              <div
                class="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-2"
              >
                {{ t.hero.card.lessonEyebrow }}
              </div>

              <div class="text-slate-700 font-medium">
                {{ t.hero.card.lessonDescription }}
              </div>
            </div>

            <!-- Lesson plan items -->
            <div class="space-y-2 mb-4">
              <div
                v-for="(item, i) in lessonPlanItems"
                :key="i"
                class="flex items-center gap-3 p-2.5 rounded-lg border text-xs font-medium transition-all"
                :class="
                  item.selected
                    ? 'border-pm bg-pm/5 text-pd'
                    : 'border-slate-100 text-slate-600 hover:border-pm/30'
                "
              >
                <div
                  class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  :class="item.selected ? 'bg-pm text-white' : 'bg-slate-100 text-slate-400'"
                >
                  <span class="material-symbols-outlined text-sm">
                    {{ item.selected ? "event_available" : "event_note" }}
                  </span>
                </div>

                <div class="min-w-0 flex-1">
                  <div class="truncate">
                    {{ item.label }}
                  </div>

                  <span
                    class="inline-block mt-1 text-[9px] font-bold uppercase tracking-wider"
                    :class="item.selected ? 'text-pm' : 'text-slate-400'"
                  >
                    {{ item.badge }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Stats row -->
            <div class="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
              <div
                v-for="stat in heroStats"
                :key="stat.label"
                class="text-center"
              >
                <div class="text-pd font-bold text-base">
                  {{ stat.value }}
                </div>

                <div
                  class="text-[9px] text-slate-400 uppercase tracking-wide leading-tight"
                >
                  {{ stat.label }}
                </div>
              </div>
            </div>
          </div>

          <!-- Floating card: Classroom plan -->
          <div
            class="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 w-60 border border-slate-100"
          >
            <div class="flex justify-between items-start mb-2">
              <span
                class="text-[10px] font-bold text-slate-400 uppercase tracking-wider"
              >
                {{ t.hero.card.planEyebrow }}
              </span>

              <span
                class="bg-pm/10 text-pm text-[10px] font-bold px-2 py-0.5 rounded-full"
              >
                {{ t.hero.card.planStatus }}
              </span>
            </div>

            <div class="flex gap-3 items-start">
              <div
                class="w-8 h-8 bg-pm/5 rounded-xl flex items-center justify-center text-pm flex-shrink-0"
              >
                <span class="material-symbols-outlined text-sm">
                  checklist
                </span>
              </div>

              <div>
                <h4 class="text-xs font-extrabold text-pd">
                  {{ t.hero.card.planTitle }}
                </h4>

                <p class="text-[10px] text-slate-500 leading-snug">
                  {{ t.hero.card.planDescription }}
                </p>
              </div>
            </div>
          </div>

          <!-- Floating card: Teaching material -->
          <div
            class="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-xl p-4 w-60 border border-slate-100"
          >
            <div class="flex justify-between items-start mb-2">
              <span
                class="text-[10px] font-bold text-slate-400 uppercase tracking-wider"
              >
                {{ t.hero.card.materialEyebrow }}
              </span>

              <span
                class="bg-om/10 text-om text-[10px] font-bold px-2 py-0.5 rounded-full"
              >
                {{ t.hero.card.materialStatus }}
              </span>
            </div>

            <div class="flex gap-3 items-start">
              <div
                class="w-8 h-8 bg-om/5 rounded-xl flex items-center justify-center text-om flex-shrink-0"
              >
                <span class="material-symbols-outlined text-sm">
                  menu_book
                </span>
              </div>

              <div>
                <h4 class="text-xs font-extrabold text-pd">
                  {{ t.hero.card.materialTitle }}
                </h4>

                <p class="text-[10px] text-slate-500 leading-snug">
                  {{ t.hero.card.materialDescription }}
                </p>
              </div>
            </div>
          </div>
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
