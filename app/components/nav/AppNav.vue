<script setup lang="ts">
const scrolled = ref(false);
const mobileOpen = ref(false);

const navLinks = [
  { href: "#problemas", label: "Problema" },
  { href: "#solucao", label: "Solução" },
  { href: "#transparencia", label: "Recursos" },
  { href: "#planos", label: "Planos" },
];

function handleScroll() {
  scrolled.value = window.scrollY > 20;
}

onMounted(() => window.addEventListener("scroll", handleScroll));
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
      class="w-[100%]container mx-auto px-6 h-25 flex items-center justify-between"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 flex-shrink-0">
        <div class="w-32 md:w-[25%] flex items-center justify-center">
          <img
            src="/image/logo.png"
            alt="Logo ByteESchool"
            class="w-100"
            title="ByteESchool"
          />
        </div>
        <!-- <div class="leading-tight">
          <span class="font-black text-pd text-sm block leading-none"
            >ByteE</span
          >
          <span class="font-black text-om text-sm block leading-none"
            >School</span
          >
        </div> -->
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
        <!-- <a
          href="#planos"
          class="text-sm font-semibold text-slate-600 hover:text-pd transition-colors px-4 py-2"
        >
          Entrar
        </a> -->
        <a
          href="#lista-espera"
          class="inline-flex items-center gap-2 bg-om text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-orange-600 transition-all active:scale-95 shadow-sm"
        >
          <span class="material-symbols-outlined text-base">rocket_launch</span>
          Lista de espera
        </a>
      </div>

      <!-- Mobile Hamburger -->
      <button
        class="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
        :aria-label="mobileOpen ? 'Fechar menu' : 'Abrir menu'"
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
        <a
          href="#lista-espera"
          class="inline-flex items-center justify-center gap-2 bg-om text-white font-bold text-sm px-5 py-3 rounded-xl mt-2"
          @click="mobileOpen = false"
        >
          <span class="material-symbols-outlined text-base">rocket_launch</span>
          Entrar na lista de espera
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
