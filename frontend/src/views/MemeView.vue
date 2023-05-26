<script>
import axios from 'axios';
import { mapStores } from 'pinia';
import { useAuthenticateStore } from "@/stores/authenticate";
import CreateMemeForm from "@/components/forms/CreateMemeForm.vue";

export default {
  components: {
    CreateMemeForm,
  },
  computed: {
    ...mapStores(useAuthenticateStore),
  },
  mounted() {
    this.isAuthenticated();
  },
  methods: {
    isAuthenticated() {
      if(this.authenticateStore.authenticated === false) {
        return this.$router.push('/login')
      }
    },
    onFormSubmit(form) {
      console.log('form.meme =>',form.meme)
      axios.post('http://localhost:3000/memes/create',
        {
          meme: form.meme,
          bottomText: form.bottomText,
          topText: form.topText
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
        })
        .then(response => {
          this.$router.push('/')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
};
</script>

<template>
  <section class="min-h-80 flex items-center">
    <div class="flex flex-col sm:p-10 xs:p-5 border border-blanc rounded-xl w-fit bg-contour bg-opacity-30 backdrop-blur-lg px-1 py-5 mx-auto justify-center">
      <h1 class="sm:text-3xl text-center text-xl mb-4">Créer un meme</h1>
      <CreateMemeForm class="flex flex-col" @onSubmit="onFormSubmit($event)" />
    </div>
  </section>
</template>
