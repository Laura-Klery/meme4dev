<script>
import axios from "axios"
import MyInput from '../components/MyInput.vue'
import MyButton from '../components/buttons/MyButton.vue'

export default {
  components: {
    MyInput,
    MyButton
  },
  data() {
    return {
      pseudo: '',
      password: '',
      message: '',

      inputs: [
        {
          label: 'Pseudo',
          placeholder: 'Entrer pseudo',
          type: 'text',
          name: 'pseudo',
          value: 'pseudo',
          id: 'pseudo'
        },
        {
          label: 'Mot de passe',
          placeholder: 'Entrer mot de passe',
          type: 'password',
          name: 'password',
          value: 'password',
          id: 'password'
        },
      ]
    };
  },
  methods: {
    login() {
      axios.post('http://localhost:3000/authenticate', {
        pseudo: this.pseudo,
        password: this.password,
      })
        .then(response => {
          if (response.status === 200) {
            this.message = 'Connexion réussie';
            this.$router.push('/')
          } else {
            this.message = 'Nom d\'utilisateur ou mot de passe incorrect';
          }
        })
        .catch(error => {
          this.message = 'Une erreur s\'est produite lors de la connexion';
        });
    }
  }
}
</script>

<template>
  <section class="min-h-80 flex items-center">
    <div
      class="flex flex-col login sm:p-10 meme border border-blanc rounded-xl w-fit bg-contour bg-opacity-30 backdrop-blur-lg px-3 py-5 mx-auto">
      <h1 class="sm:text-3xl text-center text-xl">Se connecter</h1>
      <form class="" @submit.prevent="login">
        <!-- <div>
        <label for="pseudo">Pseudo:</label>
        <input type="text" id="pseudo" v-model="pseudo" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button> -->
        <MyInput v-for="input in inputs" :key="input.name" :label="input.label" :placeholder="input.placeholder"
          :type="input.type" :name="input.name" :model-value="input.value" :id="input.id" required />
        <MyButton class="block mx-auto" type="submit">Envoyer</MyButton>
      </form>
      <div v-if="message">{{ message }}</div>
    </div>
  </section>
</template>
