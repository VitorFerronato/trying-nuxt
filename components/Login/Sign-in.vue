<template>
  <div class="bg-width position-relative">
    <div class="login-inputs position-absolute">
      <Login-Title-Img />

      <v-form @submit.prevent class="d-flex flex-column ga-2">
        <Prd-Text-Field v-model="email" :title="'Email'" />

        <Prd-Text-Field v-model="password" :title="'Senha'" />

        <v-row no-gutters justify="space-between" align="center">
          <v-checkbox
            label="Lembrar Senha"
            density="compact"
            color="#3c5ca7"
            hide-details
            center-affix
            class="ma-0 pa-0 ml-n1"
          ></v-checkbox>
          <span class="text-subtitle-2 prd-txt-color-primary">
            Esqueci minha senha
          </span>
        </v-row>

        <div class="d-flex align-center justify-center mt-4 mb-10">
          <Prd-Button :title="'Entrar'" @click="login" />
        </div>
      </v-form>

      <Login-Terms-Politics />
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore.js";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useUserStore();

const email = ref(null);
const password = ref(null);
const login = () => {
  let userData = {
    password: password.value,
    email: email.value,
  };
  console.log(userData);
  // store.setUserData(userData);
  // router.push("/");
};
</script>

<style lang="scss" scoped>
.login-inputs {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.bg-width {
  width: 40%;
}
</style>