<template>
  <div class="bg-width position-relative">
    <div class="login-inputs position-absolute">
      <Login-Title-Img />

      <Login-Form-Sign-in
        v-if="!showPasswordRecovery"
        @handlePasswordRecovery="showPasswordRecovery = true"
      />

      <Login-Password-Recovery
        v-else
        @handlePasswordRecovery="showPasswordRecovery = false"
      />

      <Login-Terms-Politics />
    </div>
  </div>
</template>

<script setup>
const showPasswordRecovery = ref(false);
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