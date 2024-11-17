<script setup>
import { itemCarrinho } from ".";
import { truckIcon } from "@/components/icons";
import { useCartStore } from "@/stores/carrinhoStore";

const cart = useCartStore()

</script>

<template>
  <div class="itens-area">
    <span class="itens-info">Todos os itens ({{ cart.itens.length }})</span>
    <p class="itens-info">
      <div v-if="cart.freeShip"><truckIcon /> Você já concluiu os requisitos para o frete gratis</div>
      <div v-else><truckIcon /> Faltam <span>R$ {{(950 - cart.valorFinal).toFixed(2).replace('.',',')}}</span> para voce ganhar frete gratis</div>
    </p>
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
  align-items: center;
  gap: 8px;
  margin-bottom: 25px;
}

.itens-info span {
  font-weight: 600;
}
</style>