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
  <div class="home max-w-screen-xl container mx-auto px-8">
    <section class="section-hero">
      <div
        class="content flex flex-col gap-4 sm:flex-row items-center justify-center sm:gap-6"
      >
        <div class="content-hero text-center sm:text-left flex flex-col gap-4 sm:gap-3">
          <h1 class="h1-hero text-4xl sm:text-8xl">Meme4Dev</h1>
          <p class="text-hero text-sm sm:text-lg">
            Créer votre meme <br />maintenant
          </p>
          <RouterLink to="/new"> <MyButton class="bg-button-create">Création</MyButton></RouterLink>
        </div>
        <div class="img-hero">
          <img
            class="w-4/5 sm:w-3/4 mx-auto"
            src="@/assets/img/chat-meme4dev.png"
            alt="Image chat"
          />
        </div>
      </div>

      <span class="icon-scroll grid place-content-center my-8 opacity-30"
        ><i @click="scrollToBottom" class="fa-solid fa-chevron-down text-3xl sm:text-6xl"></i
      ></span>
    </section>
    <section class="section-memes bg-blanc backdrop-blur-lg bg-opacity-30 border border-contour py-8 px-4 sm:p-8 rounded-2xl">
      <div class="grid gap-4 sm:gap-2 sm:grid-cols-2 md:gap-4 md:grid-cols-4">
        <article v-for="meme in memes" :key="meme">
          <div class="flex justify-end gap-2 my-2">
            <IconButton @click="downloadMeme(meme)"
              ><i class="fa-solid fa-download text-sm"></i
            ></IconButton>
            <IconButton
              ><i @click="deleteMeme(meme)" class="fa-solid fa-xmark text-md"></i
            ></IconButton>
           
          </div>

          <MyCard :meme="meme" />
        </article>
      </div>
      <div class="grid place-content-center my-10">
        <MyButton class=" bg-buttons">Afficher plus</MyButton>
      </div>
    </section>
    <section class="section-insta flex justify-center items-center gap-6 sm:gap-8 bg-blanc backdrop-blur-lg bg-opacity-30 border border-blanc py-8 px-4 sm:w-1/3 my-12 mx-auto rounded-2xl">
      <h3 class="text-base sm:texy-3xl">Publiez vos memes</h3>
      <a href="https://www.instagram.com/"
        ><i class="fa-brands fa-instagram text-bleu text-6xl sm:text-9xl"></i
      ></a>
    </section>
  </div>
</template>
