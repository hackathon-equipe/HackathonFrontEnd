<script setup>
import PadraoPropagandas from './propagandas/PadraoPropagandas.vue'
import PadraoCaminho from './caminho/PadraoCaminho.vue'
import OrdenarFiltro from '../filtros/OrdenarFiltro.vue'
</script>
<template>
    <div class="produtos-header">
        <PadraoPropagandas />
        <PadraoCaminho />
        <h1 class="titulo-produtos">Placas Solares</h1>
    </div>
    <OrdenarFiltro />
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
