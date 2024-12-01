<script setup>
import { computed } from "vue";
import SlideComponent from "./ProdutoAdm.vue";
import { useFiltroStore } from "@/stores/filtros";
import DefaultPaginacao from "@/components/paginacao/DefaultPaginacao.vue";
import { useProdutosStore } from "@/stores/produtosStore";
const FiltrosStore = useFiltroStore();
const ProdutosStore = useProdutosStore();
const isTwoProducts = computed(() => {
  return FiltrosStore.filtro.length === 2;
});
function parcelas (preco){
  return `em até 10x de ${preco}`
}
</script>
<template>
  <div class="produtos" :class="{ 'two-products': isTwoProducts }">
    <div class="produto" v-for="(text, index) in FiltrosStore.filtro" :key="index">
      <SlideComponent
        :id="text.id"
        :img="text.foto ? text.foto[0].file : ''"
        :imagem="text.imagens"
        :nome="text.nome"
        :preco="text.preco"
        :parcelas="parcelas(text.preco)"
        :estrelas="3"
        :quantidade="text.quantidade"
      />
    </div>
    <DefaultPaginacao />
  </div>
</template>
<style scoped>
.produtos {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px 7vw 0px 50px;
  width: 71vw;
  margin-bottom: 100px;
}

.produto {
  width: 100%;
  padding: 5px;
}

.produtos.two-products {
  justify-content: flex-start; /* Ou outro valor desejado */
}
</style>
