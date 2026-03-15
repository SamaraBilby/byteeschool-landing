<script setup lang="ts">
interface Props {
  variant?: "primary" | "outline" | "ghost" | "orange";
  size?: "sm" | "md" | "lg";
  tag?: "button" | "a" | "NuxtLink";
  href?: string;
  to?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "md",
  tag: "button",
  type: "button",
  disabled: false,
  fullWidth: false,
});

const classes = computed(() => {
  const base = [
    "inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-200 cursor-pointer select-none",
    props.fullWidth ? "w-full" : "",
    props.disabled ? "opacity-50 pointer-events-none" : "",
  ];

  // Size
  const sizes: Record<string, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  // Variant
  const variants: Record<string, string> = {
    primary:
      "bg-pm text-white hover:bg-pd active:scale-95 shadow-sm hover:shadow-md",
    orange:
      "bg-om text-white hover:bg-orange-600 active:scale-95 shadow-sm hover:shadow-md",
    outline:
      "border-2 border-pm text-pm bg-transparent hover:bg-pm hover:text-white active:scale-95",
    ghost: "text-pm bg-transparent hover:bg-pm/10 active:scale-95",
  };

  return [...base, sizes[props.size], variants[props.variant]]
    .filter(Boolean)
    .join(" ");
});
</script>
<template>
  <component
    :is="tag"
    :href="href"
    :to="to"
    :type="tag === 'button' ? type : undefined"
    :class="classes"
    v-bind="$attrs"
  >
    <span v-if="$slots.icon" class="flex-shrink-0">
      <slot name="icon" />
    </span>
    <slot />
  </component>
</template>
