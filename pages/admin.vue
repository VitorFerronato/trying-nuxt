<template >
  <div>ISSO É UMA PÁGINA DE ADMIN PROTEGIDA</div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
</script>

<style lang="">
</style>