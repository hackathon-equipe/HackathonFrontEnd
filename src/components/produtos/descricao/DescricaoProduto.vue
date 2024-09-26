<script setup>
 defineProps({
  VerMais: String
})
</script>
<template>
    <h1 class="titulo-descricao">Descrição do Produto</h1>
    <div class="descricao"> 
      <span v-for="(value, key) of VerMais" :key="key">{{ key }}: <strong>{{ value }}</strong></span>
      <span>DOWNLOAD CENTER</span>
     </div>
</template>
<style scoped>
.titulo-descricao{
    font-size: 20px;
    padding: 100px;
    text-align: center;
    font-weight: 610;
  }
  .descricao span{
    display: block;
    margin-left: calc(15vw - 30px);
    font-size: 16px;
  }
</style>
