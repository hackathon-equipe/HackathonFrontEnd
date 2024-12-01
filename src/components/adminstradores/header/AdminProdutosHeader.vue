<script setup>
import PadraoCaminho from "./caminho/PadraoCaminho.vue";
import AddProduto from "../filtros/AddProduto.vue";

</script>
<template>
  <div class="produtos-header">
    <PadraoCaminho />
    <h1 class="titulo-produtos">Produtos</h1>
  </div>
  <AddProduto />
</template>
<style scoped>
.titulo-produtos {
  font-size: 24px;
  padding: 50px;
  font-weight: 600;
}

.produtos-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
