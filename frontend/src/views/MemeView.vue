<script>
import axios from "axios"


export default {
  data() {
    return {
      meme: '',
      topText: '',
      bottomText: ''
    };
  },

  methods: {
    
    submitForm() {
      const form = new FormData()
      form.append('topText', this.topText)
      form.append('bottomText', this.bottomText)
      form.append('meme', this.$refs.meme.files[0])
      axios.post('http://localhost:3000/memes/create', form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(response => {
          console.log(response)
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
  <div class="meme">
    <h1>Créer un meme</h1>
    <form ref="myForm" @submit.prevent="submitForm">
      <input type="file" name="meme" ref="meme" />
      <input type="text" name="topText" v-model="topText" />
      <input type="text" name="bottomText" v-model="bottomText" />
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>
