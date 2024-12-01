<script setup>
import { useCategoriaFiltroStore } from "@/stores/categoriaFiltros";
import ItensSelect from "./ItensSelect.vue";
import InputPreco from "./InputPreco.vue";
const CategoriaFiltrosStore = useCategoriaFiltroStore();
</script>

<template>
  <div class="filtros">
    <span class="filtro-titulo">Filtros </span>
    <InputPreco :filtroPreco="CategoriaFiltrosStore.filtroPreco" />
    <ItensSelect :filtroLista="CategoriaFiltrosStore.bigArray" />
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
  font-weight: 600;
  padding: 10px 0px;
}

@media (max-width: 768px) {
  .filtros {
    width: 100%;
    margin-top: 0px;
    padding: 0px;
  }
  .filtro-titulo {
    padding: 20px 0px;
    text-align: center;
    border: 1px solid #d9d9d9;
    border-radius: 40px 40px 0px 0px;
  }
}
</style>
