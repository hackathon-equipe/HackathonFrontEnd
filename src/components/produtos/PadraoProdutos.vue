<script setup>
import SlideComponent from '@/components/carousel/SlideComponent.vue'
import { useFiltroStore } from "@/stores/filtros";
const FiltrosStore = useFiltroStore();
</script>
<template>
    <div class="produtos">
        <div class="produto" v-for="(text, index) in FiltrosStore.filtro" :key="index">
            <SlideComponent :img="text.imageUrl" :nome="text.nome" :preco="text.preco" :parcelas="text.parcelas" />
        </div>
    </div>
</template>
<style scoped>
.produtos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0px 7vw 0px 50px;
    width: 75vw;
}

.produto {
    width: 20vw;
    padding: 20px;
}
</style>
