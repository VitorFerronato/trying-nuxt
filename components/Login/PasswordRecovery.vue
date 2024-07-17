<template >
  <div>
    <h3 class="prd-txt-color-primary text-center">REDEFINIR SENHA</h3>

    <p class="my-6">
      Insira o email cadastrado na plataforma Predify para redefinir a senha
    </p>

    <v-form @submit.prevent>
      <Prd-Text-Field v-model="email" :title="'Email'" />

      <div class="d-flex flex-column align-center justify-center my-4">
        <Prd-Button :title="'Recuperar'" class="mb-3" />
        <Prd-Button
          :title="'Cancelar'"
          :variant="'outlined'"
          @click="$emit('handlePasswordRecovery')"
        />
      </div>
    </v-form>
  </div>
</template>

<script setup>
</script>

<style lang="">
</style>