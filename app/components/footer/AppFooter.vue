<script setup lang="ts">
const currentYear = new Date().getFullYear();

const footerLinks = [
  {
    title: "Plataforma",
    links: [
      { label: "Funcionalidades", href: "#solucao" },
      { label: "Planos e Preços", href: "#planos" },
      { label: "Segurança de Dados", href: "#transparencia" },
      { label: "API para Devs", href: "#" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre a ByteE", href: "#" },
      { label: "Blog Educacional", href: "#" },
      { label: "Trabalhe Conosco", href: "#" },
      { label: "Contato", href: "#dor-especifica" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { label: "Central de Ajuda", href: "#" },
      { label: "Vídeos Tutoriais", href: "#" },
      { label: "Status do Sistema", href: "#" },
      { label: "Comunidade", href: "#" },
    ],
  },
];
</script>

<template>
  <footer class="bg-slate-900 text-white pt-20 pb-10 px-6">
    <div class="container mx-auto max-w-6xl">
      <!-- Top grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Brand column -->
        <div class="lg:col-span-1">
          <!-- Logo -->
          <div class="w-[45%] flex items-center justify-center">
            <img
              src="/image/logo.png"
              alt="Logo ByteESchool"
              class="w-100"
              title="ByteESchool"
            />
          </div>

          <p class="text-slate-400 text-sm leading-relaxed mb-6 mt-1">
            Transformando a gestão educacional através de tecnologia e processos
            inteligentes. Do administrativo ao coração da sala de aula.
          </p>

          <!-- Social / Contact icons -->
          <div class="flex gap-4">
            <a
              href="mailto:contato@byteeschool.com"
              class="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
              aria-label="E-mail"
            >
              <span class="material-symbols-outlined text-sm">mail</span>
            </a>
            <!-- <a
              href="tel:+55"
              class="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
              aria-label="Telefone"
            >
              <span class="material-symbols-outlined text-sm">call</span>
            </a> -->
          </div>
        </div>

        <!-- Links columns -->
        <div v-for="col in footerLinks" :key="col.title">
          <h4
            class="font-bold mb-6 text-sm uppercase tracking-widest text-white"
          >
            {{ col.title }}
          </h4>
          <ul class="space-y-4">
            <li v-for="link in col.links" :key="link.label">
              <a
                :href="link.href"
                class="text-slate-400 text-sm hover:text-om transition-colors"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div
        class="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500"
      >
        <p>© {{ currentYear }} ByteESchool Soluções Educacionais Ltda</p>
        <!-- <div class="flex gap-6">
          <a href="#" class="hover:text-white transition-colors"
            >Termos de Uso</a
          >
          <a href="#" class="hover:text-white transition-colors">Privacidade</a>
          <a href="#" class="hover:text-white transition-colors">LGPD</a>
        </div> -->
      </div>
    </div>
  </footer>
</template>
