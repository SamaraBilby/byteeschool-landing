<script setup lang="ts">
import { ref } from "vue";
import { submitLead } from "~/services/leadService";

const email = ref("");
const telefone = ref("");
const nome = ref("");
const hp = ref("");
const loading = ref(false);
const success = ref(false);
const errorMessage = ref("");

function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

function maskPhone(value: string) {
  const digits = onlyDigits(value).slice(0, 11);

  if (digits.length <= 2) {
    return digits;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function handlePhoneInput(event: Event) {
  const input = event.target as HTMLInputElement;
  telefone.value = maskPhone(input.value);
}

function isValidPhone(value: string) {
  const digits = onlyDigits(value);

  if (!digits) {
    return true;
  }

  return digits.length === 10 || digits.length === 11;
}

async function handleSubmit() {
  errorMessage.value = "";

  if (!nome.value || !email.value) {
    errorMessage.value = "Preencha seu nome e e-mail para continuar.";
    return;
  }

  if (!isValidPhone(telefone.value)) {
    errorMessage.value = "Informe um telefone válido com DDD.";
    return;
  }

  loading.value = true;

  try {
    await submitLead({
      tipo: "waitlist",
      email: email.value.trim(),
      telefone: onlyDigits(telefone.value),
      nome: nome.value.trim(),
      hp: hp.value,
    });

    success.value = true;
    email.value = "";
    telefone.value = "";
    nome.value = "";
    hp.value = "";
  } catch (err) {
    console.error("Erro ao enviar lead:", err);
    errorMessage.value =
      "Não conseguimos enviar agora. Tente novamente em instantes.";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <section
    class="py-24 px-6 gradient-hero"
    id="lista-espera"
    data-purpose="lead-capture"
  >
    <div class="container mx-auto max-w-2xl text-center">
      <!-- Eyebrow -->
      <span
        class="text-om font-bold uppercase tracking-widest text-xs mb-4 block"
      >
        LISTA DE INTERESSE GRATUITA
      </span>

      <!-- Title -->
      <h2
        class="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
      >
        Organize a rotina pedagógica da sua escola
      </h2>

      <p class="text-white/70 text-lg mb-10">
        Entre na lista para conhecer a b8edu e acompanhar o lançamento da
        plataforma.
      </p>

      <!-- Form -->
      <form
        class="relative flex flex-col gap-3 max-w-lg mx-auto"
        @submit.prevent="handleSubmit"
      >
        <!-- Honeypot anti-spam -->
        <input
          v-model="hp"
          type="text"
          name="website"
          tabindex="-1"
          autocomplete="off"
          class="absolute left-[-9999px] top-auto w-px h-px overflow-hidden"
        />

        <input
          v-model="nome"
          type="text"
          placeholder="Seu nome"
          required
          autocomplete="name"
          class="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/50 outline-none focus:border-white/60 transition-all text-sm font-medium"
        />

        <input
          v-model="email"
          type="email"
          placeholder="seu@email.com"
          required
          autocomplete="email"
          class="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/50 outline-none focus:border-white/60 transition-all text-sm font-medium"
        />

        <input
          v-model="telefone"
          type="tel"
          inputmode="numeric"
          autocomplete="tel"
          maxlength="15"
          placeholder="(11) 99999-9999"
          class="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/50 outline-none focus:border-white/60 transition-all text-sm font-medium"
          @input="handlePhoneInput"
        />

        <p
          v-if="errorMessage"
          class="text-red-200 text-sm font-medium text-left"
        >
          {{ errorMessage }}
        </p>

        <button
          type="submit"
          :disabled="loading"
          class="w-full inline-flex items-center justify-center gap-2 bg-om text-white font-bold px-7 py-4 rounded-xl hover:bg-orange-600 transition-all active:scale-95 disabled:opacity-70 text-sm"
        >
          <span v-if="!loading" class="material-symbols-outlined text-base">
            rocket_launch
          </span>

          <span
            v-if="loading"
            class="material-symbols-outlined text-base animate-spin"
          >
            progress_activity
          </span>

          {{ loading ? "Enviando..." : "Entrar na lista" }}
        </button>
      </form>

      <!-- Success state -->
      <Transition name="fade">
        <div
          v-if="success"
          class="mt-6 inline-flex items-center gap-3 bg-green-500/20 border border-green-400/30 text-white px-6 py-3 rounded-xl text-sm font-semibold"
        >
          <span class="material-symbols-outlined text-green-400">
            check_circle
          </span>

          Ótimo! Você está na lista. Entraremos em contato em breve.
        </div>
      </Transition>

      <!-- Trust note -->
      <p class="text-white/40 text-xs mt-8">
        Sem spam. Sem cobranças agora. Apenas novidades sobre o lançamento.
      </p>
    </div>
  </section>
</template>

<style scoped>
.gradient-hero {
  background: linear-gradient(135deg, #3d2066 0%, #5b2d8e 100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>