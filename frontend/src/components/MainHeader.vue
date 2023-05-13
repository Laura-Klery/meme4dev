<script>

export default {

}
</script>

<template>
  <header class="main-header">
    <div class="logo">
      <RouterLink to="/"><img src="@/assets/img/logo.svg" alt="Logo Meme4Dev"></RouterLink>

    </div>
    <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/new">Création</RouterLink>
        <RouterLink to="/login"><MyButton>Connexion</MyButton></RouterLink>
    </nav>
  </header>
</template>
