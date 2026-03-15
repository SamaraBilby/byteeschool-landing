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

const siteUrl = "https://www.byteeschool.online";
const brandName = "ByteESchool";
const logoUrl = `${siteUrl}/og-image.png`;
const ogImageUrl = `${siteUrl}/og-image.png`;

useSeoMeta({
  title: "ByteESchool — Hub educacional",
  description:
    "Chega de ferramentas espalhadas. O ByteESchool centraliza pedagógico, comunicação, suporte e pagamentos em um único ecossistema educacional.",
  ogTitle: "ByteESchool — Hub educacional para escolas",
  ogDescription:
    "Centralize a operação da sua escola. Avaliações, turmas, tickets, notificações e pagamentos em um só lugar.",
  ogImage: ogImageUrl,
  ogUrl: `${siteUrl}/`,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterImage: ogImageUrl,
  robots: "index,follow",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: brandName,
      url: siteUrl,
      logo: logoUrl,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "contato@byteeschool.com",
          availableLanguage: ["pt-BR"],
        },
      ],
      // TODO: Quando tiver redes, descomente e preencha:
      // sameAs: [
      //   "https://www.linkedin.com/company/byteeschool",
      //   "https://www.instagram.com/byteeschool"
      // ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: `${brandName} — Hub educacional`,
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      url: siteUrl,
      description:
        "Hub educacional para escolas: avaliações, banco de questões, tickets, notificações e pagamentos em um só lugar.",
      image: ogImageUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
      offers: [
        {
          "@type": "Offer",
          priceCurrency: "BRL",
          price: "197",
          name: "Starter",
          url: `${siteUrl}/#planos`,
          availability: "https://schema.org/PreOrder",
        },
        {
          "@type": "Offer",
          priceCurrency: "BRL",
          price: "599",
          name: "Profissional",
          url: `${siteUrl}/#planos`,
          availability: "https://schema.org/PreOrder",
        },
        {
          "@type": "Offer",
          name: "Enterprise (Sob consulta)",
          url: `${siteUrl}/#planos`,
          availability: "https://schema.org/PreOrder",
        },
      ],
    },
  ],
};

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(jsonLd),
    },
  ],
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
