<script>
import MyInput from "@/components/forms/MyInput.vue";
import FileInput from "@/components/forms/FileInput.vue";
export default {
  components:{
    FileInput,
    MyInput
  },
  data() {
    return {
      form: {
        type: Object,
        default: () => ({
          meme: {},
          topText: '',
          bottomText: '',
        })
      }
    }
  }
}
</script>

<template>
  <form class="space-y-4" @submit.prevent="$emit('onSubmit', form)">
    <FileInput id="meme" name="meme" label="Image du meme" type="file" @updated="(value) => form.meme = value" />
    <MyInput id="topText" name="topText" label="Texte Haut" placeholder="Entrer votre texte" type="text" @updated="(value) => form.topText = value" />
    <MyInput id="bottomText" name="bottomText" label="Texte Bas" placeholder="Entrer votre texte" type="text" @updated="(value) => form.bottomText = value"/>
    <MyButton class="mx-auto bg-buttons hover:bg-buttons-hover hover:shadow-lg transition-all duration-300 ease-in-out">Créer</MyButton>
  </form>
</template>