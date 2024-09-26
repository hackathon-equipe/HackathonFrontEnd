<template>
    <div class="propaganda">Você ganha frete grátis a partir de R$500</div>
    <div class="rota">Home ><span class="active">Carrinho</span></div>
    <div class="container">
        <div class="itens-area">
            <span class="itens-info">Todos os itens (3)</span>
            <p  class="itens-info"><truckIcon/> Faltam <span>R$100,00</span> para voce ganhar frete gratis</p>
            <div v-for="(item, index) in produtosStore.produtos.slice(0,3)" :key="index">
                <itemCarrinho :img="item.imageUrl" :nome="item.nome" :preco="item.preco" :parcelas="item.parcelas" />
            </div>
        </div>
        <div class="resumo">
            <span class="resumo-tittle">Resumo do pedido</span>
            <div class="resumo-info">
                <div><span>Total</span><span>R$3.000,00</span></div>
                <div><span>Cupom de desconto</span><downArrowIcon/></div>
                <div><span>Consultar frete</span><downArrowIcon/></div>
            </div>
            <button>Finalizar compra</button>
        </div>
    </div>
</template>

<script setup>
import { truckIcon, downArrowIcon } from '@/components/icons';
import { useProdutosStore } from '@/stores/produtosStore';
import itemCarrinho from '@/components/carrinho/itemCarrinho.vue'
const produtosStore = useProdutosStore()
</script>

<style scoped>
.propaganda{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 0px 20px 0px;
    width: 100vw;
    height: 45px;
    background-color: #29375B;
    color: white;
    font-size: 12px;
}
.rota{
    display: flex;
    align-items: center;
    width: 100vw;
    height: 60px;
    padding-left: 90px;
    background-color: #ECECEC;
}
.active{
    padding-left: 5px;
    font-weight: 600;
}
.container{
    padding: 50px 80px;
    display: flex;
    justify-content: center;
}
.itens{
    margin-top: 55px;
}
.itens-area{
    margin-right: 150px;
}
.itens-info{
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 25px;
}
.itens-info span{
    font-weight: 600;
}
.resumo{
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-top: 100px
}
.resumo-tittle{
    color: #29375B;
    font-weight: 500;
}
.resumo-info div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 55px;
    border-bottom: 1px solid #A1A1A1;
    padding-right: 15px;
    font-weight: 500;
}
.resumo button{
    border: 1px solid #29375B;
    border-radius: 50px;
    height: 50px;
    background-color: transparent;
    color: #29375B;
    font-weight: 500;
    margin-top: 40px;
}
</style>