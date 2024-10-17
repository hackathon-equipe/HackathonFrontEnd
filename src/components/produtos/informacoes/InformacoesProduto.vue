<script setup>
import { useCartStore } from '@/stores/carrinhoStore';
import addToCartNotify from '@/components/carrinho/addToCartNotify.vue'
import { ref } from 'vue';
import { useProdutosStore } from '@/stores/produtosStore';
const props = defineProps({
  nome: String,
  preco: Number,
  id: Number,
  image: String
})

const produto = useProdutosStore().getProduct(props.id)
const carrinho = useCartStore()

const visibleAddCart = ref(false);
function addToCart(){
  carrinho.addItem(produto);
  visibleAddCart.value = true;
  setTimeout(() => {visibleAddCart.value = false;}, 4000);
}

</script>
<template>
    <div class="informacoes">
      <span class="nome">{{ nome }}</span>
      <span class="descricao"
        >Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in
        hendrerit.</span
      >
      <div class="estrelas"><img class="oii" src="@/assets/images/estrelas.png" /><span>5.0</span></div>
      <span class="preco">R$ {{ preco.toFixed(2).replace('.',',') }}</span>
      <div class="frete"><span> Calcule seu frete</span> <img src="@/assets/images/seta-baixo.png" width="10px" height="10px"/></div>
      <button class="button-comprar">Comprar</button>
      <button class="button-add" @click="addToCart">Adicionar ao carrinho</button>
    </div>
    <addToCartNotify v-if="visibleAddCart" :nome="nome" :preco="preco" :image="image" :closeFunction="closeNotify"/>
</template>
<style scoped>
.informacoes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 35vw;
  }
  .nome {
    font-size: 24px;
    font-weight: 600;
  }
  .descricao span{
    margin-left: calc(15vw - 30px);
      font-size: 16px;
  }
  .descricao {
    margin: 15px 0px;
  }
  .estrelas{
    display: flex;
    align-items: center;
  }
  .estrelas span{
    margin: 10px;
  
  }
  .preco {
    font-weight: 600;
    font-size: 30px;
    margin: 40px 0px;
  }
  .frete {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid black;
    margin-bottom: 20px;
  }
  .frete img{
    margin-right: 10px ;
  }
  .button-comprar {
    border-radius: 20px;
    height: 45px;
    color: white;
    background-color: #29375b;
    border: none;
    font-weight: 500;
    margin: 20px 0px;
    cursor: pointer;
    transition: all .2s ease;
  }
  .button-add {
    background-color: transparent;
    border-radius: 20px;
    height: 45px;
    color: #29375b;
    font-weight: 500;
    border: 2px solid #29375b;
    cursor: pointer;
    transition: all .2s ease;
  }
  .button-add:hover,.button-comprar:hover{
    transform: translateY(3px);
  }
  .removeCartItem{
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    font-weight: 500;
    display: flex;
    position: fixed;
    bottom: 100px;
    padding: 15px 30px;
    width: 100%;
    height: 50px;
  }
</style>
