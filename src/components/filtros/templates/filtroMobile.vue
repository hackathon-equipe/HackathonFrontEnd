<script setup>
import { useCategoriaFiltroStore } from "@/stores/categoriaFiltros";
import ItensSelect from "../ItensSelect.vue";
import InputPreco from "../InputPreco.vue";
const CategoriaFiltrosStore = useCategoriaFiltroStore();
</script>

<template>
    <div>
        Filtrar
    </div>
    <div class="filtros">
        <span class="filtro-titulo">Filtros </span>
        <InputPreco :filtroPreco="CategoriaFiltrosStore.filtroPreco" />
        <ItensSelect :filtroLista="CategoriaFiltrosStore.bigArray" />
        <div>
            <button>Mostrar resultados</button>
            <button>Limpar filtros</button>
        </div>
    </div>
</template>
<style scoped>
.filtros {
    background: white;
    width: 100%;
    margin-top: 0px;
    padding: 0px;
    height: 100%;
    overflow: scrollY;
}

.filtro-titulo {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 20px 0px;
    text-align: center;
    border: 1px solid #d9d9d9;
    border-radius: 40px 40px 0px 0px;
}
</style>
