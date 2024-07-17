<template>
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laborum
    ipsa fuga vero debitis sapiente blanditiis itaque qui ad atque, autem
    dolorem, soluta quia odit. Quis excepturi dolor et error?
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

import { useUserStore } from "@/stores/userStore.js";
const Store = useUserStore();

onMounted(() => {
  Store.$reset();
  router.push("/login");
});
</script>
