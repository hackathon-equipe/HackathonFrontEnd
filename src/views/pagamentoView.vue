<script setup>
import { ref, reactive } from 'vue';
import { useCartStore } from '@/stores/carrinhoStore'
import { usePagamentoStore } from '@/stores/pagamentoStore';
import axios from 'axios'; // Importando Axios
const carrinho = useCartStore()
const pagamento_foi_realizado = ref(false)
function pagamento_realizado() {
    pagamento_foi_realizado.value = true
}
  const isLoading = ref(false); // Variável para controle de carregamento


 const orderData = reactive({ "title": "Compra na loja oorun", "quantity":(carrinho.itens.length), "price": Number( usePagamentoStore().valor_final)});
 
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
  isLoading.value = true; // Ativa o carregamento
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
   }finally {
    isLoading.value = false; // Desativa o carregamento após a requisição
  }
 };
 handleCheckoutClick()
</script>

<template>
    <div class="pagamento">
        <div class="detalhes-compra">
            <h2>Detalhe da sua compra</h2>

            <!-- Versao - Compra direta -->
            <div class="produto" v-if="usePagamentoStore().tipo_compra == 'direta'">
                <div><span>{{ usePagamentoStore().produto.nome }}</span><span>R${{ usePagamentoStore().produto.preco }}</span></div>
            </div>

            <!-- Versao - Compra Pelo Carrinho-->
            <div class="produto" v-else>
                <div v-for="item in usePagamentoStore().produto" :key="item.id" class="produto-carrinho">
                    <span>{{item.nome}} {{item.quantidade}}x</span>
                    <span>R${{ item.preco }}</span>
                </div>
            </div>

            <div class="valores">
                <ul>
                    <li><span>Subtotal</span><span>R$0</span></li>
                    <li> <span>Frete</span><span>R$0</span> </li>
                    <li> <span>Desconto</span><span>R$0</span> </li>
                </ul>
            </div>
            <div class="valor-final">
                <span>A pagar</span><span class="valor">R${{ usePagamentoStore().valor_final }}</span>
            </div>
            <div class="confirm-button">
                <div id="wallet_container" @click="usePagamentoStore().confirmarCompra(), pagamento_realizado()"></div>
            </div>
        </div>
        <div v-if="isLoading" class="loading">
            <div class="animacao-carregamento">
              <img src="@/assets/images/LoadGif/LoadingAnimation.gif" alt="">
          </div>
          </div>
    </div>
</template>

<style scoped>
.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5); /* Semitransparente */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Garante que fique acima de outros conteúdos */
  }
  .animacao-carregamento img {
    width: 250px;
    height: auto;
  }
  
  .animacao-carregamento {
    height: 100px;
    overflow: hidden;
  }
.pagamento-realizado img {
    width: 200px;
    height: auto;
}

.confirm-pagamento {
    background-color: #29375b;
    text-decoration: none;
    color: white;
    font-weight: 600;
    padding: 5px 20px;
    border-radius: 5px;
}

.pagamento-realizado {
    gap: 20px;
    z-index: 999999999999999;
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
}

.produto-carrinho {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.confirm-button button {
    background-color: #29375b;
    color: white;
    font-weight: 600;
    border: none;
    display: flex;
    width: 100%;
    justify-content: center;
    height: 40px;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    transition: .1s linear;
}

.confirm-button button:hover {
    background-color: #56658d;
}

.confirm-button {
    display: flex;
    justify-content: center;
}

.valor-final .valor {
    font-weight: 600;
}

.valor-final {
    padding: 20px 0px;
    display: flex;
    justify-content: space-between;
}

.valores ul li {
    display: flex;
    justify-content: space-between;
}

.valores ul {
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.valores {
    border-bottom: 1px solid rgba(128, 128, 128, 0.6);
}

.produto {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    padding: 20px 0px;
    align-items: center;
    border-bottom: 2px solid rgba(128, 128, 128, 0.6);
}

.produto div{
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.pagamento {
    padding: 80px 0px 0px 0px;
    display: flex;
    justify-content: center;
    gap: 50px;
}

.detalhes-compra {
    display: flex;
    flex-direction: column;
    width: 35%;
    background-color: #F5F5F5;
    padding: 40px 40px;
}

.detalhes-compra h2 {
    font-size: 20px;
    font-weight: 600;
}

</style>