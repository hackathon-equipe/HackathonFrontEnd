<script setup>
// import { ref } from 'vue';
// const metodo_pagamento = ref(null)
// import { usePagamentoStore } from '@/stores/pagamentoStore';
// import { useCartStore } from '@/stores/carrinhoStore';
// const produto = usePagamentoStore().produto
// const frete = usePagamentoStore().frete
// const desconto = usePagamentoStore().desconto
// const tipo = usePagamentoStore().tipo_compra
// const valorFinal = ref(0)
// const valorCarrinho = useCartStore().valueInCart()
// const pagamento_foi_realizado = ref(false)

// if (tipo == 'carrinho') {
//     valorFinal.value = usePagamentoStore().valorFinal
// } else {
//     valorFinal.value = ref(produto.preco + frete - desconto)
// }

// function pagamento_realizado(){
//     pagamento_foi_realizado.value = true
// }
import { ref, onMounted } from 'vue';

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
        
        <div class="animacao-carregamento">
          <img class="confirmacao" v-show="mostrarImagem" src="@/assets/images/LoadGif/check-mark-verified.gif" alt="" width="50">
          <img class="confirmacao" v-show="!mostrarImagem" src="@/assets/images/LoadGif/pagamento-realizado.png" alt="" width="48">
          <span class="pagamento-realizado">Pagamento realizado com sucesso!</span>
          <span class="span-pqn">{{ dataHoraPagamento }}</span> <!-- Exibe a data e hora -->
          <hr class="hr"/>
          <span class="span-pqn">valor do pagamento</span>
          <span class="valor">R$ 200,00</span>
          <span class="span-pqn">prazo de entrega</span>
          <span class="prazo">4 a 5 dias úteis</span>
          <router-link to="/" class="button" >voltar ao site</router-link></div>
       
    </div>
    <!-- <div class="pagamento">
        <div class="metodos-pagamento">
            <h1>Como você prefere pagar</h1>
            <ul class="metodos">
                <li class="metodo" @click="metodo_pagamento = 'cartao de credito'">
                    <label for="cartao-creido" class="metodo-nome">Cartão de crédito</label><input type="radio"
                        id="cartao-credito" class="metodo-confirm" value="cartao de credito"
                        v-model="metodo_pagamento" />
                </li>
                <li class="metodo" @click="metodo_pagamento = 'pix'">
                    <label for="pix" class="metodo-nome">PIX</label><input type="radio" id="pix" class="metodo-confirm"
                        value="pix" v-model="metodo_pagamento" />
                </li>
                <li class="metodo" @click="metodo_pagamento = 'boleto bancario'">
                    <label for="boleto-bancario" class="metodo-nome">Boleto bancário</label><input type="radio"
                        id="boleto-bancario" class="metodo-confirm" value="boleto bancario"
                        v-model="metodo_pagamento" />
                </li>
            </ul>
        </div>
        <div class="detalhes-compra">
            <h2>Detalhe da sua compra</h2>
            <div class="produto" v-if="tipo != 'carrinho'">
                <span>{{ produto.nome }}</span><span>R${{ produto.preco }}</span>
            </div>
            <div class="produto" v-if="tipo == 'carrinho'">
                <div v-for="item in produto" :key="item.id" class="produto-carrinho" > <span>{{ item.nome }}</span> <span>R${{ item.preco }}</span> </div>
            </div>

            <div class="valores">
                <ul>
                    <li v-if="tipo != 'carrinho'"><span>Subtotal</span><span>R${{ produto.preco }}</span></li>
                    <li v-else><span>Subtotal</span><span>R${{ valorCarrinho.toFixed(2).replace('.',',') }}</span></li>
                    <li> <span>Frete</span><span>R${{ frete.toFixed(2).replace('.',',') }}</span> </li>
                    <li> <span>Desconto</span><span>R${{ desconto.toFixed(2).replace('.',',') }}</span> </li>
                </ul>
            </div>
            <div class="valor-final">
                <span>A pagar</span><span class="valor">R$ {{ valorFinal }}</span>
            </div>
            <div class="confirm-button">
                <button @click="usePagamentoStore().confirmarCompra(), pagamento_realizado()">Confirmar Compra</button>
            </div>
        </div>
    </div>
    <div class="pagamento-realizado" v-if="pagamento_foi_realizado">
        <img src="../assets/images/LoadGif/check-mark-verified.gif" alt="">
        <h1>Compra realizada com sucesso!!</h1>
        <router-link to="/carrinho" class="confirm-pagamento">Ok, entendi.</router-link>
    </div> -->
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
    display: flex
;
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
    height: 2px;
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
    background-color: rgb(233, 233, 233); /* Semitransparente */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999; /* Garante que fique acima de outros conteúdos */
  }
/*
.pagamento-realizado img{
    width: 200px;
    height: auto;
}
.confirm-pagamento{
    background-color: #29375b;
    text-decoration: none;
    color: white;
    font-weight: 600;
    padding: 5px 20px;
    border-radius: 5px;
}
.pagamento-realizado{
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
.produto-carrinho{
    display: flex;
    justify-content: space-between;
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
    justify-content: space-between;
    gap: 10px;
    padding: 20px 0px;
    align-items: center;
    border-bottom: 2px solid rgba(128, 128, 128, 0.6);
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

.metodos-pagamento {
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 80px;
}

.metodos-pagamento h1 {
    font-size: 24px;
    font-weight: 600;
    padding-top: 80px;
}

.metodos {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-bottom: 80px;
}

.metodo {
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.26);
    height: 75px;
    border-radius: 5px;
    padding: 0px 30px;
    align-items: center;
    cursor: pointer;
}

.metodo-confirm {
    color: rgb(149, 149, 240);
    cursor: pointer;
    width: 20px;
    height: 20px;
}*/
</style>