<script setup>
import ProdutosGrafico from '@/components/adminstradores/graficos/produtosGrafico.vue'
import EntradaSaida from '@/components/adminstradores/graficos/EntradaSaida.vue'
import OrcamentosGrafico from '@/components/adminstradores/graficos/OrçamentosGrafico.vue'
import { dollarIcon, recycleIcon, downGraphicIcon, leftArrowIcon } from '@/components/icons'
import bunnerHomePage from '@/assets/images/bunnerHome/bunnerHomePage.vue'
import LeftArrowIcon from '@/components/icons/leftArrowIcon.vue'
import { useAuth } from '@/composables/auth'
import { useAuthStore } from '@/stores/auth'
import { onMounted, ref } from 'vue'
import axios from 'axios'
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
  <!-- <div v-if="carregando" class="carregamento"><img src="/src/assets/images/LoadGif/LoadingAnimation.gif" alt="" /></div> -->
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
          <router-link class="button" to="/produtos/placas-solares">Desempenho
            <LeftArrowIcon class="seta" />
          </router-link>
        </div>
      </div>
      <div>
        <bunnerHomePage />
      </div>
    </div>
    <div class="container-desempenho">
      <div class="dados">
        <div class="dado-container"></div>
        <div class="dado-container"></div>
        <div class="dado-container"></div>
        <div class="dado-container"></div>
      </div>
      <div class="graficos-flex">
      <div class="produtos-grafico">
        <ProdutosGrafico />
      </div>
      <div class="grafico-OrcamentoProdutos">
        <EntradaSaida/>
        <OrcamentosGrafico />

      </div>
</div>
    </div>
  </div>
</template>
<style scoped>
.produtos-grafico{
  width: min-content;
}
.grafico-OrcamentoProdutos{
  display: flex;
  flex-direction: column;
}
.graficos-flex {
  display: flex;
}

.dados {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dado-container {
  width: 100px;
  height: 100px;
  background-color: #29375b;
}

.container-desempenho {
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
  padding: 100px 200px;
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
