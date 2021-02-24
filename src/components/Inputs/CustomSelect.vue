<template>
  <select
    :value="value"
    @change="$emit('onValueChange', $event.target.value)"
    class="select--custom"
  >
    <option v-for="option in options" :value="option.value" :key="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    onChangeHandler: Function,
    options: {
      type: Array,
      required: true,
      default: () => []
    },
    value: {
      type: String
    }
  }
};
</script>
