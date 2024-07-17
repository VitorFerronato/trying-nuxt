<template >
  <v-form @submit.prevent class="d-flex flex-column ga-2">
    <Prd-Text-Field v-model="email" :title="'Email'" />

    <Prd-Text-Field v-model="password" :title="'Senha'" />

    <v-row no-gutters justify="space-between" align="center">
      <v-checkbox
        v-model="rememberPassword"
        label="Lembrar Senha"
        density="compact"
        color="#3c5ca7"
        hide-details
        center-affix
        class="ma-0 pa-0 ml-n1"
      ></v-checkbox>
      <p
        @click="$emit('handlePasswordRecovery')"
        class="forgot-password text-subtitle-2 prd-txt-color-primary cursor-pointer"
      >
        Esqueci minha senha
      </p>
    </v-row>

    <div class="d-flex align-center justify-center mt-4 mb-10">
      <Prd-Button :title="'Entrar'" @click="login" />
    </div>
  </v-form>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore.js";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useUserStore();

const email = ref(null);
const password = ref(null);
const rememberPassword = ref(false);
const login = () => {
  router.push("/");
};
</script>

<style lang="scss" scoped>
.forgot-password:hover {
  text-decoration: underline;
}
</style>