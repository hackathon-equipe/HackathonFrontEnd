<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useAuthStore } from '@/stores/auth'
import PadraoPropagandas from '@/components/header/propagandas/PadraoPropagandas.vue'
import PadraoCaminho from '@/components/header/caminho/PadraoCaminho.vue'
import { PerfilInfo, AsidePerfil } from '.'
import { userIcon, markerPinIcon, packageIcon,walletIcon, downArrowIcon, upArrowIcon } from '../icons'
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
    if(componenteCaminho.value == opcao){
        componenteCaminho.value = 0
    }
    else{
        componenteCaminho.value = opcao
    }
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

async function enviar(dados) {
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
        <div class="links">
            <ul>
                <li :class="local === 1 ? 'active' : ''" @click="caminho(1)">
                    <div class="display-info"><span><userIcon /> Meus dados</span> <upArrowIcon v-if="componenteCaminho == 1" /><downArrowIcon v-else/></div>
                    <div class="display-show" v-if="componenteCaminho == 1" >
                        <PerfilInfo :DadosUser="usuario" @enviarDados="enviar" />
                    </div>
                </li>
                <li :class="local === 2 ? 'active' : ''" @click="caminho(2)">
                    <div class="display-info"><span><markerPinIcon /> Meus enderecos</span> <upArrowIcon v-if="componenteCaminho == 2" /><downArrowIcon v-else/></div>
                    <div>
                        <div v-if="componenteCaminho == 2">INATIVO</div>
                    </div>
                </li>
                <li :class="local === 3 ? 'active' : ''" @click="caminho(3)">
                    <div class="display-info"> <span><packageIcon /> Meus pedidos</span> <upArrowIcon v-if="componenteCaminho == 3" /><downArrowIcon v-else/></div>
                    <div>
                        <div v-if="componenteCaminho == 3">INATIVO</div>
                    </div>
                </li>
                <li :class="local === 4 ? 'active' : ''" @click="caminho(4)">
                    <div class="display-info"><span><walletIcon /> Meus cupons</span> <upArrowIcon v-if="componenteCaminho == 4" /><downArrowIcon v-else/></div>
                    <div>
                        <div v-if="componenteCaminho == 4">INATIVO</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div v-else class="carregamento">
        <img src="/src/assets/images/LoadGif/LoadingAnimation.gif" alt="gif carregamento" />
    </div>
</template>

<style scoped>
.links ul{
    list-style: none;
}
.links ul li{  
    border-bottom: 1px solid #ccc;
}
.links ul li .display-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5px;
}
.links ul li .display-info span{
    display: flex;
    align-items: center;
    gap: 10px;
}
.display-show{
    padding-bottom: 40px;
}
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
  
  @media (max-width: 768px) {
    .container{
      flex-direction: column;
      gap: 10px;
      padding: 0px 20px 100px;
    }
  }
</style>
