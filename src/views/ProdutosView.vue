<script setup>
import AsideFiltro from '@/components/filtros/AsideFiltro.vue'
import ProdutosHeader from '@/components/header/ProdutosHeader.vue'
import PadraoProdutos from '@/components/produtos/PadraoProdutos.vue'


</script>
<template>
  <div>
    <ProdutosHeader />
    <main>
      <AsideFiltro />
      <PadraoProdutos />
    </main>
  </div>
</template>
<style scoped>
main {
  display: flex;
  justify-content: center;
  width: 100vw;
}
@media (max-width: 768px) {
  main{
    flex-direction: column;
  }
}
</style>
