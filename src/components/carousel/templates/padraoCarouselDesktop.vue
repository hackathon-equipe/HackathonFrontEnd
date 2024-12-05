<script setup>
import { useProdutosStore } from '@/stores/produtosStore';
import SlideComponent from '../SlideComponent.vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { useRoute } from 'vue-router';

const produtosStore = useProdutosStore();
const route = useRoute();

const props = defineProps({
  tipoCarousel: String, // Tipo do carrossel: 'Bem Avaliado' ou outro
});

// Função para calcular as parcelas
function parcelas(preco) {
  return `em até 10x de ${(preco / 10).toFixed(2)}`;
}

// Função para gerar um array de produtos com estrelas entre 4 e 5
function gerarEstrelas(produtos) {
  return produtos.map(produto => ({
    ...produto,
    estrelas: Math.floor(Math.random() * 2) + 4, // Gera entre 4 e 5 estrelas
  }));
}

// Gerar produtos com estrelas
const produtosComEstrelas = gerarEstrelas(produtosStore.produtos);

// Filtrar produtos baseados no tipo do carrossel
// const produtosFiltrados =
//   props.tipoCarousel == 'Bem Avaliado'
//     ? produtosComEstrelas.filter(produto => produto.estrelas === 5)
//     : produtosComEstrelas;
const produtosFiltrados =
  props.tipoCarousel == 'Bem Avaliado'
    ? [...produtosComEstrelas].reverse() // Faz uma cópia e inverte a ordem
    : produtosComEstrelas;


</script>

<template>
  <Carousel :itemsToShow="5" :transition="500">
    <Slide 
      v-for="(produto, index) in produtosFiltrados" 
      :key="index"
    >
      <SlideComponent
        :id="produto.id"
        :img="produto.foto ? produto.foto[0].file : ''"
        :imagem="produto.imagens"
        :nome="produto.nome"
        :preco="produto.preco"
        :parcelas="parcelas(produto.preco)"
        :estrelas="produto.estrelas"
      />
    </Slide>
    <template #addons>
      <Navigation class="navegacao" />
    </template>
  </Carousel>
</template>

<style scoped>
.carousel {
  padding: 20px 0px 20px 90px !important;
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
</style>
