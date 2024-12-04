<script setup>
import PadraoCarousel from "@/components/carousel/PadraoCarousel.vue";
import TitleCarousel from "@/components/carousel/TitleCarousel.vue";
import ImagemProduto from "@/components/produtos/imagens/ImagemProduto.vue";
import ImagensPqn from "@/components/produtos/imagens/ImagensPqn.vue";
import InformacoesProduto from "@/components/produtos/informacoes/InformacoesProduto.vue";

import ComentarioProduto from "@/components/produtos/comentarios/ComentarioProduto.vue";
import AddComentario from "@/components/produtos/comentarios/AddComentario.vue";
import ButtonMais from "@/components/produtos/comentarios/ButtonMais.vue";
import FazerOrcamento from "@/components/produtos/orcamento/FazerOrcamento.vue";
import PadraoPropagandas from "@/components/header/propagandas/PadraoPropagandas.vue";
import PadraoCaminho from "@/components/header/caminho/PadraoCaminho.vue";
import { ref } from "vue";

const props = defineProps({
  id:Number,
  nome: String,
  img: Array,
  preco: String,
  parcelas: String,
  estrelas:Number,
  VerMais: String,
});

const imagemAtual = ref(props.img[0]);

function atualizarImagem(novaImagem) {
  imagemAtual.value = novaImagem;
  console.log(imagemAtual.value)
}

// const imgSrc = computed(() => {
//   return new URL(`../../assets/images/${props.img}.png`, import.meta.url).href;
// });
</script>
<template>
  <div>
    <PadraoPropagandas />
    <PadraoCaminho />
    <main>
      <div class="imagem-produto">
        <ImagemProduto :imagem="imagemAtual" />
        <ImagensPqn class="sub-imagens" :images="img"  @selecionarImage="atualizarImagem"/>
      </div> 
     <InformacoesProduto :nome="nome" :preco="preco" :id="id" :image="img" :estrelas="estrelas"/>
    </main>

    <!-- <DescricaoProduto :VerMais="VerMais" /> -->
    <div class="carousel-produtos">
      <TitleCarousel title="Produtos Similares" />
      <PadraoCarousel />
    </div>
    <h1 class="titulo-descricao">Comentários</h1>
    <ComentarioProduto />
    <ButtonMais />
    <AddComentario />
    <FazerOrcamento />
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

main {
  margin-top: 100px;
  display: flex;
  justify-content: center;
}

.carousel-produtos {
  padding-top: 100px;
  margin-left: calc(15vw - 130px);
}

.titulo-descricao {
  font-size: 20px;
  padding: 100px;
  text-align: center;
  font-weight: 600;
}

.imagem-produto{
  display: flex;
  flex-direction: column;
  align-items: start;
}

@media (max-width: 768px) {
  main{
    margin-top: 50px;
    flex-direction: column;
    align-items: center;
  }
  .carousel-produtos{
    margin-left: 0px;
  }
  .sub-imagens{
    display: none;
  }
  .titulo-descricao {
    padding: 50px 0px 40px;
  }
}
</style>
