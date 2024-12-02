import { ref } from 'vue';
import { defineStore } from 'pinia';

import AuthService from '@/service/auth';
const authService = new AuthService();

export const useAuthStore = defineStore('auth', () => {
  const user = ref({});
  const loggedIn = ref(false);
  const authToken = localStorage.getItem('psg_auth_token');
  async function setToken(token) {
    user.value = await authService.postUserToken(token);
    loggedIn.value = true;
    console.log(token)
  }

  function unsetToken() {
    user.value = {};
    loggedIn.value = false;
  }

  async function updateUser(newUserData) {
    if(authToken){
      console.log('foiii')
    }
    console.log('foiii')
    const updatedUserData = await authService.updateUserData(user.value.id,newUserData,authToken);
    if (updatedUserData) {
      user.value = updatedUserData; // Atualiza o estado com os dados novos
 
    }
  }

  return { user, loggedIn, setToken, unsetToken, updateUser };
});
