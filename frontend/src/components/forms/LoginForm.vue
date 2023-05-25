<script>
import MyInput from "@/components/forms/MyInput.vue";
export default {
  components:{
    MyInput
  },
  data() {
    return {
      form: {
        type: Object,
        default: () => ({
          pseudo: '',
          password: ''
        })
      }
    }
  }
}
</script>

<template>
  <form class="space-y-4" @submit.prevent="$emit('onSubmit', form)">
    <MyInput id="pseudo" name="pseudo" label="Pseudo" placeholder="Entrer pseudo" type="text" @updated="(value) => form.pseudo = value" />
    <MyInput id="password" name="password" label="Mot de passe" placeholder="Entrer mot de passe" type="password" @updated="(value) => form.password = value" />
    <MyButton class="mx-auto bg-buttons hover:bg-buttons-hover hover:shadow-lg transition-all duration-300 ease-in-out">Se connecter</MyButton>
  </form>
</template>