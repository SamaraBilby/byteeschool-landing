<script setup lang="ts">
const { t } = useLandingI18n();
const currentYear = new Date().getFullYear();
const footerLinks = computed(() => t.value.footer.columns);
</script>

<template>
  <footer class="bg-slate-900 text-white pt-20 pb-10 px-6">
    <div class="container mx-auto max-w-6xl">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div class="lg:col-span-1">
          <div class="w-[45%] flex items-center justify-center">
            <img src="/image/b8edu-logos-sem-fundo.png" alt="Logo b8edu" class="w-100" title="b8edu" />
          </div>

          <p class="text-slate-400 text-sm leading-relaxed mb-6 mt-1">{{ t.footer.description }}</p>

          <div class="flex gap-4">
            <a href="mailto:contato@b8edu.online" class="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all" :aria-label="t.footer.emailAria">
              <span class="material-symbols-outlined text-sm">mail</span>
            </a>
          </div>
        </div>

        <div v-for="col in footerLinks" :key="col.title">
          <h4 class="font-bold mb-6 text-sm uppercase tracking-widest text-white">{{ col.title }}</h4>
          <ul class="space-y-4">
            <li v-for="link in col.links" :key="link.label">
              <a :href="link.href" class="text-slate-400 text-sm hover:text-om transition-colors">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
        <p>© {{ currentYear }} {{ t.footer.copyright }}</p>
      </div>
    </div>
  </footer>
</template>
