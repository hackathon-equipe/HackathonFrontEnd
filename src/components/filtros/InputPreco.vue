<script setup>
import { ref } from "vue";
import { useCategoriaFiltroStore } from "@/stores/categoriaFiltros";
const CategoriaFiltrosStore = useCategoriaFiltroStore();
const precoAberto = ref(true);
const props = defineProps({
  filtroPreco: {
    type: Array,
    required: true,
  },
});
function fechar() {
  CategoriaFiltrosStore.filtroPreco.funcaoFechar();
  precoAberto.value = !precoAberto.value;
}
</script>

<template>
  <div class="container">
    <span class="subtitulo">{{ filtroPreco.titulo }}</span>
    <button v-if="precoAberto" @click="fechar()">-</button>
    <button v-if="!precoAberto" @click="precoAberto = !precoAberto">+</button>
  </div>
  <div class="container" v-if="precoAberto">
    <input class="input-min-max" placeholder="min" v-model="filtroPreco.precoMin" />
    <span>-</span>
    <input class="input-min-max" placeholder="max" v-model="filtroPreco.precoMax" />
    <button @click="filtroPreco.funcaoClicked">></button>
  </div>
</template>
<style scoped>
.close{
  cursor: pointer;
}
button {
  background-color: transparent;
  border: none;
  cursor: pointer;

}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
}

.input-min-max {
  width: 40%;
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid #d9d9d9;
  color: #bebdbd;
  text-align: center;
}
.subtitulo {
  font-weight: 600;
  padding: 10px 0px;
}
</style>
