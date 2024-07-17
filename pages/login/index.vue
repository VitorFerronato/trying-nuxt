<template>
  <div class="login-main d-flex">
    <Login-Background />

    <Login-Form />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "",
});
useHead({
  title: "PREDIFY | LOGIN",
});
</script>

<style lang="scss" scoped>
.login-main {
  height: 100vh;
}
</style>