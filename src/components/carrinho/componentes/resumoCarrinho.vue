<script setup>
import inputAplicarComp from './inputAplicarComp.vue';
import { useCartStore } from '@/stores/carrinhoStore';
import { usePagamentoStore } from '@/stores/pagamentoStore';
const cart = useCartStore()

defineProps({
  superior: String,
  inferior: String,
})

</script>

<template>
  <div class="resumo">
    <span class="resumo-titulo" :class="superior, inferior">Resumo do pedido</span>
    <div class="resumo-info">
      <div class="valores-pedido" :class="superior">
        <div class="valor valor-total"><span>Total</span><span>R$
            {{ cart.valorNoCarrinho.toFixed(2).replace('.', ',') }}</span></div>
        <div class="valor valor-frete item-desativado"><span>Valor da entrega</span><span>+ R$ 'valor'</span></div>
        <div class="valor valor-frete" v-if="cart.freeShip"><span>Valor da entrega</span><span
            class="frete-gratis">Gratuito</span></div>
        <div class="valor valor-desconto" v-if="cart.valorEconomizado > 0"><span>Cupom Aplicado</span><span>- R$ {{
          cart.valorEconomizado.toFixed(2).replace('.',',') }}</span></div>
        <div class="valor valor-final"><span>Total Final</span><span>R$
            {{ Number(cart.valorFinal).toFixed(2).replace('.', ',') }}</span></div>
      </div>
      <inputAplicarComp :class="inferior" funcaoInput="cupom" titulo="Cupom de Desconto" tituloBotao="Inserir Cupom"
        inputPlaceholder="Insira seu cupom">
        <div class="valor valor-cupom" funcaoInput="cupom" v-if="cart.valorEconomizado > 0">Valor do cupom:
          {{ cart.valorCupom }}%</div>
      </inputAplicarComp>
      <inputAplicarComp :class="inferior" titulo="Calcular Frete" tituloBotao="Inserir CEP" inputPlaceholder="Insira seu CEP" />
    </div>
    <router-link :class="inferior" to="/pagamento" @click="usePagamentoStore().realizarCompra(cart.itens, 'carrinho', cart.valorFinal)"
      class="finalizar-compra">Finalizar compra</router-link>
  </div>
</template>
<style scoped>
.valores-pedido div.item-desativado {
  display: none;
}

.disabled{
  display: none !important;
}

.resumo {
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 100px;
}

.resumo-titulo {
  color: #29375b;
  font-weight: 500;
}

.resumo-info div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  border-bottom: 1px solid #a1a1a1;
  font-weight: 500;
}

.resumo button {
  border: 1px solid #29375b;
  border-radius: 50px;
  height: 50px;
  background-color: transparent;
  color: #29375b;
  font-weight: 500;
}

.resumo .finalizar-compra {
  margin-top: 40px;
  cursor: pointer;
  border: 1px solid #29375b;
  border-radius: 50px;
  height: 50px;
  background-color: #29375B;
  font-weight: 500;
  text-decoration: none;
  color: white;
  transition: all .5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.resumo .finalizar-compra:hover {
  transform: translateY(-5px);
  opacity: 0.8;
  background-color: #29375B;
  color: white;
}

.resumo-info .card-inserir-informacao .input-cupom {
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
}

.resumo-info div.valor-cupom {
  opacity: 0.4;
  justify-content: center;
  border-bottom: none;
}

.valor-frete .frete-gratis {
  color: rgb(168, 194, 128);
}

.valor-frete,
.valor-desconto {
  color: #464343;
}

.valores-pedido div.valor {
  border: 1px solid transparent;
}

.valores-pedido {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 10px;
}

@media (max-width:768px) {
  .resumo {
    width: 100%;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
  }

  .resumo-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 0px 20px;
  }

  .resumo-info div {
    width: 100%;
  }

  .finalizar-compra {
    padding: 0px 40px;
  }
  div.valores-pedido{
    border: none;
  }
}
</style>