<template>
  <Headbar />
  <router-view v-if="!gapiLoading" />
  <PageLoader v-else />
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { LoadGapiService } from "@Services/gapi";
import PageLoader from "@Components/Loaders/PageLoader.vue";
import Headbar from "@Components/navigation/Headbar/Headbar.vue";
export default {
  setup() {
    const gapiLoading = ref(true);
    onBeforeMount(() => {
      LoadGapiService(gapiLoading);
    });

    return {
      gapiLoading,
      PageLoader,
      Headbar
    };
  }
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
