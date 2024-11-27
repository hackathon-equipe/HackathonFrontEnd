<script setup>
import AsideFiltro from "@/components/filtros/AsideFiltro.vue";
import ProdutosHeader from "@/components/header/ProdutosHeader.vue";
import PadraoProdutos from "@/components/produtos/PadraoProdutos.vue";
import AdminProdutos from "@/components/adminstradores/produtos/AdminProdutos.vue";
import AdminProdutosHeader from '@/components/adminstradores/header/AdminProdutosHeader.vue'
</script>
<template>
  <AdminProdutosHeader />
  <main>
    <AsideFiltro />
    <AdminProdutos />
  </main>
</template>
<style scoped>
main {
  display: flex;
  justify-content: center;
  width: 100vw;
}
</style>
