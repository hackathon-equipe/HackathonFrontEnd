<script setup>
import { computed } from "vue";
import SlideComponent from "@/components/carousel/SlideComponent.vue";
import { useFiltroStore } from "@/stores/filtros";
import DefaultPaginacao from "@/components/paginacao/DefaultPaginacao.vue";
const FiltrosStore = useFiltroStore();
const isTwoProducts = computed(() => {
  return FiltrosStore.filtro.length === 2;
});
</script>
<template>
  <div class="produtos" :class="{ 'two-products': isTwoProducts }">
    <div class="produto" v-for="(text, index) in FiltrosStore.filtro" :key="index">
      <SlideComponent
        :img="text.imageUrl"
        :imagem="text.imagens"
        :nome="text.nome"
        :preco="text.preco"
        :parcelas="text.parcelas"
      />
    </div>
    <DefaultPaginacao />
  </div>
</template>
<style scoped>
.produtos {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  padding: 0px 7vw 0px 50px;
  width: 71vw;
  margin-bottom: 100px;
}

.produto {
  width: 20vw;
  padding: 5px;
}

.produtos.two-products {
  justify-content: flex-start; /* Ou outro valor desejado */
}
</style>
