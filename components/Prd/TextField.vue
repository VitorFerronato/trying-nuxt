<template >
  <div>
    <label>{{ title }}</label>
    <v-text-field
      v-bind="$attrs"
      variant="outlined"
      density="compact"
      hide-details
      class="mt-1"
    ></v-text-field>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
});
</script>

<style lang="">
</style>