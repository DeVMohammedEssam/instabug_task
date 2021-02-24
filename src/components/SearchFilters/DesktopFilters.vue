<template>
  <div class="desktopFilters">
    <filteration-list
      :activeIndicator="uploadDate"
      :onClickHandler="handleUploadDateChange"
      :options="uploadDateOptions"
      :isOptional="true"
      :clearFilter="clearUploadDate"
      title="upload date"
    />

    <filteration-list
      :activeIndicator="type"
      :onClickHandler="handleTypeChange"
      :options="typeOptions"
      :isOptional="true"
      :clearFilter="clearType"
      title="type"
    />

    <filteration-list
      :activeIndicator="sortBy"
      :onClickHandler="handleSortBy"
      :options="sortByOptions"
      :isOptional="false"
      :clearFilter="clearSortBy"
      title="sort by"
    />
  </div>
</template>

<script>
import useSearchFilters from "@Composable/useSearchFilters";
import FilterationList from "./FilterationList.vue";
import { useRoute, useRouter } from "vue-router";
import { onBeforeMount } from "vue";

export default {
  components: { FilterationList },
  setup() {
    const route = useRoute();
    const router = useRouter();
    onBeforeMount(() => {
      router.push({ query: { ...route.query, sort: "relevance" } });
    });
    const {
      sortBy,
      type,
      uploadDate,
      uploadDateOptions,
      typeOptions,
      sortByOptions,
      handleTypeChange,
      handleUploadDateChange,
      handleSortBy,
      clearType,
      clearSortBy,
      clearUploadDate
    } = useSearchFilters();

    return {
      uploadDateOptions,
      typeOptions,
      sortByOptions,
      sortBy,
      type,
      uploadDate,
      handleTypeChange,
      handleUploadDateChange,
      handleSortBy,
      clearType,
      clearSortBy,
      clearUploadDate
    };
  }
};
</script>
<style lang="scss" scoped>
.desktopFilters {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-gap: 50px;
  padding: 20px;
}
</style>
