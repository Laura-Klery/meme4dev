<script>

export default {

}
</script>

<template>
  <header class="main-header">
    <div class="logo">
      <img src="@/assets/img/logo.svg" alt="Logo Meme4Dev">
    </div>
    <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/new">Création</RouterLink>
        <RouterLink to="/login"><MyButton>Connexion</MyButton></RouterLink>
    </nav>
  </header>
</template>
