import type { LocaleCode } from "~/utils/i18n";

export const phoneDialCodeOptions = [
  {
    code: "+55",
    label: "🇧🇷 +55 Brasil",
    minDigits: 10,
    maxDigits: 11,
    placeholder: "(11) 99999-9999",
  },
  {
    code: "+1",
    label: "🇨🇦 +1 Canada / USA",
    minDigits: 10,
    maxDigits: 10,
    placeholder: "(555) 123-4567",
  },
  {
    code: "+33",
    label: "🇫🇷 +33 France",
    minDigits: 9,
    maxDigits: 9,
    placeholder: "6 12 34 56 78",
  },
  {
    code: "+34",
    label: "🇪🇸 +34 España",
    minDigits: 9,
    maxDigits: 9,
    placeholder: "612 345 678",
  },
  {
    code: "+52",
    label: "🇲🇽 +52 México",
    minDigits: 10,
    maxDigits: 10,
    placeholder: "55 1234 5678",
  },
  {
    code: "+54",
    label: "🇦🇷 +54 Argentina",
    minDigits: 10,
    maxDigits: 10,
    placeholder: "11 1234 5678",
  },
  {
    code: "+351",
    label: "🇵🇹 +351 Portugal",
    minDigits: 9,
    maxDigits: 9,
    placeholder: "912 345 678",
  },
] as const;

export type PhoneDialCode = (typeof phoneDialCodeOptions)[number]["code"];

export function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

export function getDefaultDialCode(locale: LocaleCode): PhoneDialCode {
  const defaultDialCodes: Record<LocaleCode, PhoneDialCode> = {
    pt: "+55",
    en: "+1",
    es: "+34",
    fr: "+1",
  };

  return defaultDialCodes[locale];
}

export function getPhoneOption(dialCode: PhoneDialCode) {
  return phoneDialCodeOptions.find((option) => option.code === dialCode) || phoneDialCodeOptions[0];
}

export function maskPhoneNumber(value: string, dialCode: PhoneDialCode) {
  const option = getPhoneOption(dialCode);
  const digits = onlyDigits(value).slice(0, option.maxDigits);

  if (dialCode === "+55") {
    if (digits.length <= 2) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  if (dialCode === "+1") {
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }

  return digits.replace(/(\d{3})(?=\d)/g, "$1 ").trim();
}

export function normalizePhoneForSubmit(value: string, dialCode: PhoneDialCode) {
  const digits = onlyDigits(value);

  if (!digits) {
    return "";
  }

  return `${dialCode}${digits}`;
}

export function isValidPhoneNumber(value: string, dialCode: PhoneDialCode) {
  const digits = onlyDigits(value);
  const option = getPhoneOption(dialCode);

  if (!digits) {
    return true;
  }

  return digits.length >= option.minDigits && digits.length <= option.maxDigits;
}
