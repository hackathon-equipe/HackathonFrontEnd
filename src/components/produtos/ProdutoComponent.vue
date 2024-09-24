<script setup>
import { computed } from 'vue'
const props = defineProps({
  img: String,
  nome: String,
  preco: String,
  parcelas: String
})
const imgSrc = computed(() => {
  return new URL(`../../assets/images/${props.img}.png`, import.meta.url).href
})
</script>
<template>
  <main>
    <div class="img">
      <img class="oi" :src="imgSrc" />
    </div>
    <div class="informacoes">
      <span class="nome">{{ nome }}</span>
      <span class="descricao">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.</span>
      <img class="oii" src="@/assets/images/estrelas.png" />
      <span class="preco">{{ preco }}</span>
      <span class="frete"> Calcule seu frete</span>
      <button class="button-comprar">Comprar</button>
      <button class="button-add">Adicionar ao Carrinho</button>
    </div>
  </main>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
main{
    margin-top: 100px;
    display: flex;
    justify-content: center;
}
.frete{
border-bottom: 1px solid black;
margin-bottom: 20px;
}
.button-comprar{
    border-radius:20px;
    height: 45px;
    color:white;
    background-color: #29375B;
    border: none;
    font-weight: 500;
    margin: 20px 0px;
}
.button-add{
    background-color: transparent;
    border-radius: 20px;
    height: 45px;
    color:#29375B;
    font-weight: 500;
    border: 2px solid #29375B;
}
.img {
    border: 1px solid #D9D9D9;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
    padding: 40px;
width: 40vw;
}
.informacoes{
    display: flex;
    flex-direction: column;
justify-content: center;
    width: 40vw;
}
.descricao{
margin: 15px 0px;
}
.oi {
  width: auto;
  max-height: 65vh;
}
.oii {
  width: 120px;
}
span {
  display: block;
  font-family: 'Poppins', sans-serif;
}
.nome {
  font-size: 24px;
  font-weight: 600;
}
.preco {
  font-weight: 600;
  font-size: 30px;
  margin: 40px 0px;
}
.parcelas {
  font-size: 12px;
}
</style>
