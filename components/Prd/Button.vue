<template >
  <v-btn color="#3c5ca7" class="text-none">{{ title }}</v-btn>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
});
</script>

<style >
</style>