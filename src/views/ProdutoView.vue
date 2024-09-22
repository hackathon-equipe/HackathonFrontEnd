<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
import { useProdutosStore } from '@/stores/ProdutosStore'
import SlideComponent from '@/components/carousel/SlideComponent.vue'
const ProdutosStore = useProdutosStore()
</script>
<template>
  <div v-for="(text, index) in ProdutosStore.produtos" :key="index">
    <SlideComponent
      v-if="text.imageUrl == route.params.id"
      :img="text.imageUrl"
      :nome="text.nome"
      :preco="text.preco"
      :parcelas="text.parcelas"
    />
  </div>
</template>
<style scoped></style>
