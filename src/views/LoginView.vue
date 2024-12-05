<script setup>
import { useRouter } from 'vue-router';
import "@passageidentity/passage-elements/passage-auth";
import { useAuthStore } from '@/stores/auth';
import { ref, onMounted } from 'vue';

const router = useRouter();
const authStore = useAuthStore();

// Função que será chamada quando o Passage completar o login
const handleLogin = async () => {
  // Captura o token gerado pelo Passage
  const token = localStorage.getItem('psg_auth_token');
  
  // Aguardar o token para setar o usuário no store
  if (token) {
    await authStore.setToken(token);
    // Após o login, redireciona para a rota anterior
    redirectToPreviousPage();
  }
};

// Função para redirecionar para a página anterior
const redirectToPreviousPage = () => {
  const previousRoute = localStorage.getItem('previousRoute');
  console.log(previousRoute)
  // Verifica se há uma rota anterior salva e redireciona ou vai para a home
  if (previousRoute) {
    router.push(previousRoute);
  } else {
    router.push('/'); // Caso não tenha rota anterior, vai para a home
  }
};

onMounted(() => {
  // Verifica se o usuário não está autenticado e, se não, salva a rota anterior
  if (!authStore.loggedIn) {
    const currentRoute = router.currentRoute.value.fullPath;
    localStorage.setItem('previousRoute', currentRoute); // Salva a rota atual
  }
});
</script>

<template>
  <div class="authContainer">
    <passage-auth  @login="handleLogin" app-id="V0alwA7XSzKK5hRenPSvbiYf"></passage-auth>
  </div>
</template>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  margin: 0;
  /* padding: 20px; */
  color: #333;
}

h1 {
  font-size: 2rem;
  color: #4a90e2;
  margin-bottom: 20px;
  text-align: center;
}

.authContainer {
  background-color: #ffffff;
  padding:20px;
  border-radius: 10px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  width: 100%;
  max-width: 400px;
  margin: 180px auto;
  text-align: center;
}

passage-auth {
  display: block;
  /* margin-top: 20px; */
  --primary-color: #4a90e2;
  --text-color: #333;
  --button-background-color: #4a90e2;
  --button-text-color: white;
}

@media (max-width: 600px) {
  .authContainer {
    padding: 20px;
    max-width: 90%;
  }
}
</style>


