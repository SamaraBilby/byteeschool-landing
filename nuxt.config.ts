import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase", "@nuxt/image"],
  supabase: {
    redirect: false,
  },
  runtimeConfig: {
    resendApiKey: "",
    supabaseServiceRoleKey: "",
    upstashRedisRestUrl: "",
    upstashRedisRestToken: "",
    public: {
      supabaseUrl: "",
      supabaseKey: "",
    },
  },
  app: {
    head: {
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=AW-18214366477",
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18214366477');
          `,
        },
      ],
      link: [
        // Sora — fonte principal
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap",
        },
      ],
    },
  },
});