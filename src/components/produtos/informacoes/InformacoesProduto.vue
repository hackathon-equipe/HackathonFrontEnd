<script setup>
import { useCartStore } from '@/stores/carrinhoStore';
import addToCartNotify from '@/components/carrinho/componentes/notificacaoAdicionarItem.vue'
import { ref, reactive } from 'vue';
import { useProdutosStore } from '@/stores/produtosStore';
import { usePagamentoStore } from '@/stores/pagamentoStore';
import router from '@/router';
// import axios from 'axios'; // Importando Axios
const props = defineProps({
  nome: String,
  preco: String,
  id: Number,
  image: String,
  estrelas: Number
})
const cart = useCartStore()

//  const orderData = reactive({ "title": props.nome, "quantity": 1, "price": Number(props.preco)});
 
//  // MercadoPago initialization
//  const mp = new MercadoPago('APP_USR-b2ad37f2-01f8-4ed9-b5be-7ddb974c6eb0', { locale: 'pt-BR' });
 
//  // Reactive state to hold preference ID
//  const preferenceId = ref(null);
 
//  // Função para criar o botão de checkout após obter o ID da preferência
//  const createCheckoutButton = (preferenceId) => {
//    const bricksBuilder = mp.bricks();
 
//    const renderComponent = async () => {
//      // Remover qualquer botão anterior, se existir (gerenciado pelo Vue agora)
//      // Criar o botão de checkout do Mercado Pago no 'wallet_container'
//      await bricksBuilder.create('wallet', 'wallet_container', {
//        initialization: {
//          preferenceId: preferenceId,
//        },
//      });
//    };
 
//    renderComponent();
//  };
 
//  // Função para manipular o clique e buscar os dados de preferência
//  const handleCheckoutClick = async () => {
//    try {
//      // Enviar uma requisição para o backend para criar a preferência
//      const response = await axios.post('https://backend-api-mercadopago.onrender.com/create_preference', orderData, {
//        headers: {
//          'Content-Type': 'application/json',
//        },
//      });
 
//      // Obter o ID da preferência da resposta
//      const preference = response.data;
 
//      // Armazenar o ID da preferência e criar o botão de checkout
//      preferenceId.value = preference.id;
//      createCheckoutButton(preference.id);
//    } catch (error) {
//      // Tratar erros da requisição
//      alert('Erro: Não foi possível criar a preferência de pagamento.');
//      console.error(error);
//    }
//  };
const produto = useProdutosStore().getProduct(props.id)
const compra = usePagamentoStore()

const visibleAddCart = ref(false);
function addToCart(){
  cart.addItem(produto);
  visibleAddCart.value = true;
  setTimeout(() => {visibleAddCart.value = false;}, 4000);
}
function closeNotify(){
  visibleAddCart.value = false
}
function comprar(){
  router.push('/pagamento')
  compra.realizarCompra(props, 'direta', props.preco)
  console.log(props.preco)
}
</script>
<template>
    <div class="informacoes">
      <span class="nome">{{ nome }}</span>
      <span class="descricao"
        >Economia Imediata Certificado pelo INMETRO</span
      >
      <div class="estrelas">
        <div v-for="item in Math.round(estrelas)" :key="item">
          <svg width="20" height="20" viewBox="0 0 286 272" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M143 0L176.677 103.647H285.658L197.491 167.705L231.168 271.353L143 207.295L54.8322 271.353L88.5093 167.705L0.341522 103.647H109.323L143 0Z"
              fill="#F4AA09" />
          </svg>
        </div>  
        <div v-for="item in ( 5 - Math.round(estrelas))" :key="item">
          <svg width="20" height="20" viewBox="0 0 286 272" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M143 0L176.677 103.647H285.658L197.491 167.705L231.168 271.353L143 207.295L54.8322 271.353L88.5093 167.705L0.341522 103.647H109.323L143 0Z"
              fill="#D9D9D9" />
          </svg>
        </div>  
        <span>{{estrelas.toFixed(1)}}</span>
      </div>
      <span class="preco">R$ {{ Number(preco).toFixed(2).replace('.',',') }}</span>
      <div class="frete"><span> Calcule seu frete</span> <img src="@/assets/images/seta-baixo.png" width="10px" height="10px"/></div>
      <button class="button-comprar" @click="comprar()">Comprar</button>
      <div id="wallet_container"></div>
      <button class="button-add" @click="addToCart">Adicionar ao carrinho</button>
    </div>
    <addToCartNotify v-if="visibleAddCart" :nome="nome" :preco="Number(preco)" :image="image" :closeFunction="closeNotify"/>
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
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
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

@media (max-width: 768px) {
  .informacoes{
    width: 100%;
    padding: 30px 30px;
  }
  .preco{
    margin: 10px 0px 40px;
  }
}
</style>
