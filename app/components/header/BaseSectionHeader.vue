<script setup lang="ts">
interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  center: false,
});

const centerClass = computed(() => (props.center ? "text-center" : ""));
</script>
<template>
  <div :class="['mb-12 md:mb-16', centerClass]">
    <span
      v-if="eyebrow"
      class="text-om font-bold uppercase tracking-widest text-sm mb-3 block"
    >
      {{ eyebrow }}
    </span>
    <h2
      class="text-3xl md:text-5xl font-extrabold text-pd leading-tight mb-4"
      v-html="title"
    />
    <p
      v-if="subtitle"
      class="text-slate-600 leading-relaxed max-w-2xl"
      :class="center ? 'mx-auto' : ''"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
