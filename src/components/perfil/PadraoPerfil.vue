<template>
  <PadraoPropagandas />
  <PadraoCaminho />
  <div class="container" v-if="!carregando">
    <AsidePerfil
      :usuario="usuario"
      @salvarFoto="handleImagemSelecionada"
      @selecionarComponente="caminho"
      :opcao="componenteCaminho" @sair="deslogar"
    />
    <PerfilInfo :DadosUser="usuario" @enviarDados="enviar" v-if="componenteCaminho == 1" />
    <div v-if="componenteCaminho == 2">oii</div>
  </div>
  <div v-else class="carregamento">
    <img src="/src/assets/images/LoadGif/LoadingAnimation.gif" alt="gif carregamento" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useAuthStore } from '@/stores/auth'
import PadraoPropagandas from '@/components/header/propagandas/PadraoPropagandas.vue'
import PadraoCaminho from '@/components/header/caminho/PadraoCaminho.vue'
import AsidePerfil from './AsidePerfil/AsidePerfil.vue'
import PerfilInfo from './form/PerfilInfo.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import { submitUpdate } from '@/composables/user'
const componenteCaminho = ref(1)
const usuario = ref({
  name: '',
  email: '',
  telefone: { ddd: '', numero: '' },
  senha: '',
  senhaConfirmacao: '',
  foto: ''
})

function caminho(opcao) {
  componenteCaminho.value = opcao
}

const imagemTemporaria = ref(null)
const useAuth = useAuthStore()
const carregando = ref(false)

function handleImagemSelecionada(file) {
  imagemTemporaria.value = file
}

const getUserData = async () => {
  try {
    carregando.value = true
    const response = await axios.get('/usuarios/me')
    usuario.value = response.data
    carregando.value = false
    useAuth.user.foto
    if (!usuario.value.telefone) {
      usuario.value.telefone = { ddd: '', numero: '' }
    }
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error)
    carregando.value = false
  }
}

 async function enviar(dados){
  await submitUpdate(usuario.value, dados, imagemTemporaria.value)
}

function deslogar(tempo = 1000) { 
  setTimeout(() => {
    useAuth.unsetToken();
    localStorage.removeItem('psg_auth_token');
    router.push({ name: 'home' });
  }, tempo);
}

onMounted(() => {
  getUserData()
})
</script>

<style scoped>
.active {
  padding-left: 5px;
  font-weight: 600;
}
.container {
  display: flex;
  gap: 80px;
  justify-content: center;
  padding: 50px 80px 200px 80px;
}

.carregamento {
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carregamento img {
  width: 15%;
}

</style>
