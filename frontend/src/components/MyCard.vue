<script>
export default {
  props: {
    meme: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      baseURL: "http://localhost:3000/memes/",
    };
  },
};
</script>

<template>
  <div class="my-card">
    <img :src="baseURL + meme" :alt="meme" class="rounded-lg object-cover h-48 w-96 transition delay-150 duration-300 hover:ease-in-out" />
  </div>
</template>
