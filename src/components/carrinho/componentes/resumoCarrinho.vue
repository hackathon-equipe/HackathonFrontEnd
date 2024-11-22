<script setup>
  import inputAplicarComp from './inputAplicarComp.vue';
  import { useCartStore } from '@/stores/carrinhoStore';
  import { ref, reactive } from 'vue';
 import axios from 'axios'; // Importando Axios
  const cart = useCartStore()

 const orderData = reactive({ "title": "Compra na loja oorun", "quantity": cart.itensInCart, "price": cart.valorNoCarrinho});
 
 // MercadoPago initialization
 const mp = new MercadoPago('APP_USR-b2ad37f2-01f8-4ed9-b5be-7ddb974c6eb0', { locale: 'pt-BR' });
 
 // Reactive state to hold preference ID
 const preferenceId = ref(null);
 
 // Função para criar o botão de checkout após obter o ID da preferência
 const createCheckoutButton = (preferenceId) => {
   const bricksBuilder = mp.bricks();
 
   const renderComponent = async () => {
     // Remover qualquer botão anterior, se existir (gerenciado pelo Vue agora)
     // Criar o botão de checkout do Mercado Pago no 'wallet_container'
     await bricksBuilder.create('wallet', 'wallet_container', {
       initialization: {
         preferenceId: preferenceId,
       },
     });
   };
 
   renderComponent();
 };
 
 // Função para manipular o clique e buscar os dados de preferência
 const handleCheckoutClick = async () => {
   try {
     // Enviar uma requisição para o backend para criar a preferência
     const response = await axios.post('https://backend-api-mercadopago.onrender.com/create_preference', orderData, {
       headers: {
         'Content-Type': 'application/json',
       },
     });
 
     // Obter o ID da preferência da resposta
     const preference = response.data;
 
     // Armazenar o ID da preferência e criar o botão de checkout
     preferenceId.value = preference.id;
     createCheckoutButton(preference.id);
   } catch (error) {
     // Tratar erros da requisição
     alert('Erro: Não foi possível criar a preferência de pagamento.');
     console.error(error);
   }
 };
</script>

<template>
  <div class="resumo">
    <span class="resumo-titulo">Resumo do pedido</span>
    <div class="resumo-info">
      <div class="valores-pedido">
        <div class="valor valor-total"><span>Total</span><span>R$ {{cart.valorNoCarrinho.toFixed(2).replace('.',',')}}</span></div>
        <div class="valor valor-frete item-desativado"><span>Valor da entrega</span><span>+ R$ 'valor'</span></div>
        <div class="valor valor-frete" v-if="cart.freeShip"><span>Valor da entrega</span><span class="frete-gratis">Gratuito</span></div>
        <div class="valor valor-desconto" v-if="cart.valorEconomizado > 0"><span>Cupom Aplicado</span><span>- R$ {{ cart.valorEconomizado.toFixed(2).replace('.',',') }}</span></div>
        <div class="valor valor-final"><span>Total Final</span><span>R$ {{Number(cart.valorFinal).toFixed(2).replace('.',',')}}</span></div>
      </div>
      <inputAplicarComp funcaoInput="cupom" titulo="Aplicar Cupom de Desconto" tituloBotao="Inserir Cupom" inputPlaceholder="Insira seu cupom">
        <div class="valor valor-cupom" funcaoInput="cupom" v-if="cart.valorEconomizado > 0">Valor do cupom: {{cart.valorCupom}}%</div>
      </inputAplicarComp>
      <inputAplicarComp titulo="Calcular Frete" tituloBotao="Inserir CEP" inputPlaceholder="Insira seu CEP" />
    </div>
    <button @click="handleCheckoutClick" class="finalizar-compra">Finalizar compra</button>
    <div id="wallet_container"></div>
  </div>
</template>
<style scoped>
.valores-pedido div.item-desativado{
  display: none;
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
.resumo-info div.valor-cupom{
  opacity: 0.4;
  justify-content: center;
  border-bottom: none;
}
.valor-frete .frete-gratis{
  color: rgb(168, 194, 128);
}
.valor-frete,.valor-desconto {
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
</style>