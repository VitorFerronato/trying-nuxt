<template>
  <div
    class="prd-bg-very-light-gray header d-flex justify-space-between align-center"
  >
    <h4 class="text-h6 font-weight-bold">3208 - Demo varejo</h4>

    <div class="d-flex ga-4 mr-6">
      <v-icon color="#3c5ca7">mdi-translate</v-icon>
      <v-icon color="#3c5ca7">mdi-currency-brl</v-icon>
      <v-icon color="#3c5ca7">mdi-account-outline</v-icon>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore.js";
const store = useUserStore();
</script>

<style lang="scss" scoped>
.header {
  height: 65px;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
}
</style>