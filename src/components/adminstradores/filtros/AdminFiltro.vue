<script setup>
import { useCategoriaFiltroStore } from "@/stores/categoriaFiltros";
import ItensSelect from "./ItensSelect.vue";
import InputPreco from "./InputPreco.vue";
const CategoriaFiltrosStore = useCategoriaFiltroStore();
</script>

<template>
  <div class="filtros">
    <span class="subtitulo filtro-titulo">Filtros </span>
    <ItensSelect :filtroLista="CategoriaFiltrosStore.admProdutos" />
  </div>
</template>
<style scoped>
.filtros {
  display: flex;
  flex-direction: column;
  width: 25vw;
  margin-top: 20px;
  padding-left: 9vw;
}

.filtro-titulo {
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 5px;
}

.subtitulo {
  font-weight: 600;
  padding: 10px 0px;
}
</style>
