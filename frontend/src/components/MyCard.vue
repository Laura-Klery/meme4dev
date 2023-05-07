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
    <img :src="baseURL + meme" :alt="meme" />
  </div>
</template>
