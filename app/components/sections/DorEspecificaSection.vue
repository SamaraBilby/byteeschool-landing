<script setup lang="ts">
import { ref, reactive } from "vue";
import { submitLead } from "~/services/leadService";

const loading = ref(false);
const success = ref(false);

const form = reactive({
  nome: "",
  email: "",
  telefone: "",
  escola: "",
  tipo_escola: "",
  mensagem: "",
  hp: "",
});

const benefits = [
  "Acesso antecipado com preço de fundador",
  "Onboarding dedicado e personalizado",
  "Sua dor vira feature — influencie o roadmap",
  "Suporte direto com a equipe fundadora",
];

async function handleSubmit() {
  if (!form.email || !form.nome) return;
  loading.value = true;

  try {
    await submitLead({
      tipo: "contato",
      nome: form.nome,
      email: form.email,
      telefone: form.telefone || undefined,
      escola: form.escola || undefined,
      tipo_escola: form.tipo_escola || undefined,
      mensagem: form.mensagem || undefined,
      hp: form.hp,
    });

    success.value = true;

    form.nome = "";
    form.email = "";
    form.telefone = "";
    form.escola = "";
    form.tipo_escola = "";
    form.mensagem = "";
    form.hp = "";
  } catch (err) {
    console.error("Erro ao enviar formulário:", err);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <section
    class="py-24 px-6 bg-slate-50"
    id="dor-especifica"
    data-purpose="detailed-lead"
  >
    <div class="container mx-auto max-w-4xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- LEFT: Copy -->
        <div>
          <span
            class="text-om font-bold uppercase tracking-widest text-sm mb-3 block"
            >FALE COM A GENTE</span
          >
          <h2
            class="text-3xl md:text-4xl font-extrabold text-pd leading-tight mb-6"
          >
            Conta pra gente sobre a sua escola
          </h2>
          <p class="text-slate-600 leading-relaxed mb-8">
            Queremos entender os desafios reais da sua escola para garantir que
            o ByteESchool resolve exatamente o que você precisa — antes do
            lançamento.
          </p>

          <!-- Bullets de benefícios -->
          <ul class="space-y-4">
            <li
              v-for="benefit in benefits"
              :key="benefit"
              class="flex items-start gap-3 text-sm text-slate-700"
            >
              <span
                class="w-6 h-6 bg-pm/10 text-pm rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
              >
                <span class="material-symbols-outlined text-sm">check</span>
              </span>
              {{ benefit }}
            </li>
          </ul>
        </div>

        <!-- RIGHT: Form -->
        <div class="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          <!-- Success state -->
          <Transition name="fade">
            <div v-if="success" class="text-center py-8">
              <div
                class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span class="material-symbols-outlined text-green-600 text-3xl"
                  >check_circle</span
                >
              </div>
              <h3 class="text-xl font-extrabold text-pd mb-2">
                Mensagem enviada!
              </h3>
              <p class="text-slate-500 text-sm">
                Nossa equipe entrará em contato em breve. Obrigado!
              </p>
            </div>
          </Transition>

          <form
            v-if="!success"
            class="relative space-y-5"
            @submit.prevent="handleSubmit"
          >
            <input
              v-model="form.hp"
              type="text"
              name="website"
              tabindex="-1"
              autocomplete="off"
              class="absolute left-[-9999px] top-auto w-px h-px overflow-hidden"
            />
            <!-- Nome -->
            <div>
              <label
                class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
              >
                Seu nome *
              </label>
              <input
                v-model="form.nome"
                type="text"
                required
                placeholder="Ex: Maria Fernanda"
                class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-pm focus:ring-2 focus:ring-pm/10 transition-all"
              />
            </div>

            <!-- Email -->
            <div>
              <label
                class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
              >
                E-mail *
              </label>
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="seu@email.com"
                class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-pm focus:ring-2 focus:ring-pm/10 transition-all"
              />
            </div>

            <!-- Telefone -->
            <div>
              <label
                class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
              >
                WhatsApp
              </label>
              <input
                v-model="form.telefone"
                type="tel"
                placeholder="(11) 99999-9999"
                class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-pm focus:ring-2 focus:ring-pm/10 transition-all"
              />
            </div>

            <!-- Nome da escola -->
            <div>
              <label
                class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
              >
                Nome da escola
              </label>
              <input
                v-model="form.escola"
                type="text"
                placeholder="Ex: English Way Florianópolis"
                class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-pm focus:ring-2 focus:ring-pm/10 transition-all"
              />
            </div>

            <!-- Tipo de escola -->
            <div>
              <label
                class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
              >
                Tipo de escola
              </label>
              <select
                v-model="form.tipo_escola"
                class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 outline-none focus:border-pm focus:ring-2 focus:ring-pm/10 transition-all bg-white"
              >
                <option value="" disabled>Selecione...</option>
                <option value="escola-ingles">Escola de inglês</option>
                <option value="escola-idiomas">Escola de outros idiomas</option>
                <option value="franquia">Franquia educacional</option>
                <option value="curso-livre">Curso livre</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <!-- Maior dor -->
            <div>
              <label
                class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
              >
                Qual é seu maior desafio hoje?
              </label>
              <textarea
                v-model="form.mensagem"
                rows="3"
                placeholder="Ex: Não consigo controlar a frequência e notas ao mesmo tempo..."
                class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-pm focus:ring-2 focus:ring-pm/10 transition-all resize-none"
              />
            </div>

            <!-- Submit -->
            <button
              type="submit"
              :disabled="loading"
              class="w-full inline-flex items-center justify-center gap-2 bg-pm text-white font-bold px-8 py-4 rounded-xl hover:bg-pd transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
            >
              <span
                v-if="loading"
                class="material-symbols-outlined text-base animate-spin"
                >progress_activity</span
              >
              <span v-else class="material-symbols-outlined text-base"
                >send</span
              >
              {{ loading ? "Enviando..." : "Enviar mensagem" }}
            </button>

            <p class="text-center text-xs text-slate-400">
              Suas informações são confidenciais. Não compartilhamos com
              terceiros.
            </p>
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
