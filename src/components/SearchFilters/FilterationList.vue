<template>
  <ul class="filter-list">
    <h6 class="filter-list__title">{{ title }}</h6>
    <li
      class="filter-list__listitem"
      v-for="option in options"
      :key="option.value"
    >
      <button
        :class="{
          'btn--blank': true,
          isActive: !!option.value && option.value === activeIndicator
        }"
        @click="onClickHandler(option.value)"
      >
        {{ option.label }}
      </button>
      <button
        @click="clearFilter"
        class="btn--blank filter-list__close"
        v-if="isOptional && option.value && option.value === activeIndicator"
      >
        &times;
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    activeIndicator: { type: String, default: "" },
    options: { type: Array, default: () => [] },
    title: String,
    onClickHandler: Function,
    clearFilter: Function,
    isOptional: { type: Boolean, default: true }
  }
};
</script>

<style lang="scss" scoped>
.filter-list {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  justify-content: flex-start;
  align-items: flex-start;

  &__listitem {
    margin-bottom: 7px;
    display: flex;
    align-items: center;
    button.isActive {
      font-weight: bold;
    }
  }
  &__title {
    text-align: left;
    text-transform: uppercase;
    border-bottom: 1px solid #efefef;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  &__close {
    font-size: 20px;
    margin-left: 10px;
  }
}
</style>
