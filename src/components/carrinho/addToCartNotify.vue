<script setup>
import { useCartStore } from '@/stores/carrinhoStore';
import { XCloseIcon, checkCircle } from '../icons';
defineProps({
  nome: String,
  preco: Number,
  image: String,
  closeFunction: Function,
})

</script>

<template>
    <div class="background-blur">
        <div class="addCartMsg">
            <div class="CartMsg-tittle">
              <div><checkCircle/> Adicionou ao carrinho</div>
              <div><XCloseIcon class="button" @click="closeFunction()"/></div>
            </div>
            <div class="CartMsg-desc">
              <div class="CartMsg-desc-img"><img :src="image" alt=""></div>
              <div class="CartMsg-desc-prod">
                <span>{{ nome }}</span>
                <span class="prod-type"> Tipo </span>
                <span>R$ {{ preco.toFixed(2).replace('.',',') }}</span>
              </div>
            </div>
            <div class="CartMsg-seeCart"><router-link to="/carrinho" class="CartMsg-button">Ver Carrinho({{useCartStore().itensInCart}})</router-link></div>
        </div>
    </div>
</template>

<style scoped>
.background-blur{
    top: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.35);
    z-index: 99999999999;
}
.addCartMsg{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    padding: 30px;
    top: 0px;
    right: 0px;
    width: 350px;
    height: 300px;
    background-color: white;
    z-index: 9999999999999999;
}
.CartMsg-tittle{
    display: flex;
    justify-content: space-between;
}
.CartMsg-tittle div{
    display: flex;
    align-items: center;
    gap: 5px;
}
.CartMsg-tittle .button{
    cursor: pointer;
}
.CartMsg-desc{
    display: flex;
}
.CartMsg-desc-prod{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.addCartMsg img{
    width: 110px;
    height: 120px;
}
.CartMsg-button{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
    font-weight: 500;
    width: 100%;
    background-color: #29375b;
    border-radius: 3rem;
}
.CartMsg-seeCart{
    display: flex;
    width: 300px;
    height: 50px;
}
</style>