<script setup>
import { ref, watch } from 'vue'
import router from '@/router'

const adm = ref(false)

function mudarRota() {
  if (adm.value == true) {
    router.push('/cliente/home')
  } else {
    router.push('/admin/home')
  }
}
</script>
<template>
    <input type="checkbox" v-model="adm" class="checkbox"> Ir para as paginas do cliente </input>
    <button @click="mudarRota">ir</button>
</template>
<style scoped>
* {
  font-weight: bold;
  color: #012340;
}

main {
  display: flex;
  width: 100vw;
  height: 100vh;
}

main section {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form {
  background-color: #012340;
}

.login-logo {
  background-color: white;
}
</style>
