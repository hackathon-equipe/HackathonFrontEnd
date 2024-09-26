<template>
    <div class="itens">
        <div class="item">
            <img class="item-img" :src="imgSrc" alt="">
            <div class="item-info">
                <span class="item-nome">{{props.nome}}</span>
                <span class="item-valor">{{props.preco}}</span>
                <div class="item-quantidade"><trashIcon/> 1 <addIcon/></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import {  trashIcon, addIcon } from '@/components/icons';
const props = defineProps({
  img: String,
  nome: String,
  preco: String,
})
console.log(props)
const imgSrc = computed(() => {
  return new URL(`../../assets/images/${props.img}.png`, import.meta.url).href
})
</script>

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
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>