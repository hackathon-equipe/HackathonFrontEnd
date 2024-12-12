<script setup>
import PadraoCaminho from "@/components/adminstradores/header/caminho/PadraoCaminho.vue"
import { usePedidoStore } from "@/stores/pedidosStore";
import PedidosAdm from "@/components/adminstradores/pedidos/PedidosAdm.vue";
import OrdenarFiltro from "@/components/filtros/OrdenarFiltro.vue";
const pedidoStore = usePedidoStore()


</script>
<template>
    <div class="pedidos-header">
      <PadraoCaminho />
      <h1 class="titulo-pedidos">Pedidos</h1>
    </div>
    <OrdenarFiltro/>
    <div class="pedidos">
        <PedidosAdm  v-for="(text, index) in pedidoStore.pedidos" :key="index"
          :index="index+1"
          :cliente="text.cliente"
          :total= "text.total"
          :status= "text.status"
          :data= "text.data"
   
        />
      </div>
  </template>
  <style scoped>
  .pedidos{
    display: grid;
    padding:50px calc(9vw - 5px);
  }
  .titulo-pedidos {
    font-size: 24px;
    padding: 50px;
    font-weight: 600;
  }
 
  .pedidos-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  </style>
