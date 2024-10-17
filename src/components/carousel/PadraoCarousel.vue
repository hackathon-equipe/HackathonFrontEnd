<script setup>
import { useProdutosStore } from '@/stores/produtosStore';
import SlideComponent from './SlideComponent.vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css'
const produtosStore = useProdutosStore()
</script>
<template>
  <Carousel :itemsToShow="5.45" :transition="500">
    <Slide v-for="(text, index) in produtosStore.produtos" :key="index">
      <SlideComponent :img="text.imageUrl" :nome="text.nome" :preco="text.preco" :parcelas="text.parcelas" />
    </Slide>
    <template #addons>
      <Navigation class="aa" />
    </template>
  </Carousel>
</template>

<style scoped>
.link{
  position: absolute;
  left: 0;
}
.carousel{
  padding:20px 0px 20px 90px !important;
}
.aa {
  width: 103px;
  height: 103px;
  background-color: aquamarine;
}
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  height: 500px;
  opacity: 0.9;
  transform: rotateY(-20deg);
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
