<script setup>
import { computed} from "vue";
import SlideComponent from "@/components/carousel/SlideComponent.vue";
import { useFiltroStore } from "@/stores/filtros";
import DefaultPaginacao from "@/components/paginacao/DefaultPaginacao.vue";
const FiltrosStore = useFiltroStore();
const isTwoProducts = computed(() => {
  return FiltrosStore.filtro.length === 2;
});
function parcelas (preco){
  return `em até 10x de R$${Number(preco/10).toFixed(2).replace('.', ',')}`
}

</script>
<template>
  <div class="produtos" :class="{ 'two-products': isTwoProducts }">
    <div class="produto" v-for="(text, index) in FiltrosStore.filtro" :key="index">
      <SlideComponent
        :id="text.id"
        :img="text.foto ? text.foto[0].file : ''"
        :imagem="text.imagens"
        :nome="text.nome"
        :preco="text.preco"
        :parcelas="parcelas(text.preco)"
        :estrelas="3"
      />
    </div>
    <DefaultPaginacao />
  </div>
</template>
<style scoped>
.produtos {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: row;
  padding: 0px 7vw 0px 50px;
  width: 71vw;
  margin-bottom: 100px;
}

.produto {
  width: 20vw;
  padding: 5px;
  min-width: 210px;
}

.two-products {
  justify-content: flex-start; /* Ou outro valor desejado */
}

@media (max-width: 1250px) {
  .produtos{
    justify-content: center;
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .produto {
    width: 250px;
    padding: 5px;
    min-width: 200px;
  }
  .produtos{
    width: 100%;
  }
}
</style>
