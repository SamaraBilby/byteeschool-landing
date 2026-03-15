<script setup lang="ts">
type BadgeVariant = "available" | "building" | "roadmap" | "orange" | "purple";
type BadgeSize = "sm" | "md";

interface Props {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "available",
  size: "sm",
  dot: false,
});

const variants: Record<BadgeVariant, { badge: string; dot: string }> = {
  available: {
    badge: "bg-green-50 text-green-700 border border-green-100",
    dot: "bg-green-500",
  },
  building: {
    badge: "bg-amber-50 text-amber-700 border border-amber-100",
    dot: "bg-amber-500",
  },
  roadmap: {
    badge: "bg-purple-50 text-purple-700 border border-purple-100",
    dot: "bg-purple-500",
  },
  orange: {
    badge: "bg-om/10 text-om border border-om/20",
    dot: "bg-om",
  },
  purple: {
    badge: "bg-pm/10 text-pm border border-pm/20",
    dot: "bg-pm",
  },
};

const dotColor = computed(() => variants[props.variant].dot);

const classes = computed(() => {
  const base =
    "inline-flex items-center gap-1.5 font-bold rounded-lg tracking-widest uppercase";

  const sizes: Record<BadgeSize, string> = {
    sm: "px-3 py-1 text-[10px]",
    md: "px-4 py-1.5 text-xs",
  };

  return `${base} ${sizes[props.size]} ${variants[props.variant].badge}`;
});
</script>
<template>
  <span :class="classes">
    <span v-if="dot" class="w-1.5 h-1.5 rounded-full" :class="dotColor" />
    <slot />
  </span>
</template>
