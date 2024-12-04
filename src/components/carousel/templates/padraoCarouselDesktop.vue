<script setup>
import { useProdutosStore } from '@/stores/produtosStore';
import SlideComponent from '../SlideComponent.vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css'
const produtosStore = useProdutosStore()

import { useRoute } from 'vue-router' // Importar useRoute
const route = useRoute() // Usar useRoute para acessar a rota
function parcelas (preco){
  return `em até 10x de ${(preco / 10).toFixed(2)}`
}
</script>

<template>
  <Carousel :itemsToShow="5" :transition="500">
    <Slide v-for="(text, index) in produtosStore.produtos" :key="index">
      <SlideComponent
      :id="text.id"
      :img="text.foto ? text.foto[0].file : ''"
      :imagem="text.imagens"
      :nome="text.nome"
      :preco="text.preco"
      :parcelas="parcelas(text.preco)"
      :estrelas="3"
    />
    </Slide>
    <template #addons>
      <Navigation class="navegacao" />
    </template>
  </Carousel>
</template>

<style scoped>
.carousel{
  padding:20px 0px 20px 90px !important;
}
.navegacao {
  width: 103px;
  height: 103px;
  background-color: aquamarine;
}
.carousel__slide {
  padding: 5px;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  height: 500px;
  opacity: 0.9;
}

/*
.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg);
}
.carousel__slide--active {
  opacity: 1;
}*/
</style>
