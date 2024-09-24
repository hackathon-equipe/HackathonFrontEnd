<script setup>
import PadraoCarousel from '@/components/carousel/PadraoCarousel.vue'
import TitleCarousel from '@/components/carousel/TitleCarousel.vue'
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
  <span>Caixa de Conexão IP 68 com 3 diodos de by-pass</span>
 <span>Máximo Tensão de Trabalho: 1500Vcc</span>
 <span>Moldura: Alumínio Anodizado</span>
 <span>Coeficiente de Temperatura (Pmax): 0.35 %/°C</span>
 <span>Coeficiente de Temperatura (Voc): 0.27 %/°C</span>
 <span>Temperatura de Operação da Placa: - 40 ~ + 85 °C</span>
 <span>emperatura de Operação Ambiente: 45°C (± 2°C)</span>
 <span>Tipo de Vidro Frontal: 3.2mm temperado</span>
 <span>Nº de Células: 144 (6x24)</span>
 <span>Coeficiente de Temperatura (Isc): 0.050 %/°C</span>
 <span>Dimensões (AxLxP) 2279 X 1134 X 35mm</span>
 <span>Máxima carga estática na parte frontal (ex:carga sob placa): 5400Pa</span>
 <span>Tipo de Material: Monocristalino (Half-cell)</span>
 <span>Tipo de Conector: Conectores MC4</span>
 <span>Eficiência do Módulo: 21.30%</span>
 <span>Nível de Eficiência Energética no Inmetro: Nível A</span>
<span>Máxima carga estática traseira (ex:vento): 2400Pa</span>
 <span>Área da seção do cabo: 4mm²</span>
 <span>REGISTRO INMETRO: 007202/2021</span>
 <span>Corrente Máxima por Fusíveis em Série: 25A</span>
 <span>Peso: 29kg</span>
 <span>CARACTERÍSTICAS Economia Imediata Certificado pelo INMETRO Resistente</span>
<span>DOWNLOAD CENTER
</span></div>
<div class="carousel-produtos">
  <TitleCarousel title="Produtos Similares" />
  <PadraoCarousel />
  </div>
    <h1 class="titulo-descricao">Comentários</h1>
    <div class=comentario>
    <div class="divs"><img :src="imgSrc" /><span>Vinicius Gabryel Pereira</span></div>
    <div><span>Excelente!</span><img src="@/assets/images/estrelas.png"/></div>
        <div><span>Painel solar muito grande, recomendo pela qualidade.</span></div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
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
