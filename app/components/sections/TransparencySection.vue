<script setup lang="ts">
import BaseSectionHeader from "../header/BaseSectionHeader.vue";
const available = [
  "Gestão de usuários e turmas",
  "Banco de questões",
  "Exam Builder drag & drop",
  "Correção automática e manual",
  "Timer de prova e status",
  "PWA com suporte offline",
  "Push notifications",
  "Central de tickets",
  "Multi-tenant & branding",
  "Gestão de Pagamentos",
  "Controle de assinatura",
  "Importação em massa",
  "Auditoria e rastreabilidade",
  "Perfis e permissões granulares",
];

const building = [
  "Relatórios de desempenho por aluno",
  "Dashboard financeiro completo",
  "Régua de cobrança automática",
  "Agenda e frequência",
  "Integração com Google Calendar",
  "Painel do professor avançado",
];

const roadmap = [
  "IA para suporte e dúvidas no conteúdo",
  "Análise preditiva de abandono",
  "Marketplace de conteúdo",
  "Portal do responsável",
  "Videoaulas integradas",
  "Certificados digitais automatizados",
];
</script>
<template>
  <section
    class="py-24 px-6 bg-white"
    id="transparencia"
    data-purpose="product-roadmap"
  >
    <div class="container mx-auto">
      <BaseSectionHeader
        eyebrow="TRANSPARÊNCIA TOTAL"
        title="O que existe, o que está sendo <span class='text-pm'>construído</span>"
        subtitle="Acreditamos em comunicação honesta com quem vai usar a plataforma. Veja exatamente o que está disponível, o que está em desenvolvimento e o que vem no futuro."
        :center="true"
      />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Coluna 1: Disponível -->
        <div class="bg-[#EBF5EE] p-8 rounded-2xl flex flex-col gap-6">
          <div>
            <span
              class="bg-[#388E3C] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-2"
            >
              <span class="w-1.5 h-1.5 bg-white rounded-full" />
              DISPONÍVEL NO LANÇAMENTO
            </span>
          </div>
          <ul class="space-y-3">
            <li
              v-for="(item, i) in available"
              :key="item"
              class="flex items-center gap-3 text-slate-700 text-sm font-medium pb-2"
              :class="
                i < available.length - 1 ? 'border-b border-slate-200/50' : ''
              "
            >
              <span
                class="w-1.5 h-1.5 bg-[#388E3C] rounded-full flex-shrink-0"
              />
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Coluna 2: Em Desenvolvimento -->
        <div class="bg-[#FFF9EE] p-8 rounded-2xl flex flex-col gap-6">
          <div>
            <span
              class="bg-[#F59E0B] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-2"
            >
              <span class="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              EM DESENVOLVIMENTO
            </span>
          </div>
          <ul class="space-y-3">
            <li
              v-for="(item, i) in building"
              :key="item"
              class="flex items-center gap-3 text-slate-700 text-sm font-medium pb-2"
              :class="
                i < building.length - 1 ? 'border-b border-slate-200/50' : ''
              "
            >
              <span
                class="w-1.5 h-1.5 bg-[#F59E0B] rounded-full flex-shrink-0"
              />
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Coluna 3: Roadmap -->
        <div class="bg-[#F0EBFF] p-8 rounded-2xl flex flex-col gap-6">
          <div>
            <span
              class="bg-pm text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-2"
            >
              <span class="w-1.5 h-1.5 bg-white rounded-full" />
              ROADMAP FUTURO
            </span>
          </div>
          <ul class="space-y-3">
            <li
              v-for="(item, i) in roadmap"
              :key="item"
              class="flex items-center gap-3 text-slate-700 text-sm font-medium pb-2"
              :class="
                i < roadmap.length - 1 ? 'border-b border-slate-200/50' : ''
              "
            >
              <span class="w-1.5 h-1.5 bg-pm rounded-full flex-shrink-0" />
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
