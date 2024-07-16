<template>
  <div class="flex-1-0 position-relative">
    token {{ store.token }}
    <br />
    email {{ store.email }}
    <v-form
      @submit.prevent
      class="login-inputs position-absolute d-flex flex-column ga-2"
    >
      <div>
        <label>E-mail</label>
        <v-text-field v-model="email"></v-text-field>
      </div>

      <div>
        <label>Senha</label>
        <v-text-field v-model="password"></v-text-field>
      </div>

      <v-btn @click="login" color="primary">Login</v-btn>
    </v-form>
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
    token: "adsujdais2332iilkkisuyja",
    email: email,
  };

  store.setUserData(userData);
  router.push("/");
};
</script>

<style lang="scss" scoped>
.login-inputs {
  width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>