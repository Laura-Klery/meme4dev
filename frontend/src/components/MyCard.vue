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
    }
  },
}
</script>

<template>
  <div class="my-card">
    <img :src="baseURL + meme" :alt="meme" class="rounded-lg object-cover w-96 transform transition-all duration-300 shadow hover:shadow-lg hover:scale-95" />
  </div>
</template>
