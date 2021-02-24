<template>
  <div class="full_loader">
    <img :src="pageLoaderSrc" alt="Loading..." />
  </div>
</template>

<script>
import pageLoaderSrc from "@Assets/pageLoader.gif";

export default {
  data: () => ({
    pageLoaderSrc
  })
};
</script>

<style scoped>
.full_loader {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
