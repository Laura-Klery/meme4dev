<script>
import axios from "axios";
import { mapStores } from 'pinia';
import { useAuthenticateStore } from "@/stores/authenticate";
import MyCard from "@/components/MyCard.vue";

export default {
  components: {
    MyCard,
  },
  data() {
    return {
      memes: [],
      baseURL: "http://localhost:3000/memes/",
      displayedMemes: [], // Memes à afficher
      memesPerPage: 8, // Nombre de memes à afficher par page
      visibleMemes: 8, // Nombre de memes initialement visibles
    };
  },
  computed: {
    ...mapStores(useAuthenticateStore),
  },
  mounted() {
    this.getMemes();
    this.isAuthenticated();
  },
  methods: {
    isAuthenticated() {
      if(this.authenticateStore.authenticated === false) {
        return this.$router.push('/login')
      }
    },
    scrollToBottom() {
      const memesSection = document.querySelector(".section-memes");
      memesSection.scrollIntoView({ behavior: "smooth" });
    },
    getMemes() {
      axios
        .get("http://127.0.0.1:3000/memes")
        .then((response) => {
          console.log(response.data);
          this.memes = response.data.sort((a, b) => b.date - a.date);
          this.displayedMemes = this.memes.slice(0, this.visibleMemes);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadMoreMemes() {
      const remainingMemes = this.memes.length - this.displayedMemes.length;
      const memesToAdd = Math.min(remainingMemes, 4);

      if (memesToAdd > 0) {
        const startIndex = this.displayedMemes.length;
        const endIndex = startIndex + memesToAdd;
        this.displayedMemes = this.displayedMemes.concat(
          this.memes.slice(startIndex, endIndex)
        );
      }
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
  <div class="home max-w-screen-xl container mx-auto px-8">
    <section class="section-hero min-h-screen grid justify-items-stretch">
      <div class="content flex flex-col gap-4 sm:flex-row items-center justify-center sm:gap-6">
        <div class="content-hero text-center sm:text-left flex flex-col gap-4 sm:gap-3">
          <h1 class="h1-hero text-4xl sm:text-8xl">Meme4Dev</h1>
          <p class="text-hero text-sm sm:text-lg">Créer votre meme <br />maintenant</p>
          <RouterLink to="/new">
            <MyButton class="bg-button-create hover:bg-button-create-hover hover:shadow-lg transition-all duration-300 ease-in-out">Création</MyButton>
          </RouterLink>
        </div>
        <div class="img-hero">
          <img
            class="w-4/5 sm:w-3/4 mx-auto"
            src="@/assets/img/chat-meme4dev.png"
            alt="Image chat"
          />
        </div>
      </div>
      <span class="icon-scroll grid justify-self-center my-8 opacity-30 cursor-pointer hover:transition hover:ease-in-out hover:duration-150 hover:animate-bounce">
        <i @click="scrollToBottom" class="fa-solid fa-chevron-down text-3xl sm:text-6xl"></i>
      </span>
    </section>
    <section class="section-memes bg-blanc backdrop-blur-lg bg-opacity-30 border border-contour py-6 px-4 sm:p-8 rounded-2xl">
      <div class="grid gap-4 sm:gap-2 sm:grid-cols-2 md:gap-4 md:grid-cols-4">
        <article v-for="meme in displayedMemes" :key="meme">
          <div class="flex justify-end gap-2 my-2">
            <IconButton @click="downloadMeme(meme)">
              <i class="fa-solid fa-download text-sm"></i>
            </IconButton>
            <IconButton>
              <i @click="deleteMeme(meme)" class="fa-solid fa-xmark text-md"></i>
            </IconButton>
          </div>
          <MyCard :meme="meme" />
        </article>
      </div>
      <div
        class="grid place-content-center my-10"
        v-if="displayedMemes.length < memes.length"
      >
        <MyButton class="bg-buttons hover:bg-buttons-hover hover:shadow-lg transition-all duration-300 ease-in-out" @click="loadMoreMemes">Afficher plus</MyButton>
      </div>
    </section>
    <section
      class="section-insta flex justify-center items-center gap-6 sm:gap-8 bg-blanc backdrop-blur-lg bg-opacity-30 border border-blanc py-8 px-4 sm:w-1/3 my-12 mx-auto rounded-2xl"
    >
      <h3 class="text-base md:text-3xl">Publiez vos memes</h3>
      <a href="https://www.instagram.com/" target="_blank">
        <i class="fa-brands fa-instagram text-bleu text-6xl sm:text-9xl transform hover:scale-110 transition-all duration-300"></i>
      </a>
    </section>
  </div>
</template>