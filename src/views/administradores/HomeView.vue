<script setup>
import ProdutosGrafico from '@/components/adminstradores/graficos/produtosGrafico.vue'
import EntradaSaida from '@/components/adminstradores/graficos/EntradaSaida.vue'
import OrcamentosGrafico from '@/components/adminstradores/graficos/OrçamentosGrafico.vue'
import { dollarIcon, recycleIcon, downGraphicIcon, leftArrowIcon } from '@/components/icons'
import bunnerHomePage from '@/assets/images/bunnerHome/imageHomePage.vue'
import { useAuth } from '@/composables/auth'
import axios from 'axios'
import { useAuthStore } from '@/stores/auth'
import { ref, onMounted, onUnmounted } from 'vue'

// Definir o ref para controlar a visibilidade
const scrollReached = ref(false)

// Função para verificar a posição do scroll
const checkScroll = () => {
  // Se o scroll ultrapassar 200px, defina scrollReached como true
  if (window.scrollY > 500) {
    scrollReached.value = true
  } else {
    scrollReached.value = false
  }
}

// Adicionar o listener do evento scroll quando o componente for montado
onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

// Remover o listener quando o componente for desmontado
onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})

const goToDesempenho = () => {
  // Rolar a página para baixo 100vh (altura total da tela)
  window.scrollTo({
    top: window.scrollY + (window.innerHeight - 60),  // Rolando a tela para baixo em 100vh
    behavior: 'smooth' // Rolagem suave
  })
}

const user = ref()
const carregando = ref(false)
const getUserData = async () => {
  try {
    carregando.value = true
    const response = await axios.get('/usuarios/me')
    user.value = response.data
    carregando.value = false
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error)
  }
}
useAuth()
onMounted(() => {
  getUserData()
})
</script>

<template>
  <div>
    <div class="home">
      <div class="info-side">
        <div class="home-tittle">
          <h1>INVESTIMENTO, SUSTENTABILIDADE, ECONOMIA</h1>
        </div>
        <div class="home-icons">
          <div>
            <span>
              <dollarIcon />
            </span>
            <span>valoriza seu imovel</span>
          </div>
          <div class="line-icons">
            <span>
              <recycleIcon />
            </span>
            <span>energia limpa</span>
          </div>
          <div>
            <span>
              <downGraphicIcon />
            </span>
            <span>reducao de CO₂</span>
          </div>
        </div>
        <div class="home-buttons">
          <button class="button" @click="goToDesempenho">Desempenho
            <LeftArrowIcon class="seta" />
          </button>
        </div>
      </div>
      <div>
        <bunnerHomePage />
      </div>
    </div>
    <div class="container-desempenho">
      <div v-if="scrollReached" :class="scrollReached ? 'active' : 'not-active'" class="container-esquerda">
        <div class="container-flex">
          <div class="dados-produtos">
            <div class="saldo-container">
              <div class="dado-container">
                <div class="center">
                  <span class="legenda">saldo</span>
                  <span class="conteudo">R$3.000.000,00</span>
                </div>
              </div>
            </div>
            <div class="pedidos-usuarios">
              <div class="dado-container duplo">
                <div class="center">
                  <span class="legenda">Pedidos feitos esse mês</span>
                  <span class="conteudo">30 pedidos</span>
                </div>
              </div>
              <div class="dado-container duplo">
                <div class="center">
                  <span class="legenda">Usuarios logados no sistema</span>
                  <span class="conteudo">100 usuários</span>
                </div>
              </div>
            </div>
          </div>
          <div class="produtos-grafico">
            <ProdutosGrafico />
          </div>
        </div>
      </div>

      <div v-if="scrollReached" :class="scrollReached ? 'active' : 'not-active'" class="container-direita">
        <div class="entradaSaida-orcamentos">
          <div class="entrada-saida">
            <EntradaSaida />
          </div>
          <div class="orcamentos">
            <OrcamentosGrafico />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Definindo a transição */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
}

.fade-enter, .fade-leave-to /* .fade-leave-active no Vue 3 */ {
  opacity: 0;
  transform: translateY(20px); /* Inicia com um pequeno deslocamento */
}

/* Para o conteúdo ativo, retorna ao seu estado original */
.container-esquerda, .container-direita {
  opacity: 1;
  transform: translateY(0);
}
.center{

  display: flex;
   flex-direction: column; 
  justify-content: center;

}
.pedidos-usuarios{
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  height: 100%;
}
.saldo-container{
  display: flex;
  justify-content: space-between;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.legenda {
  font-size: 14px;
  align-self: start;
}

.conteudo {
  font-size: 30px;
  font-weight: 600;
  align-self: start;
  color:#212c49;
}

.dados-produtos {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 38%;
  width: 100%;
}

.produtos-grafico {
  height: 58%;
  width: 100%;
  border: 1px solid #406a966c;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.15) 2px 5px 15px 0px;
}

.entrada-saida {
  height: 50%;
  width: 100%;

}

.orcamentos {
  height: 50%;
  width: 100%;

}

.container-esquerda {
  height: 90%;
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0;
}

.container-direita {
  height: 90%;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.container-esquerda, .container-direita {
  opacity: 0;
  transform: translateY(20px); /* Inicialmente os containers estão deslocados um pouco para baixo */
  transition: opacity 2.5s ease-in-out, transform 2.5s ease-in-out; /* Transição para opacidade e movimento */
}

.active {
  opacity: 1;
  transform: translateY(0); /* A posição final será no lugar correto */
}

.entradaSaida-orcamentos {
  height: 93%;
  width: 47vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #406a966c;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.15) 2px 5px 15px 0px;
}

.container-flex {
  height: 93%;
  width: 37vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.dado-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 94%;
  width: 100%;
  border: 1px solid #406a966c;
  border-radius: 25px;
  padding: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 3px 7px 0px;
}
.duplo{
  width: 48%;
}
.container-desempenho {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(240, 248, 255, 0);
}

.seta {
  transform: rotate(90deg);
}

.home {
  padding: 160px 40px 40px 40px;
  display: flex;
  justify-content: space-around;
}

.home .info-side {
  display: flex;
  flex-direction: column;
}

.home .info-side .home-tittle h1 {
  width: 700px;
  font-weight: 600;
  font-size: 72px;
  background-image: linear-gradient(43deg, #000000 0%, #2f3f68 90%);
  background-clip: text;
  color: transparent;
  line-height: 100px;
}

.home .info-side .home-icons {
  font-weight: 500;
  margin-top: 20px;
  display: flex;
}

.home .info-side .home-icons div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.home .info-side .home-icons .line-icons {
  border-left: 1px solid #406996;
  border-right: 1px solid #406996;
}

.home .info-side .home-icons span {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 3px 20px;
  height: 36px;
}

.home .info-side .home-buttons {
  margin-top: 50px;
  display: flex;
  gap: 35px;
}

.home .info-side .home-buttons .button {
  appearance: none;
  padding: 20px 40px;
  border-radius: 3rem;
  background-color: #29375b;
  color: #f6fbff;
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  text-decoration: none;
  transition: .2s linear;
}

.home-buttons .button:hover {
  transform: translateY(-8px);
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

