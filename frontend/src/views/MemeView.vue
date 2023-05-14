<script>
import axios from 'axios'
import MyInput from '../components/MyInput.vue'
import MyButton from '../components/buttons/MyButton.vue'


export default {
  components: {
    MyInput,
    MyButton
  },
  data() {
    return {
      meme: '',
      topText: '',
      bottomText: '',

      inputs: [
        {
          label: 'Image du meme',
          type: 'file',
          name: 'meme',
          ref: 'meme',
        },
        {
          label: 'Texte du Haut',
          placeholder: 'Ajouter un texte en haut',
          type: 'text',
          name: 'topText',
          value: 'topText',
        },
        {
          label: 'Texte du Bas',
          placeholder: 'Ajouter un texte en bas',
          type: 'text',
          name: 'bottomText',
          value: 'bottomText',
        },
      ]
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
  <section class="min-h-80 flex items-center">
    <div
      class="flex flex-col sm:p-10 xs:p-5 meme border border-blanc rounded-xl w-fit bg-contour bg-opacity-30 backdrop-blur-lg px-1 py-5 mx-auto justify-center">
      <h1 class="sm:text-3xl text-center text-xl">Créer un meme</h1>
      <form class="flex flex-col" ref="myForm" @submit.prevent="submitForm">
        <MyInput v-for="input in inputs" :key="input.name" :label="input.label" :placeholder="input.placeholder"
          :type="input.type" :name="input.name" :ref="input.ref" :model-value="input.value" />
        <!-- <input type="file" name="meme" ref="meme" />
      <input type="text" name="topText" v-model="topText" />
      <input type="text" name="bottomText" v-model="bottomText" /> -->
        <MyButton type="submit">Envoyer</MyButton>
      </form>
    </div>
  </section>
</template>
