<script setup lang="ts">
import AppNav from "./nav/AppNav.vue";
import HeroSection from "./sections/HeroSection.vue";
import ProblemSection from "./sections/ProblemSection.vue";
import SolucaoSection from "./sections/SolucaoSection.vue";
import TransparencySection from "./sections/TransparencySection.vue";
import StepsSection from "./sections/StepsSection.vue";
import PlanosSection from "./sections/PlanosSection.vue";
import WaitlistSection from "./sections/WaitlistSection.vue";
import DorEspecificaSection from "./sections/DorEspecificaSection.vue";
import AppFooter from "./footer/AppFooter.vue";
import { defaultLocale, messages, supportedLocales } from "~/utils/i18n";

const { locale, t, localizedPath } = useLandingI18n();

const siteUrl = "https://www.b8edu.online";
const brandName = "b8edu";
const ogImageUrl = `${siteUrl}/og-image.png`;
const logoUrl = `${siteUrl}/og-image.png`;

const pageUrl = computed(() => `${siteUrl}${localizedPath(locale.value)}`);

useSeoMeta({
  title: () => t.value.seo.title,
  description: () => t.value.seo.description,
  ogTitle: () => t.value.seo.title,
  ogDescription: () => t.value.seo.ogDescription,
  ogImage: ogImageUrl,
  ogUrl: () => pageUrl.value,
  ogType: "website",
  ogSiteName: brandName,
  ogLocale: () => locale.value === "pt" ? "pt_BR" : locale.value === "en" ? "en_CA" : locale.value === "fr" ? "fr_CA" : "es_ES",
  twitterCard: "summary_large_image",
  twitterTitle: () => t.value.seo.title,
  twitterDescription: () => t.value.seo.description,
  twitterImage: ogImageUrl,
  robots: "index,follow",
});

const jsonLd = computed(() => ({
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
      description: t.value.seo.organizationDescription,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "contato@b8edu.online",
          availableLanguage: ["pt-BR", "en-CA", "es", "fr-CA"],
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
      inLanguage: locale.value,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl.value}#webpage`,
      url: pageUrl.value,
      name: t.value.seo.title,
      description: t.value.seo.description,
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
      inLanguage: locale.value,
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: brandName,
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      url: siteUrl,
      description: t.value.seo.softwareDescription,
      image: ogImageUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      audience: [
        { "@type": "Audience", audienceType: "Regular schools" },
        { "@type": "Audience", audienceType: "Language schools" },
        { "@type": "Audience", audienceType: "Free courses" },
        { "@type": "Audience", audienceType: "Tutoring programs" },
        { "@type": "Audience", audienceType: "Technical courses" },
      ],
      featureList: t.value.solution.features.map((feature) => feature.title),
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BRL",
        availability: "https://schema.org/PreOrder",
        url: `${siteUrl}/#lista-espera`,
        name: t.value.nav.waitlist,
      },
    },
  ],
}));

useHead({
  htmlAttrs: {
    lang: () => supportedLocales.find((item) => item.code === locale.value)?.iso || "pt-BR",
  },
  link: [
    {
      rel: "canonical",
      href: () => pageUrl.value,
    },
    ...supportedLocales.map((item) => ({
      rel: "alternate",
      hreflang: item.iso,
      href: `${siteUrl}${item.code === defaultLocale ? "/" : `/${item.code}`}`,
    })),
    {
      rel: "alternate",
      hreflang: "x-default",
      href: `${siteUrl}/`,
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: () => JSON.stringify(jsonLd.value),
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
