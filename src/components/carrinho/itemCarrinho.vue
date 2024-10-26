<script setup>
import { computed, defineProps, ref } from 'vue'
import {  trashIcon, addIcon , minusIcon } from '@/components/icons';
import { useCartStore } from '@/stores/carrinhoStore';
import { useProdutosStore } from '@/stores/produtosStore';
const props = defineProps({
  img: String,
  nome: String,
  preco: Number,
  id: Number,
  quantidade: Number,
  removeMsg: Function,
})
const imgSrc = computed(() => {
  return new URL(`../../assets/images/${props.img}.png`, import.meta.url).href
});

const produto = useProdutosStore().getProduct(props.id);
const carrinho = useCartStore();

function addToCart(){
    carrinho.addItem(produto);
}

function removeFromCart(){
    carrinho.removeItem(props.id)
}

</script>

<template>
    <div class="itens">
        <div class="item">
            <img class="item-img" :src="imgSrc" alt="">
            <div class="item-info">
                <span class="item-nome">{{props.nome}}</span>
                <span class="item-valor">R$ {{props.preco.toFixed(2).replace('.',',')}}</span>
                <div class="item-quantidade"><trashIcon v-if="props.quantidade < 2" @click="removeFromCart(); removeMsg();" class="icon"/><minusIcon v-else class="icon" @click="removeFromCart"/> {{ props.quantidade }} <addIcon @click="addToCart" class="icon"/></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.item{
    width: 700px;
    border-bottom: 1px solid #A1A1A1;
    display: flex;
    gap: 30px;
    padding-bottom: 10px;
    margin-bottom: 20px;
}
.item-img{
    height: 200px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.item-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
}
.item-nome{
    font-weight: 500;
}
.item-valor{
    font-size: 20px;
    font-weight: 600;
}
.item-quantidade{
    user-select: none;
    display: flex;
    align-items: center;
    gap: 10px;
}
.item-quantidade .icon{
    cursor: pointer;
}
</style>