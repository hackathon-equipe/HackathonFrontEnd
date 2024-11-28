<script setup>
import { ref, computed } from "vue";
import PadraoCaminho from "./caminho/PadraoCaminho.vue";
import AddProduto from "../filtros/AddProduto.vue";
import { useRotasStore } from "@/stores/rotas";
import { useRoute } from "vue-router"; // Importar useRoute
const route = useRoute(); // Usar useRoute para acessar a rota
const RotasStote = useRotasStore();
const produtoNome = computed(() => {
  // Verifica se o link é um produto
  const produto = RotasStote.produtos.find(
    (item) => item.link == "/produtos/" + route.params.categoria
  );
  if (produto) {
    return produto.nome; // Retorna o nome do produto se encontrado
  }

  // Verifica se o link é para promoções
  if ("/" + route.params.categoria == RotasStote.promocoes.link) {
    return RotasStote.promocoes.text; // Retorna o texto das promoções
  }

  // Verifica se o link é para "Ver Tudo"
  if ("/" + route.params.categoria == RotasStote.verTudo.link) {
    return RotasStote.verTudo.text; // Retorna o texto "Ver Tudo"
  }

  return "Produto não encontrado"; // Retorna uma mensagem padrão
});
</script>
<template>
  <div class="produtos-header">
    <PadraoCaminho />
    <h1 class="titulo-produtos">{{ produtoNome }}</h1>
  </div>
  <AddProduto />
</template>
<style scoped>
.titulo-produtos {
  font-size: 24px;
  padding: 50px;
  font-weight: 600;
}

.produtos-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
