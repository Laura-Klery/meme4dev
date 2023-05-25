<script>
import axios from "axios";
import { mapStores } from 'pinia';
import LoginForm from "@/components/forms/LoginForm.vue";
import { useAuthenticateStore } from "@/stores/authenticate";


export default {
  components: {
    LoginForm,
  },
  computed: {
    ...mapStores(useAuthenticateStore),
  },
  methods: {
    onFormSubmit(form) {
      axios.post('http://localhost:3000/authenticate', {
        pseudo: form.pseudo,
        password: form.password,
      })
        .then(response => {
          if(response.status === 200) {
            this.authenticateStore.authenticated = true
            console.log(response)
            this.$router.push('/')
          } else {
            this.$router.push('/login')
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<template>
  <section class="min-h-80 flex items-center">
    <div class="flex flex-col sm:p-10 xs:p-5 border border-blanc rounded-xl w-fit bg-contour bg-opacity-30 backdrop-blur-lg px-1 py-5 mx-auto justify-center">
      <h1 class="sm:text-3xl text-center text-xl mb-4">Se connecter</h1>
      <LoginForm class="flex flex-col" @onSubmit="onFormSubmit($event)" />
    </div>
  </section>
</template>
