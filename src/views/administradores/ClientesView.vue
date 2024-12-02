<script setup>
import PadraoCaminho from "@/components/adminstradores/header/caminho/PadraoCaminho.vue"
import { useOrcamentoStore } from "@/stores/orcamentoStore";
import OrcamentosAdm from "@/components/adminstradores/orcamentos/OrcamentosAdm.vue";
import OrdenarFiltro from "@/components/filtros/OrdenarFiltro.vue";
const OrcamentoStore = useOrcamentoStore()


</script>
<template>
    <div class="orcamentos-header">
      <PadraoCaminho />
      <h1 class="titulo-orcamentos">Orçamentos</h1>
    </div>
    <OrdenarFiltro/>
    <div class="orcamentos">
        <OrcamentosAdm  v-for="(text, index) in OrcamentoStore.clientes" :key="index"
          :index="index+1"
          :cliente="text.nome"
          :data="text.data"
        />
      </div>
  </template>
  <style scoped>
  .orcamentos{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding:50px calc(9vw - 5px);
  }
  .titulo-orcamentos {
    font-size: 24px;
    padding: 50px;
    font-weight: 600;
  }
 
  .orcamentos-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  </style>
