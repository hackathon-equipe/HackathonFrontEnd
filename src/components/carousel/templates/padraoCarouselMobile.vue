<script setup>
import { useProdutosStore } from '@/stores/produtosStore';

const produtosStore = useProdutosStore()
console.log(produtosStore.produtos)
</script>

<template>
    <div class="lista-produtos">
        <div v-for="(text, index) in produtosStore.produtos" :key="index">
            <SlideComponent
            :id="text.id"
            :img="text.foto ? text.foto[0].file : ''"
            :imagem="text.imagens"
            :nome="text.nome"
            :preco="text.preco"
            :parcelas="parcelas(text.preco)"
            :estrelas="3" 
            />
        </div>
    </div>
</template>
<style scoped>
    .lista-produtos{
        display: flex;
        width: 100%;
        overflow: hidden;
        overflow-x: scroll;
    }
</style>