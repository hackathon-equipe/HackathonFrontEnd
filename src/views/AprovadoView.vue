<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
    // Acessando os parâmetros da URL usando useRoute()
    const route = useRoute();


    // Obtendo os parâmetros da query
    const collectionId = route.query.collection_id;
    const status = route.query.status;
    const paymentId = route.query.payment_id;


// Função executada ao montar o componente


// Variáveis de controle
const mostrarImagem = ref(true);
const dataHoraPagamento = ref('');


// Função para obter a data e hora atual no formato desejado
function obterDataHoraAtual() {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const hora = String(data.getHours()).padStart(2, '0');
    const minuto = String(data.getMinutes()).padStart(2, '0');


    return `${dia}/${mes}/${ano}  às  ${hora}:${minuto}`;
}


// Estado reativo para armazenar os dados do pagamento
const paymentData = ref(null);
const isLoading = ref(false);
const errorMessage = ref(null);




// Função para verificar o pagamento
const verifyPayment = async (pagamentoId) => {
  const accessToken = 'APP_USR-8079640270535236-082419-cdffa99af5d8ba5a7f3675a1c0cb8e75-1955402575'; // Substitua pelo seu token de teste
  const apiUrl = `https://api.mercadopago.com/v1/payments/${pagamentoId}?access_token=${accessToken}`;




  isLoading.value = true;
  errorMessage.value = null;




  try {
    // Fazendo a requisição para o Mercado Pago
    const response = await axios.get(apiUrl);
    paymentData.value = response.data; // Armazena os dados do pagamento
  } catch (error) {
    console.error('Erro ao verificar pagamento:', error.response?.data || error.message);
    errorMessage.value = 'Erro ao verificar pagamento. Verifique o console para mais detalhes.';
  } finally {
    isLoading.value = false;
  }
};




// Chamada de exemplo com um Payment ID fictício
verifyPayment(paymentId);




// Quando o componente for montado, definimos a data e hora
onMounted(() => {
    dataHoraPagamento.value = `${obterDataHoraAtual()}`;
   
    // Configura a imagem para desaparecer após 3 segundos
    setTimeout(() => {
        mostrarImagem.value = false;
    }, 2000);
});
</script>


<template>
    <div class="loading">
        <div>
            <div>
                <h1>Verificação de Pagamento</h1>
           
                <!-- Exibindo mensagens de carregamento ou erro -->
                <div v-if="isLoading">Carregando...</div>
                <div v-if="errorMessage">{{ errorMessage }}</div>
           
                <!-- Exibindo os dados do pagamento -->
                <div v-if="paymentData">
                  <p><strong>Status:</strong> {{ paymentData.status }}</p>
                  <p><strong>Detalhes do Status:</strong> {{ paymentData.status_detail }}</p>
                  <p><strong>Método de Pagamento:</strong> {{ paymentData.payment_method_id }}</p>
                  <p><strong>Valor da Transação:</strong> {{ paymentData.transaction_details.total_paid_amount }}</p>
                  <p><strong>Referência Externa:</strong> {{ paymentData.external_reference }}</p>
                </div>
              </div>
            </div>




        <div>
            <h1>Pagamento aprovado</h1>
            <p>Collection ID: {{ collectionId }}</p>
            <p>Status: {{ status }}</p>
            <p>Payment ID: {{ paymentId }}</p>
          </div>
        <div class="animacao-carregamento">
          <img class="confirmacao" v-show="mostrarImagem" src="@/assets/images/LoadGif/check-mark-verified.gif" alt="" width="50">
          <img class="confirmacao" v-show="!mostrarImagem" src="@/assets/images/LoadGif/pagamento-realizado.png" alt="" width="48">
          <span class="pagamento-realizado">Pagamento realizado com sucesso!</span>
          <span class="span-pqn">{{ dataHoraPagamento }}</span> <!-- Exibe a data e hora -->
          <hr class="hr"/>
          <span class="span-pqn">valor do pagamento</span>
          <span class="valor">R${{ paymentData.transaction_details.total_paid_amount }},00</span>
          <span class="span-pqn">método de pagamento</span>
          <span class="prazo">{{ paymentData.payment_method_id }}</span>
          <router-link to="/" class="button" >voltar ao site</router-link></div>
       
    </div>
</template>


<style scoped>
 .button {
    cursor: pointer;
    font-weight: 600;
    color: white;
    background-color: #29375B;
    border-radius: 3rem;
    text-decoration: none;
    padding: 8px 25px;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: 0.5s;
    margin: 20px 0px;
  }
  .button:hover{
    transform: translateY(-10px);}
.prazo{
    font-size: 16px;
    font-weight: 550;
    margin-bottom: 5px;
}
.valor{
    font-size: 30px;
    font-weight: 550;
    margin-bottom: 15px;
}
.hr{
    height: 1px;
    width: 100%;
    color:black;
    margin: 30px 0px;
}
.span-pqn{
    font-size: 12px;
}
.pagamento-realizado{
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
}
.animacao-carregamento{
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    align-items: center;
    justify-content: center;
    padding:20px 50px;
    height: min-content;
}
.confirmacao{
    margin:10px;
}
.loading {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: calc(100vh - 80px);
    background-color: rgb(255, 255, 255); /* Semitransparente */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999; /* Garante que fique acima de outros conteúdos */
  }
</style>



