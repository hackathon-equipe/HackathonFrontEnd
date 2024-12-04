<!-- <script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
let path = ref(route.path)
path.value = path.value.replace('/all', '');
// Computa a última parte da rota
const ultimaParte = computed(() => {
  const parts = path.value.split("/");
    // Remove '/all' da URL, se existir
  return parts[parts.length - 1] || "Home"; // Retorna 'Home' se a rota for apenas '/'
});
const rotaAtual = computed(() => {
  return path.value.replace(/\//g, " > ");
});
const regex = new RegExp(`(${ultimaParte.value})`, "g");
const rotaBold = rotaAtual.value.replace(regex, "<strong>$1</strong>");
</script>
<template>
  <div class="rota-atual"><RouterLink class="link" to="/">Home</RouterLink><RouterLink :to="ultimaParte" v-html="rotaBold" class="link"></RouterLink></div>
</template>
<style scoped>
.rota-atual {
  display: flex;
  align-items: center;
  padding-left: 7vw;
  background-color: #ececec;
  height: 50px;
  width: 100vw;
  font-size: 14px;
}
span {
  margin-right: 5px;
}
.link {
  margin: 0px 3px;
  text-decoration: none;
  color: rgb(0, 0, 0);
}
</style>

vfor   -->
<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { useProdutosStore } from '@/stores/produtosStore'; // Importando a store de produtos

// Inicializando a rota
const route = useRoute();
const produtosStore = useProdutosStore();
let path = ref(route.path);

// Remove '/all' da URL, se existir
path.value = path.value.replace('/all', '');

// Computa as partes da rota
const partesRota = computed(() => {
  const parts = path.value.split("/").filter(Boolean); // Filtra para remover entradas vazias
  return parts.length > 0 ? parts : ["Home"]; // Se não houver partes, usa 'Home' como padrão
});

// Computa o caminho completo para cada link
const caminhos = computed(() => {
  return partesRota.value.map((_, index) => {
    return '/' + partesRota.value.slice(0, index + 1).join('/');
  });
});

// Computa a rota atual em formato "Home > detalhes" por exemplo
const rotaAtual = computed(() => {
  return path.value.replace(/\//g, " > ");
});

// Computa a expressão para destacar o link atual (última parte)
const rotaBold = computed(() => {
  const regex = new RegExp(`(${partesRota.value[partesRota.value.length - 1]})`, "g");
  return rotaAtual.value.replace(regex, "<strong>$1</strong>");
});

// Substituindo o 'id' do produto pelo nome correspondente na URL
watch(path, () => {
  // Verifica se a rota contém "/produto/:id"
  const produtoId = partesRota.value[partesRota.value.indexOf('produto') + 1];
  
  if (produtoId) {
    // Acessa o produto na store pelo id
    const produto = produtosStore.produtos.find(p => p.id === parseInt(produtoId));

    if (produto) {
      // Substitui o 'id' pelo nome do produto na URL
      path.value = path.value.replace(produtoId, produto.nome.toLowerCase().replace(/\s+/g, '-'));
    }
  }
}, { immediate: true });

</script>

<template>
  <div class="rota-atual">
    <!-- Link para Home, seguido de '>' -->
    <RouterLink class="link" to="/">Home</RouterLink>
    <span v-if="partesRota.length > 0"> &gt; </span> <!-- Adiciona '>' entre Home e a próxima parte -->

    <!-- Gera links dinâmicos para cada parte da rota -->
    <span v-for="(parte, index) in partesRota" :key="index">
      <!-- Para a última parte, formatar em negrito -->
      <RouterLink :to="caminhos[index]" class="link" :class="{ 'active': index === partesRota.length - 1 }">
        <span v-if="index === partesRota.length - 1" v-html="'<strong>' + parte + '</strong>'"></span>
        <span v-else>{{ parte }}</span>
      </RouterLink>

      <!-- Adiciona '>' entre os links -->
      <span v-if="index < partesRota.length - 1"> &gt; </span>
    </span>
  </div>
</template>


<style scoped>
.rota-atual {
  display: flex;
  align-items: center;
  padding-left: 7vw;
  background-color: #ececec;
  height: 50px;
  width: 100vw;
  font-size: 14px;
}

.link {
  margin: 0px 3px;
  text-decoration: none;
  color: rgb(0, 0, 0);
}

.active {
  font-weight: bold; /* Destaca o link ativo (última parte) */
}

span {
  display: flex;
  align-items: center;
}
</style>
