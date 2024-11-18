
<script setup>
import { itensNoCarrinho, resumoCarrinho, semItensNoCarrinho } from './componentes';
import { useCartStore } from '@/stores/carrinhoStore';
const cart = useCartStore()
</script>

<template>
  <div class="container" v-if="cart.itensInCart > 0"> 
    <itensNoCarrinho />
    <resumoCarrinho/>
  </div>
  <semItensNoCarrinho v-else />
</template>

<style scoped>
.container{
  display: flex;
  justify-content: space-around;
  gap: 50px;
  margin-bottom: 150px;
}
</style>