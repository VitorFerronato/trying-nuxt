<template >
  <div>
    <v-btn
      :variant="variant"
      color="#3c5ca7"
      class="text-none"
      :type="submit ? 'submit' : ''"
      >{{ title }}</v-btn
    >
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

  submit: {
    type: Boolean,
    default: false,
  },
});
</script>

<style >
</style>