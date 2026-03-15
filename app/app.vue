<script setup lang="ts">
import AppNav from "./components/nav/AppNav.vue";
import HeroSection from "./components/sections/HeroSection.vue";
import ProblemSection from "./components/sections/ProblemSection.vue";
import SolucaoSection from "./components/sections/SolucaoSection.vue";
import TransparencySection from "./components/sections/TransparencySection.vue";
import StepsSection from "./components/sections/StepsSection.vue";
import PlanosSection from "./components/sections/PlanosSection.vue";
import WaitlistSection from "./components/sections/WaitlistSection.vue";
import DorEspecificaSection from "./components/sections/DorEspecificaSection.vue";
import AppFooter from "./components/footer/AppFooter.vue";

useSeoMeta({
  title: "ByteESchool — Hub educacional",
  description:
    "Chega de ferramentas espalhadas. O ByteESchool centraliza pedagógico, comunicação, suporte e pagamentos em um único ecossistema educacional.",
  ogTitle: "ByteESchool — Hub educacional para escolas",
  ogDescription:
    "Centralize a operação da sua escola. Avaliações, turmas, tickets, notificações e pagamentos em um só lugar.",
  ogImage: "https://byteeschool.com.br/og-image.png",
  ogUrl: "https://byteeschool.com.br",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <main>
    <AppNav />
    <HeroSection />
    <ProblemSection />
    <SolucaoSection />
    <TransparencySection />
    <StepsSection />
    <PlanosSection />
    <WaitlistSection />
    <DorEspecificaSection />
    <AppFooter />
  </main>
</template>
