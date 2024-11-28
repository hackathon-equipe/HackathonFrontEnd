<script setup>
import { useProdutosStore } from '@/stores/produtosStore';
import SlideComponent from '../SlideComponent.vue';

const produtosStore = useProdutosStore()
console.log(produtosStore.produtos)

function parcelas(preco) {
    return `em até 10x de ${preco}`
}
</script>

<template>
    <div class="limitador">
        <div class="container">
            <div v-for="(text, index) in produtosStore.produtos" :key="index">
                <SlideComponent :id="text.id" :img="text.foto ? text.foto[0].file : ''" :imagem="text.imagens"
                    :nome="text.nome" :preco="text.preco" :parcelas="parcelas(text.preco)" :estrelas="3" />
            </div>
        </div>
    </div>
</template>

<style scoped>

.limitador{
    display: flex;
    overflow: hidden;
    overflow-x: scroll;
    margin: 10px 20px 40px;
}
.container {
    justify-content: left;
    align-items: start;
    gap: 35px;
    left: 0px;
    display: flex;
    width: 100%;
    gap: 40px;
    margin: 10px 0px;
    scrollbar-width: thin;
}

::-webkit-scrollbar {
    width: 6px !important
}

::-webkit-scrollbar-track {
    background: #f3f3f3;
}

::-webkit-scrollbar-thumb {
    background: #2c3e50;
    border-radius: 3rem;
}
</style>