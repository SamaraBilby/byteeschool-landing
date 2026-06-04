<script setup lang="ts">
const { t, locale, supportedLocales, localizedPath } = useLandingI18n();

const scrolled = ref(false);
const mobileOpen = ref(false);

const navLinks = computed(() => [
  { href: "#problemas", label: t.value.nav.problem },
  { href: "#solucao", label: t.value.nav.solution },
  { href: "#transparencia", label: t.value.nav.resources },
]);

function handleScroll() {
  scrolled.value = window.scrollY > 20;
}

onMounted(() => window.addEventListener("scroll", handleScroll));
onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));
</script>
<template>
  <header
    class="fixed top-0 w-full z-50 border-b border-slate-200 transition-all duration-300"
    :class="
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm'
        : 'bg-white/95 backdrop-blur-md'
    "
  >
    <nav
      class="w-[100%] mx-auto px-2 h-25 flex items-center justify-between gap-4"
    >
      <!-- Logo -->
      <NuxtLink :to="localizedPath(locale)" class="flex items-center gap-2 flex-shrink-0">
        <div class="w-10 md:w-[10%] flex items-center justify-center">
          <img
            src="/image/b8edu-logos-sem-fundo.png"
            alt="Logo b8edu"
            class="w-100"
            title="b8edu"
          />
        </div>
      </NuxtLink>

      <!-- Desktop Links -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="text-sm font-semibold text-slate-600 hover:text-pd transition-colors"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Desktop CTA -->
      <div class="hidden md:flex items-center gap-3">
        <div class="flex items-center gap-1" :aria-label="t.nav.language">
          <NuxtLink
            v-for="item in supportedLocales"
            :key="item.code"
            :to="localizedPath(item.code)"
            class="text-[11px] font-black px-2 py-1 rounded-lg transition-all"
            :class="item.code === locale ? 'bg-pm text-white' : 'text-slate-500 hover:bg-slate-100 hover:text-pd'"
          >
            {{ item.shortName }}
          </NuxtLink>
        </div>

        <a
          href="#lista-espera"
          class="inline-flex items-center gap-2 bg-om text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-orange-600 transition-all active:scale-95 shadow-sm"
        >
          <span class="material-symbols-outlined text-base">rocket_launch</span>
          {{ t.nav.waitlist }}
        </a>
      </div>

      <!-- Mobile Hamburger -->
      <button
        class="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
        :aria-label="mobileOpen ? t.nav.closeMenu : t.nav.openMenu"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="material-symbols-outlined">
          {{ mobileOpen ? "close" : "menu" }}
        </span>
      </button>
    </nav>
    <div class="h-[5px] w-full rainbow-bar" />
    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div
        v-if="mobileOpen"
        class="md:hidden bg-white border-t border-slate-100 px-6 py-6 flex flex-col gap-4"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-semibold text-slate-700 py-2 border-b border-slate-100 last:border-0"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </a>

        <div class="flex items-center gap-2 py-2">
          <NuxtLink
            v-for="item in supportedLocales"
            :key="item.code"
            :to="localizedPath(item.code)"
            class="text-xs font-black px-3 py-2 rounded-lg transition-all"
            :class="item.code === locale ? 'bg-pm text-white' : 'text-slate-500 bg-slate-100'"
            @click="mobileOpen = false"
          >
            {{ item.shortName }}
          </NuxtLink>
        </div>

        <a
          href="#lista-espera"
          class="inline-flex items-center justify-center gap-2 bg-om text-white font-bold text-sm px-5 py-3 rounded-xl mt-2"
          @click="mobileOpen = false"
        >
          <span class="material-symbols-outlined text-base">rocket_launch</span>
          {{ t.nav.joinWaitlist }}
        </a>
      </div>
    </Transition>
  </header>
</template>
<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.2s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
.rainbow-bar {
  background: linear-gradient(
    to right,
    #6b21a8,
    #3b82f6,
    #22c55e,
    #eab308,
    #f97316,
    #ef4444
  );
}
</style>
