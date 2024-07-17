<template >
  <div>
    <v-btn :variant="variant" color="#3c5ca7" class="text-none">{{
      title
    }}</v-btn>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
  variant: {
    type: String,
  },
});
</script>

<style >
</style>