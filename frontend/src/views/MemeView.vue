<script>
import axios from "axios";

export default {
  data() {
    return {
      meme: '',
    };
  },
 
  methods: {
  async handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    try {
      const response = await axios.post('http://localhost:3000/memes/create', data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
}

};
</script>

<template>
  <div class="meme">
    <h1>Créer un meme</h1>
    <form action="http://localhost:3000/memes/create" method="post">
      <input type="file" name="meme">
      <input type="text" name="topText">
      <input type="text" name="bottomText">
      <input type="submit" value="Envoyer">
    </form>
  </div>
</template>
