<template>
  <label class="flex w-full justify-between text-slate-600" :class="labelClass">
    {{ label }}
    <span class="font-normal" :class="valueClass">
      {{ currencyFormatter(Number(value)) }}
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed } from "vue";

import currencyFormatter from "@/utils/currencyFormatter";

type TransactionNature = "neutral" | "credit" | "debit";

type LabelProps = {
  label: string;
  value: string;
  size?: "small" | "medium" | "large";
  nature?: TransactionNature;
};
const props = withDefaults(defineProps<LabelProps>(), {
  size: "medium",
  nature: "neutral",
});

const sizeMap: Record<string, string> = {
  small: "text-sm",
  medium: "text-lg font-medium",
  large: "text-2xl font-semibold",
  "x-large": "text-3xl font-bold",
};

const natureMap: Record<TransactionNature, string> = {
  neutral: "text-slate-500",
  debit: "text-emerald-500",
  credit: "text-red-500",
};

const valueClass = computed(() => {
  if (props.nature) return natureMap[props.nature];
});

const labelClass = computed(() => {
  if (props.size) return sizeMap[props.size];
});
</script>
