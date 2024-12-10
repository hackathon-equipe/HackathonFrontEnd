<script setup>
import { HomeBunnerComp, sugestIcons, contactComp, beneficiesCards, lojasParceirasComp } from '@/components/homeComponents'
import PadraoCarousel from '@/components/carousel/PadraoCarousel.vue'
import TitleCarousel from '@/components/carousel/TitleCarousel.vue'
import { useAuth } from '@/composables/auth'
import { useProdutosStore } from '@/stores/produtosStore'
import { onMounted, ref, computed } from 'vue'
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
const ProdutosStore = useProdutosStore()

onMounted(async () => {
  await ProdutosStore.carregarProdutos();
});

// Propriedade computada para os produtos
const produtos = computed(() => ProdutosStore.produtos);
useAuth()
onMounted(() => {
  getUserData()
})
</script>

<template>
  <Transition name="fade">
    <div v-if="produtos.length == 0" class="carregamento"><img src="/src/assets/images/LoadGif/LoadingAnimation.gif" alt=""></div> <!-- Carregamento-->
    <div v-else>
      <HomeBunnerComp /> <!-- Parte inciial da pagina -->
      <div class="produtos-sugeridos">
        <sugestIcons /> <!-- Links para tipos de produtos -->
      </div>
      <TitleCarousel title="Mais bem avaliados" v-motion-slide-visible-once-left :delay="300" :duration="400" /> <!-- Titulo do carrossel de produtos -->
      <PadraoCarousel v-motion-slide-visible-once-right :delay="300" :duration="400" :tipo="'Bem Avaliado'"  /> <!-- Carrossel de produtos -->
      <TitleCarousel title="Inspirados no visto por ultimo" v-motion-slide-visible-once-left :delay="300" :duration="400" /> <!-- // -->
      <PadraoCarousel v-motion-slide-visible-once-right :delay="300" :duration="400" /> <!-- // -->
      <beneficiesCards /> <!-- Cartoes dos beneficios do sistema -->
      <contactComp /> <!-- Area de contato com Oorum -->
      <!-- Sobre a Catarinas -->
      <lojasParceirasComp /> <!-- Lojas parceiras -->
    </div>
  </Transition>
</template>
<style scoped>
.home-buttons .button:hover {
  transform: translateY(-8px);
}

.carregamento {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carregamento img {
  width: 15%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade{
  width: 100vw;
  max-width: 100vw;
  overflow: hidden;
  overflow-x: hidden;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
