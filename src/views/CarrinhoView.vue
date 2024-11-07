<script setup>
import { truckIcon, downArrowIcon, leftArrowIcon, upArrowIcon } from "@/components/icons";
import itemCarrinho from "@/components/carrinho/itemCarrinho.vue";
import PadraoPropagandas from "@/components/header/propagandas/PadraoPropagandas.vue";
import PadraoCaminho from "@/components/header/caminho/PadraoCaminho.vue";
import { useCartStore } from "@/stores/carrinhoStore";
import { usePagamentoStore } from "@/stores/pagamentoStore";
import { computed, ref } from "vue";
const cart = useCartStore();
const compra = usePagamentoStore();

const visibleRemoveCart = ref(false)
function removeMsg(){
  visibleRemoveCart.value = true;
  setTimeout(() => {visibleRemoveCart.value = false;}, 2500);
}
const valueInCart = computed(() => {
  return cart.valueInCart()
})

const cep = ref('')
const valorFinal = ref(valueInCart.value)
const valorDesconto = ref(0)
const cupons = ref(['vinicius20', 'julia20'])
const desconto = ref(0.8)
const insert_cupom = ref(false)
const cupom = ref('') 
const frete_mostrar = ref(false)
const cupom_ativo = ref(0)
const cupom_error = ref('')
const valor_com_desconto = computed(() =>{
  return Number(valueInCart.value * desconto.value)
})

function aplicarDescontoFrete(){
 if(cupons.value.includes(cupom.value) && cupom_ativo.value == 0){
    valorFinal.value = valor_com_desconto.value
    valorDesconto.value = valueInCart.value - valorFinal.value
    cupom_ativo.value++
    cupom_error.value = 'sucess'
  }else if(cupom_ativo.value == 0){
    cupom_error.value = 'error'
  }else if(cep.value.length == 8){
    frete_mostrar.value = true
    valorFinal.value += frete.value
  }
}
const calc_frete = ref(false)
const frete = ref(58.97)
function showCard(e) {
  if(e == 'cupom'){
    insert_cupom.value = !insert_cupom.value
    calc_frete.value = false
  }
  else if(e == 'frete'){
    calc_frete.value = !calc_frete.value
    insert_cupom.value = false
  }
}
function comprar(){
  compra.realizarCompra(cart.itens, 'carrinho', frete.value, valorDesconto.value, valorFinal.value)
}
</script>

<template>
  <PadraoPropagandas />
  <PadraoCaminho />
  <div class="container" v-if="cart.itens.length > 0">
    <div class="itens-area">
      <span class="itens-info">Todos os itens ({{ cart.itens.length }})</span>
      <p class="itens-info">
        <div v-if="valorFinal >= 3000"><truckIcon /> Faltam <span>R$ {{ (3000 - valueInCart).toFixed(2).replace('.',',') }}</span> para voce ganhar frete gratis</div>
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
        <div class="valores-pedido">
          <div class="valor valor-total"><span>Total</span><span>R$ {{valueInCart.toFixed(2).replace('.',',')}}</span></div>
          <div class="valor valor-frete" v-show="frete_mostrar"><span>Valor da entrega</span><span>+ R${{frete.toFixed(2).replace(".",",")}}</span></div>
          <div class="valor valor-desconto" v-show="valorFinal != valueInCart && valorDesconto != 0"><span>Cupom Aplicado</span><span>- R$ {{ valorDesconto.toFixed(2).replace('.',',') }}</span></div>
          <div class="valor valor-final" v-show="valorFinal != valueInCart"><span>Total Final</span><span>R$ {{ valorFinal.toFixed(2).replace('.',',') }}</span></div>
        </div>
        <div class="card-drop-option">
          <div class="extra-option" @click="showCard('cupom')"><span>Cupom de desconto</span><upArrowIcon v-if="insert_cupom"/><downArrowIcon v-else/></div>
          <div v-show="insert_cupom" class="input-drop-option">
            <div class="input-cupom"><input :class="cupom_error" type="text" :disabled="cupom_ativo == 1" placeholder="Insira seu cupom" v-model="cupom"><span v-if="cupom_error == 'error'" class="error-msg">* Insira um cumpom valido</span></div>
            <button class="option-button" @click="aplicarDescontoFrete">Inserir Desconto</button>
          </div>
        </div>
        <div class="card-drop-option">
          <div class="extra-option" @click="showCard('frete')"><span>Calcular frete</span><upArrowIcon v-if="calc_frete"/><downArrowIcon v-else/></div>
          <div v-show="calc_frete" class="input-drop-option">
            <input class="" type="text" placeholder="Insira seu CEP" v-model="cep" maxlength="8" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')">
            <button class="option-button" @click="aplicarDescontoFrete">Inserir CEP</button>
          </div>
        </div>
      </div>
      <router-link to="/pagamento" class="finalizar-compra" @click="comprar">Finalizar compra</router-link>
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
.resumo-info .card-drop-option .input-cupom{
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
}
.error-msg{
  font-size: 12px;
  color: red;
  opacity: 0.8;
}
.input-drop-option input.sucess{
  user-select: none;
  border: 2px solid greenyellow
}
.input-drop-option input.error{
  border: 2px solid red;
}
.valor-frete,.valor-desconto{
  color: #464343;
}
.valores-pedido div.valor{
  border: 1px solid transparent;
}
.valores-pedido{
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 10px;
}
.input-drop-option button.option-button{
  background-color: #29375B;
  height: 40px;
  width: 100%;
  color: white;
  cursor: pointer;
  transition: all .5s ease;
}
.input-drop-option input{
  height: 45px;
  border: 1px solid #29375B;
  border-radius: 3rem;
  text-indent: 20px;
  width: 100%;
}
.input-drop-option{
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
}
.card-drop-option{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.resumo-info div.extra-option{
  cursor: pointer;
  user-select: none;
  border-bottom: 1px solid transparent;
  display: flex;
  height: 55px;
}
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
  border-bottom: 1px solid #a1a1a1;
  font-weight: 500;
}
.resumo button{
  border: 1px solid #29375b;
  border-radius: 50px;
  height: 50px;
  background-color: transparent;
  color: #29375b;
  font-weight: 500;
}
.resumo .finalizar-compra{
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
.resumo .finalizar-compra:hover{
  transform: translateY(-5px);
  opacity: 0.8;
  background-color: #29375B;
  color: white;
}
</style>
