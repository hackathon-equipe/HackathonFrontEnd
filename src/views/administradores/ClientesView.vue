<script setup>
import PadraoCaminho from "@/components/adminstradores/header/caminho/PadraoCaminho.vue"
import { useClientesStore } from "@/stores/clientes";
import ClientesAdm from "@/components/adminstradores/clientes/ClientesAdm.vue";
import OrdenarFiltro from "@/components/filtros/OrdenarFiltro.vue";
const ClientesStore = useClientesStore()


</script>
<template>
    <div class="orcamentos-header">
      <PadraoCaminho />
      <h1 class="titulo-orcamentos">Clientes</h1>
    </div>
    <OrdenarFiltro/>
    <div class="orcamentos">
        <ClientesAdm  v-for="(text, index) in ClientesStore.clientes" :key="index"
          :index="index+1"
          :cliente="text.nome"
          :email="text.email"
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
