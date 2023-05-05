import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MemeView from "../views/MemeView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/new",
      name: "new",
      component: MemeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

export default router;
