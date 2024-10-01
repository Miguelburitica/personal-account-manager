<template>
  <body class="w-screen h-screen">
    <BasicLayout>
      <RouterView />
    </BasicLayout>
  </body>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";

import BasicLayout from "@/components/layouts/BasicLayout.vue";
</script>
