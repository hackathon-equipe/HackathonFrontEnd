<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
import { useProdutosStore } from "@/stores/produtosStore";
import ProdutoComponent from "@/components/produtos/ProdutoComponent.vue";
const ProdutosStore = useProdutosStore();
function parcelas (preco){
  return `em até 10x de ${preco}`
}
</script>
<template>
  <div v-for="(text, index) in ProdutosStore.produtos" :key="index">
    <ProdutoComponent
      v-if="text.id == route.params.id"
        :id="text.id"
        :img="text.foto ? text.foto[0].file : ''"
        :nome="text.nome"
        :preco="text.preco"
        :parcelas="parcelas(text.preco)"
        :estrelas="3"
    />
  </div>
</template>
<style scoped></style>
