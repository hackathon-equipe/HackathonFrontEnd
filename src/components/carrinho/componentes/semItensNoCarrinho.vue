<script setup>
import { leftArrowIcon } from '@/components/icons';
</script>

<template>
    <div class="sem-itens">
        <div class="animacao-carregamento">
            <img src="@/assets/images/LoadGif/LoadingAnimation.gif" alt="">
        </div>
        <h1>Não há produtos em seu carrinho</h1>
        <router-link class="sem-itens-botao" to="/produtos/all">
            Adicionar produtos
            <leftArrowIcon  class="teste" />
        </router-link>
    </div>
</template>

<style scoped>

.animacao-carregamento img {
    width: 250px;
    height: auto;
}

.animacao-carregamento {
    height: 100px;
    overflow: hidden;
}

.sem-itens {
    gap: 20px;
    width: 100vw;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.sem-itens h1 {
    font-weight: 500;
}

.sem-itens-botao {
    font-weight: 600;
    color: white;
    background-color: #29375B;
    border-radius: 3rem;
    text-decoration: none;
    padding: 8px 25px;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: 0.5s;
}

.sem-itens-botao:hover{
    transform: translateY(-10px);}
</style>