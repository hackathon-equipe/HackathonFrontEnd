
<script setup>
import PadraoPropagandas from "@/components/header/propagandas/PadraoPropagandas.vue";
import PadraoCaminho from "@/components/header/caminho/PadraoCaminho.vue";
import { itensNoCarrinho, resumoCarrinho, semItensNoCarrinho } from './componentes';
import { useCartStore } from '@/stores/carrinhoStore';
import { useScreenSize } from "@/composables/useScreenSize";
const cart = useCartStore()
</script>

<template>
  <PadraoPropagandas />
  <PadraoCaminho />
  <div class="container" v-if="cart.itensInCart > 0 && useScreenSize().isMobile"> 
    <resumoCarrinho inferior="disabled"/>
    <itensNoCarrinho />
    <resumoCarrinho superior="disabled"/>
  </div>
  <div class="container" v-else-if="cart.itensInCart > 0"> 
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
@media (max-width: 768px) {
  .container{
    flex-direction: column;
    gap: 20px;
  }
}
</style>