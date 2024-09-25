<script setup>
import PadraoCarousel from '@/components/carousel/PadraoCarousel.vue'
import TitleCarousel from '@/components/carousel/TitleCarousel.vue'
import { computed } from 'vue'
const props = defineProps({
  img: String,
  nome: String,
  preco: String,
  parcelas: String,
  VerMais: String
})
const imgSrc = computed(() => {
  return new URL(`../../assets/images/${props.img}.png`, import.meta.url).href
})
</script>
<template>
  <main>
    <div>
      <div class="img">
        <img class="oi" :src="imgSrc" />
      </div>
    </div>
    <div class="informacoes">
      <span class="nome">{{ nome }}</span>
      <span class="descricao"
        >Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in
        hendrerit.</span
      >
      <img class="oii" src="@/assets/images/estrelas.png" />
      <span class="preco">{{ preco }}</span>
      <span class="frete"> Calcule seu frete</span>
      <button class="button-comprar">Comprar</button>
      <button class="button-add">Adicionar ao Carrinho</button>
    </div>
  </main>
  <div class="imgs">
    <div class="img-pqn"><img :src="imgSrc" /></div>
    <div class="img-pqn"><img :src="imgSrc" /></div>
    <div class="img-pqn"><img :src="imgSrc" /></div>
    <div class="img-pqn"><img :src="imgSrc" /></div>
  </div>

  <h1 class="titulo-descricao">Descrição do Produto</h1>
<div class="descricao"> 
  <span v-for="(value, key) of VerMais" :key="key">{{ key }}: <strong>{{ value }}</strong></span>
  <span>DOWNLOAD CENTER</span>
 </div>
<div class="carousel-produtos">
  <TitleCarousel title="Produtos Similares" />
  <PadraoCarousel />
  </div>
    <h1 class="titulo-descricao">Comentários</h1>
    <div class=comentario>
    <div class="divs"><img class="usuario-img" :src="imgSrc" /><span class="nome-usuario informacao-usuario">Vinicius Gabryel Pereira</span></div>
    <div class="divs"><span class="exelencia">Excelente!</span><img src="@/assets/images/estrelas.png"/></div>
        <div class="divs"><span>Painel solar muito grande, recomendo pela qualidade.</span></div>
    </div>
    <div class="ver-mais-button"> <span>Ver mais comentários</span><button>V</button></div>
    <div class="comentario-button"><button>+</button> <span>Faça seu comentário</span></div>    
    <h1 class="titulo-orcamento">Se interessou? Faça um orçamento</h1>
    <div class="orcamento"><button class="button-orcamento">Fazer orçamento</button></div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.titulo-orcamento{
  font-size: 20px;
  padding: 50px 0px 20px 0px;
  text-align: center;
  font-weight: 610;
}
.orcamento{
  display: flex;
  align-items: center;
  justify-content: center;
}
.comentario-button, .ver-mais-button{
  margin-left: calc(10vw - 30px);
  display: flex;
  margin-top: 20px;
}
.comentario-button button{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #29375B;
  border-color: #29375B;
  color: rgb(255, 255, 255);
  margin-right: 18px;
}
.ver-mais-button button{
  border:none;
  background-color: transparent;
}
.ver-mais-button span{
  font-weight: 500;
  text-decoration: underline;
}
.comentario-button span{
  font-weight:650;
}
.nome-usuario{
  font-weight: 500;
  font-size: 16px;
}
.divs span{
  font-size: 16px;
}
.exelencia{
  margin-right:20px ;
  font-weight: 600;
}
.informacao-usuario{
  margin-left: 20px;
}
.comentario{
  margin-left: calc(10vw - 30px);
  border-bottom: 1px solid #D9D9D9;
  padding: 28px 0px;
  margin-bottom: 40px;
}
.divs{
  display: flex;
  align-items: center;
  margin-bottom: 13px;
}
.usuario-img{
  width: 50px;
  height: 50px;
  background-color: #29375b;
  border-radius: 50%;
  margin-bottom: 8px;
}
.descricao span{
  margin-left: calc(10vw - 30px);
    font-size: 16px;
}
.carousel-produtos{
    padding-top: 100px;
}
.titulo-descricao{
  font-size: 20px;
  padding: 100px;
  text-align: center;
  font-weight: 610;
}
.imgs {
  display: flex;
  justify-content: space-between;
  width: 40vw;
  margin-left: calc(10vw - 30px);
  margin-top: 1vw;
}
.img-pqn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9vw;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
}

.img-pqn img {
  width: 100%;;
  padding: 10px;
}
main {
  margin-top: 100px;
  display: flex;
  justify-content: center;
}
.frete {
  border-bottom: 1px solid black;
  margin-bottom: 20px;
}
.button-orcamento{
  border-radius: 20px;
  height: 45px;
  color: white;
  background-color: #29375b;
  border: none;
  font-weight: 500;
  margin: 20px 0px;
  padding: 10px 25px;
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
.img {
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  padding: 40px;
  width: 40vw;
}
.informacoes {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40vw;
}
.descricao {
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
