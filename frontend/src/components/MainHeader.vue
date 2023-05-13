<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
<template>
  <header class="mx-2 flex items-center justify-between">
    <RouterLink to="/"><img src="@/assets/img/logo.svg" alt="Logo Meme4Dev" class="p-2"></RouterLink>
    <nav class="lg:flex lg:justify-end lg:items-center space-x-24 lg:text-center">
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/new">Création</RouterLink>
      <RouterLink to="/login"><MyButton class="bg-buttons">Connexion</MyButton></RouterLink>
    </nav>
  </header>
</template>