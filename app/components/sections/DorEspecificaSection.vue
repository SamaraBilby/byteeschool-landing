<script setup lang="ts">
import { ref, reactive } from "vue";
import { submitLead } from "~/services/leadService";

const { locale, t } = useLandingI18n();

const loading = ref(false);
const success = ref(false);
const errorMessage = ref("");

const form = reactive({
  nome: "",
  email: "",
  telefone: "",
  escola: "",
  tipo_escola: "",
  mensagem: "",
  hp: "",
});

const benefits = computed(() => t.value.contact.benefits);
const institutionTypes = computed(() => t.value.contact.institutionTypes);

function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

function maskPhone(value: string) {
  const digits = onlyDigits(value).slice(0, locale.value === "pt" ? 11 : 10);

  if (locale.value === "pt") {
    if (digits.length <= 2) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `+1 (${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `+1 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function handlePhoneInput(event: Event) {
  const input = event.target as HTMLInputElement;
  form.telefone = maskPhone(input.value);
}

function isValidPhone(value: string) {
  const digits = onlyDigits(value);
  if (!digits) return true;
  return locale.value === "pt" ? digits.length === 10 || digits.length === 11 : digits.length === 10 || digits.length === 11;
}

function resetForm() {
  form.nome = "";
  form.email = "";
  form.telefone = "";
  form.escola = "";
  form.tipo_escola = "";
  form.mensagem = "";
  form.hp = "";
}

async function handleSubmit() {
  errorMessage.value = "";

  if (!form.email || !form.nome) {
    errorMessage.value = t.value.contact.requiredError;
    return;
  }

  if (!isValidPhone(form.telefone)) {
    errorMessage.value = t.value.contact.phoneError;
    return;
  }

  loading.value = true;

  try {
    await submitLead({
      tipo: "contato",
      nome: form.nome.trim(),
      email: form.email.trim(),
      telefone: form.telefone ? onlyDigits(form.telefone) : undefined,
      escola: form.escola.trim() || undefined,
      tipo_escola: form.tipo_escola || undefined,
      mensagem: form.mensagem.trim() || undefined,
      hp: form.hp,
    });

    success.value = true;
    resetForm();
  } catch (err) {
    console.error("Erro ao enviar formulário:", err);
    errorMessage.value = t.value.contact.submitError;
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <section class="py-24 px-6 bg-slate-50" id="dor-especifica" data-purpose="detailed-lead">
    <div class="container mx-auto max-w-4xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <span class="text-om font-bold uppercase tracking-widest text-sm mb-3 block">
            {{ t.contact.eyebrow }}
          </span>

          <h2 class="text-3xl md:text-4xl font-extrabold text-pd leading-tight mb-6">
            {{ t.contact.title }}
          </h2>

          <p class="text-slate-600 leading-relaxed mb-8">
            {{ t.contact.subtitle }}
          </p>

          <ul class="space-y-4">
            <li v-for="benefit in benefits" :key="benefit" class="flex items-start gap-3 text-sm text-slate-700">
              <span class="w-6 h-6 bg-pm/10 text-pm rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="material-symbols-outlined text-sm">check</span>
              </span>
              {{ benefit }}
            </li>
          </ul>
        </div>

        <div class="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          <Transition name="fade">
            <div v-if="success" class="text-center py-8">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="material-symbols-outlined text-green-600 text-3xl">check_circle</span>
              </div>

              <h3 class="text-xl font-extrabold text-pd mb-2">{{ t.contact.successTitle }}</h3>
              <p class="text-slate-500 text-sm">{{ t.contact.successDescription }}</p>
            </div>
          </Transition>

          <form v-if="!success" class="relative space-y-5" @submit.prevent="handleSubmit">
            <input v-model="form.hp" type="text" name="website" tabindex="-1" autocomplete="off" class="absolute left-[-9999px] top-auto w-px h-px overflow-hidden" />

            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{{ t.contact.nameLabel }}</label>
              <input v-model="form.nome" type="text" required autocomplete="name" :placeholder="t.contact.namePlaceholder" class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-pm focus:ring-2 focus:ring-pm/10 transition-all" />
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{{ t.contact.emailLabel }}</label>
              <input v-model="form.email" type="email" required autocomplete="email" :placeholder="t.contact.emailPlaceholder" class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-pm focus:ring-2 focus:ring-pm/10 transition-all" />
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{{ t.contact.phoneLabel }}</label>
              <input v-model="form.telefone" type="tel" inputmode="numeric" autocomplete="tel" maxlength="18" :placeholder="t.contact.phonePlaceholder" class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-pm focus:ring-2 focus:ring-pm/10 transition-all" @input="handlePhoneInput" />
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{{ t.contact.schoolLabel }}</label>
              <input v-model="form.escola" type="text" :placeholder="t.contact.schoolPlaceholder" class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-pm focus:ring-2 focus:ring-pm/10 transition-all" />
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{{ t.contact.typeLabel }}</label>
              <select v-model="form.tipo_escola" class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 outline-none focus:border-pm focus:ring-2 focus:ring-pm/10 transition-all bg-white">
                <option value="" disabled>{{ t.contact.selectPlaceholder }}</option>
                <option v-for="type in institutionTypes" :key="type.value" :value="type.value">{{ type.label }}</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{{ t.contact.challengeLabel }}</label>
              <textarea v-model="form.mensagem" rows="3" :placeholder="t.contact.challengePlaceholder" class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-pm focus:ring-2 focus:ring-pm/10 transition-all resize-none" />
            </div>

            <p v-if="errorMessage" class="text-sm font-medium text-red-600">{{ errorMessage }}</p>

            <button type="submit" :disabled="loading" class="w-full inline-flex items-center justify-center gap-2 bg-pm text-white font-bold px-8 py-4 rounded-xl hover:bg-pd transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed text-sm">
              <span v-if="loading" class="material-symbols-outlined text-base animate-spin">progress_activity</span>
              <span v-else class="material-symbols-outlined text-base">send</span>
              {{ loading ? t.contact.sending : t.contact.submit }}
            </button>

            <p class="text-center text-xs text-slate-400">{{ t.contact.privacy }}</p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
