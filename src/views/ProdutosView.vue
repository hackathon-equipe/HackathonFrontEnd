<script setup>
import AsideFiltro from '@/components/filtros/AsideFiltro.vue'
import ProdutosHeader from '@/components/header/ProdutosHeader.vue'
import PadraoProdutos from '@/components/produtos/PadraoProdutos.vue'
import { useProdutosStore } from '@/stores/produtosStore'
import { ref, onMounted } from 'vue'
const ProdutosStore = useProdutosStore()
const produtos = ref([])

onMounted(async () => {
  await ProdutosStore.carregarProdutos()
  console.log(ProdutosStore.produtos)
  produtos.value = ProdutosStore.produtos;
});



</script>
<template>
  <Transition name="fade">
  <div v-if="produtos.length == 0" class="carregamento">
    <img src="/src/assets/images/LoadGif/LoadingAnimation.gif" alt="Carregamento" />
  </div>
  <div v-else>
    <ProdutosHeader />
    <main>
      <AsideFiltro />
      <PadraoProdutos />
    </main>
  </div>
</Transition>
</template>
<style scoped>
main {
  display: flex;
  justify-content: center;
  width: 100vw;
}
.carregamento {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carregamento img{
  width: 15%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
