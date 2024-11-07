<script setup>
import { ref } from 'vue';
const metodo_pagamento = ref(null)
import { usePagamentoStore } from '@/stores/pagamentoStore';
import { useCartStore } from '@/stores/carrinhoStore';
const produto = usePagamentoStore().produto
const frete = usePagamentoStore().frete
const desconto = usePagamentoStore().desconto
const tipo = usePagamentoStore().tipo_compra
const valorFinal = ref(0)

if(tipo == 'carrinho'){
    valorFinal.value = usePagamentoStore().valorFinal
}else{
    valorFinal.value = ref(produto.preco + frete - desconto)
}
</script>

<template>
    <div class="pagamento">
        <div class="metodos-pagamento">
            <h1>Como você prefere pagar</h1>
            <ul class="metodos">
                <li class="metodo" @click="metodo_pagamento = 'cartao de credito'">
                    <label for="cartao-creido" class="metodo-nome">Cartão de crédito</label><input type="radio" id="cartao-credito" class="metodo-confirm" value="cartao de credito" v-model="metodo_pagamento" />
                </li>
                <li class="metodo" @click="metodo_pagamento = 'pix'">
                    <label for="pix" class="metodo-nome">PIX</label><input type="radio" id="pix" class="metodo-confirm" value="pix" v-model="metodo_pagamento" />
                </li>
                <li class="metodo" @click="metodo_pagamento = 'boleto bancario'">
                    <label for="boleto-bancario" class="metodo-nome">Boleto bancário</label><input type="radio" id="boleto-bancario" class="metodo-confirm" value="boleto bancario" v-model="metodo_pagamento"/>
                </li>
            </ul>
        </div>
        <div class="detalhes-compra">
            <h2>Detalhe da sua compra</h2>
            <div class="produto" v-if="tipo != 'carrinho'">
                <span>{{produto.nome}}</span><span>R${{produto.preco.toFixed(2).replace('.',',')}}</span>
            </div>
            <div class="produto" v-for="item in produto" :key="item.id" v-else>
                <span>{{ item.nome }}</span> <span>{{ item.preco }}</span>
            </div>
            
            <div class="valores">
                <ul>
                    <li v-if="tipo != 'carrinho'"><span>Subtotal</span><span>R${{produto.preco.toFixed(2).replace('.',',')}}</span></li>
                    <li v-else><span>Subtotal</span><span>R${{ useCartStore().valueInCart. }}</span></li>
                    <li><span>Desconto</span><span>R${{ desconto.toFixed(2).replace('.',',')}}</span></li>
                    <li><span>Frete</span><span>R${{ frete.toFixed(2).replace('.',',') }}</span></li>
                </ul>
            </div>
            <div class="valor-final">
                <span>A pagar</span><span class="valor">R$ {{ valorFinal }}</span>
            </div>
            <div class="confirm-button">
                <button>Confirmar Compra</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.confirm-button button{
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
.confirm-button button:hover{
    background-color: #56658d;
}
.confirm-button{
    display: flex;
    justify-content: center;
}
.valor-final .valor{
    font-weight: 600;
}
.valor-final{
    padding: 20px 0px;
    display: flex;
    justify-content: space-between;
}
.valores ul li{
    display: flex;
    justify-content: space-between;
}
.valores ul{
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.valores{
    border-bottom: 1px solid rgba(128, 128, 128, 0.6);
}
.produto{
    display: flex;
    justify-content: space-between;
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
.detalhes-compra{
    display: flex;
    flex-direction: column;
    width: 35%;
    background-color: #F5F5F5;
    padding: 40px 40px;
}
.detalhes-compra h2{
    font-size: 20px;
    font-weight: 600;
}
.metodos-pagamento{
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 80px;
}
.metodos-pagamento h1{
    font-size: 24px;
    font-weight: 600;
    padding-top: 80px;
}
.metodos{
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-bottom: 80px;
}
.metodo{
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.26);
    height: 75px;
    border-radius: 5px;
    padding: 0px 30px;
    align-items: center;
    cursor: pointer;
}
.metodo-confirm{
    color: rgb(149, 149, 240);
    cursor: pointer;
    width: 20px;
    height: 20px;
}
</style>