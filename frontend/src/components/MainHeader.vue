<script>
import {mapStores} from "pinia";
import {useAuthenticateStore} from "@/stores/authenticate";

export default {
  data() {
    return {
      showMenu: false,
      logout: 'Déconnection',
    }
  },
  computed: {
    ...mapStores(useAuthenticateStore),
  },
  methods: {
    toLogout() {
      this.authenticateStore.authenticated = false
      this.$router.push('/login')
    },
  }
};
</script>

<template>
  <header class="bg-gray-100">
    <nav class="md:container px-6 md:py-2 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <RouterLink to="/"><img src="@/assets/img/logo.svg" alt="Logo Meme4Dev" class="p-2 w-2/3 md:w-full transform hover:scale-110 transition-all duration-300"></RouterLink>
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden">
          <IconButton type="button" class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400">
            <i class="fa-solid fa-bars text-3xl sm:text-6xl"></i>
          </IconButton>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col items-end space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 bg-blanc backdrop-blur-lg bg-opacity-30 border border-contour rounded-lg p-6 md:p-2 md:bg-none md:backdrop-blur-none md:bg-opacity-0 md:border-none">
        <li class="text-lg text-gray-800 hover:text-bleu">
          <RouterLink to="/">Accueil</RouterLink>
        </li>
        <li class="text-lg text-gray-800 hover:text-bleu">
          <RouterLink to="/new">Création</RouterLink>
        </li>
        <template v-if="authenticateStore.authenticated === true">
          <MyButton class="bg-buttons hover:bg-buttons-hover hover:shadow-lg transition-all duration-300 ease-in-out" @click="toLogout()">{{ logout }}</MyButton>
        </template>
      </ul>
    </nav>
  </header>
</template>