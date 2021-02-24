<template>
  <nav class="headbar">
    <i class="fab fa-youtube headbar__logo"></i>
    <form @submit="handleSearchSubmit">
      <input
        type="text"
        ref="searchTextInput"
        class="headbar__searchInput input--simple"
      />
      <button class="btn--blank" type="submit">
        <i class="fa fa-search headbar__searchIcon" />
      </button>
    </form>
  </nav>
  <div class="headbar__mobileFilters">
    <mobile-filters />
  </div>
  <div class="headbar__desktopFilters">
    <desktop-filters />
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import MobileFilters from "@Components/SearchFilters/MobileFilters.vue";
import DesktopFilters from "@Components/SearchFilters/DesktopFilters.vue";
export default {
  components: { MobileFilters, DesktopFilters },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const searchTextInput = ref();

    const handleSearchSubmit = e => {
      e.preventDefault();
      const { value } = searchTextInput.value;
      router.push({ query: { ...route.query, q: value } });
    };

    return {
      searchTextInput,
      handleSearchSubmit
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
  &__mobileFilters {
    @include useMedia("md") {
      display: none;
    }
  }
  &__desktopFilters {
    display: none;
    @include useMedia("md") {
      display: block;
    }
  }
}
</style>
