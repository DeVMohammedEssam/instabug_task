import { createRouter, createWebHistory } from "vue-router";
import Home from "@Views/Home.vue";

const routes = [
  {
    path: "/search",
    name: "Home",
    component: Home
  },
  { path: "/:pathMatch(.*)*", redirect: "/search" }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
