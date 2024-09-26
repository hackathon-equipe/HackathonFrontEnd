<script setup>
 defineProps({
  nome: String,
  preco: String,
})
</script>
<template>
    <div class="informacoes">
      <span class="nome">{{ nome }}</span>
      <span class="descricao"
        >Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in
        hendrerit.</span
      >
      <div class="estrelas"><img class="oii" src="@/assets/images/estrelas.png" /><span>5.0</span></div>
      <span class="preco">{{ preco }}</span>
      <div class="frete"><span> Calcule seu frete</span> <img src="@/assets/images/seta-baixo.png" width="10px" height="10px"/></div>
      <button class="button-comprar">Comprar</button>
      <button class="button-add">Adicionar ao Carrinho</button>
    </div>
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
  }
  .button-add {
    background-color: transparent;
    border-radius: 20px;
    height: 45px;
    color: #29375b;
    font-weight: 500;
    border: 2px solid #29375b;
  }
</style>
