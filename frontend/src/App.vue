<script>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  components: {
    MainHeader,
    MainFooter,
  },
};
</script>

<template>
  <div class="app">
    <MainHeader />
    <main class="min-h-80 mt-4 lg:mt-0">
      <RouterView />
    </main>
    <MainFooter />
  </div>
</template>
