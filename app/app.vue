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

const siteUrl = "https://www.b8edu.online";
const brandName = "b8edu";

const pageTitle =
  "b8edu | Plataforma educacional para gestão pedagógica e cronograma de aulas";

const pageDescription =
  "A b8edu ajuda escolas regulares, escolas de idiomas, cursos livres e reforço escolar a organizar turmas, professores, alunos, materiais didáticos, planos de aula e cronogramas.";

const ogImageUrl = `${siteUrl}/og-image.png`;
const logoUrl = `${siteUrl}/og-image.png`;

useSeoMeta({
  title: pageTitle,
  description: pageDescription,

  ogTitle: pageTitle,
  ogDescription:
    "Organize a rotina pedagógica da sua escola: turmas, professores, alunos, materiais didáticos, planos de aula e cronogramas em uma plataforma centralizada.",
  ogImage: ogImageUrl,
  ogUrl: `${siteUrl}/`,
  ogType: "website",
  ogSiteName: brandName,
  ogLocale: "pt_BR",

  twitterCard: "summary_large_image",
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
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
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
      description:
        "A b8edu é uma plataforma educacional para escolas organizarem turmas, professores, alunos, materiais didáticos, planos pedagógicos e cronogramas de aula.",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "contato@b8edu.online",
          availableLanguage: ["pt-BR"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: brandName,
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "pt-BR",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: pageTitle,
      description: pageDescription,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#software`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImageUrl,
      },
      inLanguage: "pt-BR",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: brandName,
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      url: siteUrl,
      description:
        "Plataforma educacional para gestão pedagógica, organização de turmas, materiais didáticos, planos de aula e cronogramas.",
      image: ogImageUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      audience: [
        {
          "@type": "Audience",
          audienceType: "Escolas regulares",
        },
        {
          "@type": "Audience",
          audienceType: "Escolas de idiomas",
        },
        {
          "@type": "Audience",
          audienceType: "Cursos livres",
        },
        {
          "@type": "Audience",
          audienceType: "Reforço escolar",
        },
        {
          "@type": "Audience",
          audienceType: "Cursos técnicos",
        },
      ],
      featureList: [
        "Gestão de turmas",
        "Organização de professores e alunos",
        "Materiais didáticos por turma",
        "Plano pedagógico da turma",
        "Plano de aula",
        "Cronograma de aulas",
        "Revisões, provas e atividades planejadas",
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BRL",
        availability: "https://schema.org/PreOrder",
        url: `${siteUrl}/#waitlist`,
        name: "Lista de interesse",
      },
    },
  ],
};

useHead({
  htmlAttrs: {
    lang: "pt-BR",
  },
  link: [
    {
      rel: "canonical",
      href: `${siteUrl}/`,
    },
  ],
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
    <WaitlistSection />
    <DorEspecificaSection />
    <AppFooter />
  </main>
</template>