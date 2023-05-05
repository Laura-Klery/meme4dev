<script>
import axios from "axios"

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
    deleteMeme(memeName) {
  axios
    .delete(`http://localhost:3000/memes/delete/${memeName}`)
    .then((response) => {
      console.log(response.data);
      // Mettre à jour la liste des memes en supprimant le meme supprimé
      this.memes = this.memes.filter((meme) => meme.name !== memeName);
      this.getMemes();
    })
    .catch((error) => {
      console.log(error);
    });
},
  }
  }

</script>

<template>
  <div class="home">
    <h1>Accueil</h1>
    <div>
      <h2>Liste des memes</h2>
      <ul>
        <div v-for="meme in memes" :key="meme">
          <img :src="baseURL+meme" :alt="meme" />
          <IconButton  @click="deleteMeme(meme)"></IconButton>
        </div>
      </ul>
    </div>
  </div>
</template>
