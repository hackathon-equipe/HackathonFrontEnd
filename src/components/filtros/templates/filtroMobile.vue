<script setup>
import { useCategoriaFiltroStore } from "@/stores/categoriaFiltros";
import { ref } from "vue";
import ItensSelect from "../ItensSelect.vue";
import InputPreco from "../InputPreco.vue";
import filterIcon from "@/components/icons/filterIcon.vue";
const CategoriaFiltrosStore = useCategoriaFiltroStore();

const showFilter = ref(false)
</script>

<template>
    <div class="active-filtro" @click="showFilter = !showFilter">
        <filterIcon/>Filtrar
    </div>
    <div class="filtros" v-if="showFilter">
        <span class="filtro-titulo" @click="showFilter = !showFilter">Filtros </span>
        <InputPreco :filtroPreco="CategoriaFiltrosStore.filtroPreco" />
        <ItensSelect :filtroLista="CategoriaFiltrosStore.bigArray" />
        <div class="filter-buttons">
            <button class="show-results" @click="showFilter = !showFilter">Mostrar resultados</button>
            <button class="clear-results">Limpar filtros</button>
        </div>
    </div>
</template>
<style scoped>
.active-filtro{
    display: flex;
    align-items: center;
    margin: 0px 0px 40px 50px;
    gap: 5px;
}
.filtros {
    z-index: 99;
    position: fixed;
    top: 65px;
    background: white;
    width: 100%;
    margin-top: 0px;
    padding: 0px;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    padding-bottom: 40px;
}

.filtro-titulo {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 20px 0px;
    text-align: center;
    border: 1px solid #d9d9d9;
}

.filter-buttons{
    margin: 50px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.filter-buttons .show-results{
    background-color: #29375B;
    color: white;
    border-radius: 3rem;
    height: 55px;
}

.filter-buttons button{
    width: 300px;
    padding: 10px 20px;
    border: none;
    background-color: transparent;
}
</style>
