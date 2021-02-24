<template>
  <nav class="headbar">
    <i class="fab fa-youtube headbar__logo"></i>
    <input
      type="text"
      v-model="searchText"
      class="headbar__searchInput input--simple"
    />
    <button class="btn--blank ">
      <i class="fa fa-search headbar__searchIcon" />
    </button>
  </nav>
</template>

<script>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const searchText = ref("");

    watch(searchText, value => {
      router.push(`?query=${value}`);
    });
    return {
      searchText
    };
  }
};
</script>

<style scoped lang="scss">
.headbar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: $primary;
  height: $mobileHeadbarHeight;
  padding: 0 20px;
  &__logo {
    color: #fff;
    font-size: 40px;
  }
  &__searchInput {
    padding: 5px;
    flex-grow: 1;
    margin: 0 10px;
  }

  &__searchIcon {
    color: #fff;
    font-size: 16px;
  }
}
</style>
