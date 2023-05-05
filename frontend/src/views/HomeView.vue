<script>
import axios from "axios";

export default {
  data() {
    return {
      memes: [],
      baseURL: "http://localhost:3000/memes/"
    };
  },
  mounted() {
    this.getMemes();
  },
  methods: {
    getMemes() {
      axios
        .get("http://127.0.0.1:3000/memes")
        .then((response) => {
          console.log(response.data);
          this.memes = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>Accueil</h1>
    <div>
      <h2>Liste des memes</h2>
      <ul>
        <div v-for="meme in memes" :key="meme">
          <img :src="baseURL+meme" :alt="meme" />
        </div>
      </ul>
    </div>
  </div>
</template>
