<script setup lang="ts">
import { isSupportedLocale } from "~/utils/i18n";

const route = useRoute();
const localeParam = Array.isArray(route.params.locale) ? route.params.locale[0] : route.params.locale;

if (!isSupportedLocale(localeParam)) {
  throw createError({ statusCode: 404, statusMessage: "Page not found" });
}
</script>

<template>
  <LandingPage />
</template>
