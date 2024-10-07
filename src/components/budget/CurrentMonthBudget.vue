<template>
  <article class="flex flex-col px-4 py-8">
    <PreviewLabel
      class="mb-6"
      label="Current Balance:"
      :value="currentBalance.toString()"
      nature="debit"
      size="large"
    />
    <PreviewLabel
      class="flex-auto"
      label="Total expenses:"
      :value="totalExpenses.toString()"
      nature="credit"
      size="large"
    />
    <PreviewLabel
      label="Final Balance:"
      :value="finalBalance.toString()"
      :nature="finalBalance >= currentBalance ? 'debit' : 'credit'"
      size="large"
    />
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";

import PreviewLabel from "./PreviewLabel.vue";

const currentBalance = computed(() => {
  return 120000;
});
const totalExpenses = computed(() => {
  return 10000;
});
const finalBalance = computed(() => {
  return currentBalance.value - totalExpenses.value;
});
</script>
