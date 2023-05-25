import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import MemeView from '@/views/MemeView.vue';
import LoginView from '@/views/LoginView.vue';
import MentionsView from '@/views/MentionsView.vue';

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
    {
      path: "/mentions-legales",
      name: "mentions",
      component: MentionsView,
    }
  ],
});

export default router;
