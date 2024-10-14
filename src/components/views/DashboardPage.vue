<template>
  <main class="w-full flex flex-col">
    <section class="flex flex-col flex-1 md:grid md:grid-cols-3">
      <CurrentMonthBudget class="col-span-1" />
      <article
        class="col-span-2 flex items-center justify-center border-2 border-purple-400"
      >
        Other chart
      </article>
    </section>
    <section class="flex flex-1 sm:grid sm:grid-cols-3">
      <article
        class="col-span-2 flex items-center justify-center border-2 border-purple-400"
      >
        Other chart
      </article>
      <article
        class="col-span-1 flex items-center justify-center border-2 border-red-400"
      >
        Current month balance
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
import CurrentMonthBudget from "@/components/budget/CurrentMonthBudget.vue";
</script>
