<template>
  <PadraoPropagandas />
  <PadraoCaminho />
  <div class="container" v-if="!carregando">
    <div class="span-nav">
      <div class="foto">
        <img src="/src/assets/images/usersemfoto.jpg" alt="Foto perfil">
      </div>
      <!-- <label for="file-upload" class="file"> Mudar foto </label>
      <input type="file" id="file-upload" @change="handleFileUpload($event)" /> -->
      <div class="links">
        <ul>
          <li class="active"><userIcon /> Meus dados</li>
          <li><markerPinIcon /> Meus enderecos</li>
          <li><packageIcon /> Meus pedidos</li>
          <li><walletIcon /> Meus cupons</li>
        </ul>
      </div>
    </div>
    <div class="perfil-info">
      <div><h1>Meus Dados</h1></div>
      <div class="inputs" v-if="usuario">
        <div class="input-div">
          <label for="nome">Nome:</label>
          <input type="text" id="nome" class="inputInteiro" v-model="usuario.name" />
        </div>
        <div class="input-div">
          <label for="email">Email:</label>
          <input type="text" class="inputInteiro" id="email" v-model="usuario.email" />
        </div>
        <div class="input-div">
          <label for="telefone">DDD:</label>
          <input type="text" id="telefone" v-model="usuario.telefone.ddd" />
        </div>
        <div class="input-div">
          <label for="wahtsapp">Número:</label>
          <input type="text" id="whatsapp" v-model="usuario.telefone.numero" />
        </div>
        <div class="input-div">
          <label for="alterarsenha">Alterar Senha:</label>
          <input type="password" id="alterarsenha" v-model="usuario.senha" />
        </div>
        <div class="input-div">
          <label for="confirmarsenha">Confirme Senha:</label>
          <input type="password" id="confirmarsenha" v-model="usuario.senhaConfirmacao" />
        </div>
      </div>
      <div class="button">
        <button @click="submitUpdate()">Salvar alteracoes</button>
      </div>
    </div>
  </div>
  <div v-else class="carregamento">
    <img src="/src/assets/images/LoadGif/LoadingAnimation.gif" alt="gif carregamento">
  </div>
</template>

<script setup>
import { walletIcon, userIcon, packageIcon, markerPinIcon } from '@/components/icons'
import PadraoPropagandas from '@/components/header/propagandas/PadraoPropagandas.vue'
import PadraoCaminho from '@/components/header/caminho/PadraoCaminho.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

const usuario = ref({
  name: '',
  email: '',
  telefone: { ddd: '', numero: '' },
  senha: '',
  senhaConfirmacao: '',
})


const useAuth = useAuthStore()
const carregando = ref(false)
const getUserData = async () => {
  try {
    carregando.value = true
    const response = await axios.get('/usuarios/me')
    usuario.value = response.data
    carregando.value = false
    if (!usuario.value.telefone) {
      usuario.value.telefone = { ddd: '', numero: '' }
    }
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error)
  }
}


async function submitUpdate() {
  try {
    // Verificando se as senhas coincidem
    if (usuario.value.senha && usuario.value.senha !== usuario.value.senhaConfirmacao) {
      alert('As senhas não coincidem.')
      return
    }

    let telefoneId = usuario.value.telefone
    if (!telefoneId) {
      // Cria um novo número de telefone se não existir
      const telefoneResponse = await axios.post('/telefones/', {
        ddd: usuario.value.telefone.ddd,
        numero: usuario.value.telefone.numero
      })
      telefoneId = telefoneResponse.data.id
    }

    const updatedUser = {
      name: usuario.value.name,
      email: usuario.value.email,
      telefone: telefoneId,
      senha: usuario.value.senha || undefined,
      // foto: usuario.value.foto // Atualiza o campo 'foto' com a ID da imagem
    }

    await useAuth.updateUser(updatedUser) // Supondo que isso seja um método de atualização do usuário no store
    alert('Dados atualizados com sucesso!')
  } catch (error) {
    console.error('Erro ao atualizar os dados:', error.response ? error.response.data : error)
    alert('Erro ao atualizar os dados. Tente novamente.')
  }
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
  padding: 50px 80px 120px 80px;
}
.span-nav {
  width: 250px;
  padding: 30px;
  border: 1px solid #ececec;
  border-radius: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.span-nav .foto {
  width: 130px;
  height: 130px;
  border-radius: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #afe67e;
  margin-bottom: 90px;
}

.span-nav .foto img {
  width: 130px;
  height: 130px;
  border-radius: 50%;
}

.span-nav .links {
  padding-bottom: 40px;
}
.span-nav ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
}
.span-nav ul li {
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid #ececec;
  padding: 0px 0px 15px 0px;
}
.perfil-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 720px;
}
.perfil-info h1 {
  font-size: 24px;
}
.perfil-info input {
  width: 350px;
  height: 40px;
  border: 1px solid #d9d9d9;
  border-radius: 50px;
  padding: 0px 45px;
  color: #545454;
}

.perfil-info input.inputInteiro {
  width: 720px;
}
.inputs {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.input-div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.button {
  display: flex;
  justify-content: center;
}
.button button {
  width: 280px;
  height: 50px;
  background-color: #29375b;
  color: white;
  border: 1px solid transparent;
  border-radius: 50px;
  cursor: pointer;
}

.carregamento{
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carregamento img{
  width: 15%;

}

/* input[type='file'] {
  display: none;
}

.file {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 15px;
  margin-bottom: 30px;
} */
</style>
