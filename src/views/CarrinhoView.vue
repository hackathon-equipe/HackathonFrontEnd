<script setup>
import { truckIcon, downArrowIcon, leftArrowIcon } from "@/components/icons";
import itemCarrinho from "@/components/carrinho/itemCarrinho.vue";
import PadraoPropagandas from "@/components/header/propagandas/PadraoPropagandas.vue";
import PadraoCaminho from "@/components/header/caminho/PadraoCaminho.vue";
import { useCartStore } from "@/stores/carrinhoStore";
import { computed, ref } from "vue";
const cart = useCartStore();
const valueInCart = computed(() => {
  return cart.valueInCart()
})
const visibleRemoveCart = ref(false)
function removeMsg(){
  visibleRemoveCart.value = true;
  setTimeout(() => {visibleRemoveCart.value = false;}, 2500);
}
</script>

<template>
  <PadraoPropagandas />
  <PadraoCaminho />
  <div class="container" v-if="cart.itens.length > 0">
    <div class="itens-area">
      <span class="itens-info">Todos os itens ({{ cart.itens.length }})</span>
      <p class="itens-info">
        <div v-if="valueInCart < 3000"><truckIcon /> Faltam <span>R$ {{ (3000 - valueInCart).toFixed(2).replace('.',',') }}</span> para voce ganhar frete gratis</div>
        <div v-else><truckIcon /> Você já concluiu os requisitos para o frete gratis</div>
      </p>
      <div v-for="(item, index) in cart.itens" :key="index">
        <itemCarrinho
          :img="item.imageUrl"
          :nome="item.nome"
          :preco="item.preco"
          :parcelas="item.parcelas"
          :id="item.id"
          :quantidade="item.quantidade"
          :removeMsg="removeMsg"
        />
      </div>
    </div>
    <div class="resumo">
      <span class="resumo-tittle">Resumo do pedido</span>
      <div class="resumo-info">
        <div><span>Total</span><span>R$ {{valueInCart.toFixed(2).replace('.',',')}}</span></div>
        <div><span>Cupom de desconto</span><downArrowIcon /></div>
        <div><span>Consultar frete</span><downArrowIcon /></div>
      </div>
      <button>Finalizar compra</button>
    </div>
  </div>
  <div class="not-itens" v-else>
    <div class="loading-animation">
      <img src="../assets/images/LoadGif/LoadingAnimation.gif" alt="">
    </div>
    <h1>Não há produtos em seu carrinho</h1>
    <router-link class="not-itens-button" to="/produtos" >Adicionar produtos <leftArrowIcon/> </router-link>
  </div>
  <div v-if="visibleRemoveCart" class="removeCard">
    <div>
      Produto removido do carrinho
    </div>
  </div>
</template>

<style scoped>
.loading-animation img{
  width: 250px;
  height: auto;
}
.loading-animation{
  height: 100px;
  overflow: hidden;
}
.not-itens-button{
  font-weight: 600;
  color: white;
  background-color: #29375B;
  border-radius: 3rem;
  text-decoration: none;
  padding: 8px 25px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.removeCard{
  position: fixed;
  bottom: 30px;
  display: flex;
  justify-content: center;
  width: 100vw;
}
.removeCard div{
  padding: 15px 30px;
  border-radius: 5px;
  color: white;
  background-color: #383838cc;
  font-weight: 500;
}
.not-itens{
  gap: 20px;
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
}
.not-itens h1{
  font-weight: 500;
}
.active {
  padding-left: 5px;
  font-weight: 600;
}
.container {
  padding: 50px 80px;
  display: flex;
  justify-content: center;
}
.itens {
  margin-top: 55px;
}
.itens-area {
  margin-right: 150px;
}
.itens-info div{
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 25px;
}
.itens-info span {
  font-weight: 600;
}
.resumo {
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 100px;
}
.resumo-tittle {
  color: #29375b;
  font-weight: 500;
}
.resumo-info div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 55px;
  border-bottom: 1px solid #a1a1a1;
  padding-right: 15px;
  font-weight: 500;
}
.resumo button {
  border: 1px solid #29375b;
  border-radius: 50px;
  height: 50px;
  background-color: transparent;
  color: #29375b;
  font-weight: 500;
  margin-top: 40px;
}
</style>
