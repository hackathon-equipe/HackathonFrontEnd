<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
import { useProdutosStore } from '@/stores/produtosStore'
import ProdutoComponent from '@/components/produtos/ProdutoComponent.vue'
import PadraoPropagandas from '@/components/header/propagandas/PadraoPropagandas.vue'
import PadraoCaminho from '@/components/header/caminho/PadraoCaminho.vue'
const ProdutosStore = useProdutosStore()
</script>
<template>
  <PadraoPropagandas/>
  <PadraoCaminho/>
  <div v-for="(text, index) in ProdutosStore.produtos" :key="index">
    <ProdutoComponent
      v-if="text.imageUrl == route.params.id"
      :img="text.imageUrl"
      :nome="text.nome"
      :preco="text.preco"
      :parcelas="text.parcelas"
    />
  </div>
</template>
<style scoped></style>
