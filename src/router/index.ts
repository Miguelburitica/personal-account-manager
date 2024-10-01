import { createWebHistory, createRouter } from "vue-router";

import DashboardPage from "@/components/views/DashboardPage.vue";
import ConceptsColletionPage from "@/components/views/DashboardPage.vue";
import PeriodicalBudgetPage from "@/components/views/DashboardPage.vue";

const routes = [
  { path: "/", component: DashboardPage },
  { path: "/concepts", component: ConceptsColletionPage },
  { path: "/budget", component: PeriodicalBudgetPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
