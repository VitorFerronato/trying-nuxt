<template>
  <div class="login-main d-flex">
    <Login-Background />

    <Login-Sign-In />
  </div>
</template>

<script setup>
useHead({
  title: "PREDIFY | LOGIN",
});
definePageMeta({
  layout: "",
});
</script>

<style lang="scss" scoped>
.login-main {
  height: 100vh;
}
</style>