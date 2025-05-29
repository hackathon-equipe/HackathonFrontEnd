<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useProdutosStore } from './stores/produtosStore';
import { useComentarioStore } from '@/stores/comentarios'
import { useRoute } from 'vue-router';
const route = useRoute(); // Captura a rota atual
const ComentarioStore = useComentarioStore()
const ProdutosStore = useProdutosStore()
onMounted(async () => {
  await ComentarioStore.carregarAvaliacoes();
  await ProdutosStore.carregarProdutos();
  console.log(ProdutosStore.produtos)
});



</script>

<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<style scoped>
.app{
  max-width: 100vw;
  overflow: hidden;
}
</style>
