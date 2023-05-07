<script>
import MyInput from '../components/MyInput.vue'
import MyButton from '../components/buttons/MyButton.vue'

export default {
    components: {
        MyInput,
        MyButton
    }
}
</script>

<template>
  <div class="login">
    <h1>Se connecter</h1>
    <MyInput>
      <template v-slot:label>Pseudo</template>
    </MyInput>
    <MyInput>
      <template v-slot:label>Mot de passe</template>
    </MyInput>
    <MyButton></MyButton>
  </div>
</template>
