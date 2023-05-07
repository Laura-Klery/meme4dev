<script>
import axios from "axios";
import IconButton from "../components/buttons/IconButton.vue";
import MyCard from "../components/MyCard.vue";

export default {
  components: {
    IconButton,
    MyCard,
  },
  data() {
    return {
      memes: [],
      baseURL: "http://localhost:3000/memes/",
    };
  },
  mounted() {
    this.getMemes();
  },
  methods: {
    scrollToBottom() {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    },
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
    downloadMeme(memeName) {
      axios({
        url: `http://localhost:3000/memes/${memeName}`,
        method: "GET",
        responseType: "blob", // Modifier la réponse en blob
      })
        .then((response) => {
          // création d'un objet URL à partir du blob
          const url = window.URL.createObjectURL(new Blob([response.data]));
           // création d'un lien pour le téléchargement
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", memeName);
          // ajout du lien au document et clic dessus pour déclencher le téléchargement
          document.body.appendChild(link);
          link.click();
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
    <section class="section-hero">
      <div class="content-hero">
        <h1 class="h1-hero">Meme4Dev</h1>
        <p class="text-hero">Créer votre meme maintenant</p>
        <RouterLink to="/new"> <MyButton>Création</MyButton></RouterLink>
      </div>
      <div class="img-hero">
        <img src="@/assets/img/chat-meme4dev.png" alt="Image chat" />
      </div>
      <span
        ><i @click="scrollToBottom" class="fa-solid fa-chevron-down"></i
      ></span>
    </section>
    <section class="section-memes">
      <h2>Liste des memes</h2>
      <article v-for="meme in memes" :key="meme">
        <IconButton
          ><i @click="deleteMeme(meme)" class="fa-solid fa-xmark"></i
        ></IconButton>
        <IconButton @click="downloadMeme(meme)"
          ><i class="fa-solid fa-download"></i
        ></IconButton>
        <MyCard :meme="meme" />
      </article>
    </section>
    <section class="section-insta">
      <p>Publiez vos memes</p>
      <a href="https://www.instagram.com/"
        ><i class="fa-brands fa-instagram"></i
      ></a>
    </section>
  </div>
</template>
