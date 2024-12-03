<script setup>
import { itemCarrinho } from ".";
import { truckIcon } from "@/components/icons";
import { useCartStore } from "@/stores/carrinhoStore";

const cart = useCartStore()

</script>

<template>
  <div class="itens-area">
    <p class="itens-info">Todos os itens ({{ cart.itens.length }})</p>
    <span class="itens-info">
      <div v-if="cart.freeShip" class="frete"><truckIcon /><p>Você já concluiu os requisitos para o frete grátis</p></div>
      <div v-else class="frete"><truckIcon /><p>Faltam <b class="valor-frete">R${{950 - cart.valorFinal}} </b> para você ganhar frete grátis</p></div>
    </span>
    <div v-for="(item, index) in cart.itens" :key="index">
      <itemCarrinho :img="item.imageUrl" :nome="item.nome" :preco="item.preco" :parcelas="item.parcelas" :id="item.id"
        :quantidade="item.quantidade" :removeMsg="removeMsg" />
    </div>
  </div>
</template>

<style scoped>
.itens {
  margin-top: 55px;
}

.itens-area {
  display: flex;
  flex-direction: column;
  gap:0px;
  margin: 75px 0px 0px 0px;
}

.itens-info {
  margin-bottom: 10px;
}

.itens-info div {
  display: flex;
  gap: 8px;
  margin-bottom: 25px;
}



@media (max-width: 768px) {
  .itens-area{
    margin: 0px 20px;
  }
  .itens-info{
    font-size: 14px;
  }
  .frete{
    display: flex;
    align-items: center
  }
  .frete p{
    font-size: 14px;
    text-wrap: nowrap;
    display: flex;
    align-items: center;
  }
  .valor-frete{
    font-size: 14px;
    font-weight: 600;
    padding: 0px 5px;
  }
}
@media (max-width: 380px) {
  .frete p{
    font-size: 12px;
  }
  .valor-frete{
    font-size: 12px;
  }
}
</style>