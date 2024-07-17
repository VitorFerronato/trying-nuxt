<template>
  <div class="header d-flex justify-space-between align-center">
    <div>Company name</div>
    token {{ store.token }}
    <br />
    email {{ store.email }}
    <div class="mr-4">
      <NuxtLink to="/login/sign-out">
        <v-icon>mdi-logout</v-icon>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore.js";
const store = useUserStore();
</script>
