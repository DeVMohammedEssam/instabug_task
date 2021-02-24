<template>
  <Filtersbar>
    <div class="mobile-filter">
      <custom-select
        :options="typeOptions"
        :value="type"
        @onValueChange="handleTypeChange"
      />
      <custom-select
        :options="uploadDateOptions"
        :value="uploadDate"
        @onValueChange="handleUploadDateChange"
      />
    </div>
  </Filtersbar>
</template>

<script>
import Filtersbar from "@Components/navigation/Filtersbar/Filtersbar.vue";
import CustomSelect from "@Components/Inputs/CustomSelect.vue";
import useSearchFilters from "@Composable/useSearchFilters";

export default {
  components: {
    Filtersbar,
    CustomSelect
  },
  setup() {
    const {
      typeOptions,
      uploadDateOptions,
      uploadDate,
      type,
      handleUploadDateChange,
      handleTypeChange
    } = useSearchFilters();

    return {
      typeOptions,
      uploadDateOptions,
      uploadDate,
      type,
      handleTypeChange,
      handleUploadDateChange
    };
  }
};
</script>

<style scoped lang="scss">
.mobile-filter {
  display: flex;
  justify-content: flex-start;
}
</style>
