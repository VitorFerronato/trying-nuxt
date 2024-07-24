<template >
  <v-form ref="form" @submit.prevent class="d-flex flex-column ga-2">
    <Prd-Text-Field
      v-model="email"
      :rules="[rulesEmail, rulesRequired]"
      :title="'Email'"
    />

    <Prd-Text-Field
      v-model="password"
      :rules="[rulesRequired]"
      :title="'Senha'"
      :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :type="showPassword ? 'text' : 'password'"
      @click:append-inner="showPassword = !showPassword"
    />

    <v-row no-gutters justify="space-between" align="center">
      <Prd-Checkbox
        v-model="rememberPassword"
        :label="'Lembrar Senha'"
        class="ml-n1"
      />

      <p
        @click="$emit('handlePasswordRecovery')"
        class="forgot-password text-subtitle-2 prd-txt-color-primary cursor-pointer"
      >
        Esqueci minha senha
      </p>
    </v-row>

    <div class="d-flex align-center justify-center mt-4 mb-10">
      <Prd-Button :title="'Entrar'" @click="validateForm" submit />
    </div>
  </v-form>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore.js";
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const Store = useUserStore();

const showPassword = ref(false);

const form = ref(null);
const validateForm = async () => {
  if (form.value) {
    const { valid } = await form.value.validate();

    if (valid) {
      login();
    }
  }
};

const email = ref(null);
const password = ref(null);
const rememberPassword = ref(false);
const login = () => {
  let userData = {
    email: email.value,
    rememberPassword: rememberPassword.value,
    token: "sisushgsgy4744",
  };
  Store.setUserData(userData);
  router.push("/");
};
</script>

<style lang="scss" scoped>
.forgot-password:hover {
  text-decoration: underline;
}
</style>