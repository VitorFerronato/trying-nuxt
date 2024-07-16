<template>
  <div class="header d-flex justify-space-between align-center">
    <div>Company name</div>
    token {{ store.token }}
    <br />
    email {{ store.email }}
    <div>
      <v-icon>mdi-plus-box</v-icon>
      <v-icon>mdi-plus-box</v-icon>
      <v-icon>mdi-plus-box</v-icon>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore.js";
const store = useUserStore();

onMounted(() => {
  console.log(store.$state);
});
</script>
