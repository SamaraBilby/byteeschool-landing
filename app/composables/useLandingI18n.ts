import { defaultLocale, isSupportedLocale, messages, supportedLocales, type LocaleCode } from "~/utils/i18n";

function resolveLocale(pathname: string): LocaleCode {
  const segment = pathname.split("/").filter(Boolean)[0];
  return isSupportedLocale(segment) ? segment : defaultLocale;
}

export function useLandingI18n() {
  const route = useRoute();

  const locale = computed<LocaleCode>(() => resolveLocale(route.path));
  const currentLocale = computed(() => supportedLocales.find((item) => item.code === locale.value) || supportedLocales[0]);
  const t = computed(() => messages[locale.value]);

  function localizedPath(targetLocale: LocaleCode) {
    return targetLocale === defaultLocale ? "/" : `/${targetLocale}`;
  }

  return { locale, currentLocale, supportedLocales, t, localizedPath };
}
