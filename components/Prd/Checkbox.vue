<template>
  <v-checkbox
    :label="label"
    density="compact"
    color="#3c5ca7"
    hide-details="auto"
    center-affix
    class="ma-0 pa-0"
  ></v-checkbox>
</template>

<script setup>
defineProps({
  label: {
    type: String,
  },
});
</script>

<style lang="">
</style>