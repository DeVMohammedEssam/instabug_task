<template>
  <router-view v-if="!gapiLoading" />
  <PageLoader v-else />
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { LoadGapiService } from "@Services/gapi";
import PageLoader from "@Components/Loaders/PageLoader.vue";

export default {
  setup() {
    const gapiLoading = ref(true);
    onBeforeMount(() => {
      LoadGapiService(gapiLoading);
    });

    return {
      gapiLoading,
      PageLoader
    };
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
