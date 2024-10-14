<script setup>
import { useFiltroStore } from "@/stores/filtros";
const FiltrosStore = useFiltroStore();
</script>
<template>
  <div class="ordenar"> <label for="ordenacao">Ordenar por:</label>
    <select id="ordenacao" name="ordenacao" v-model="FiltrosStore.ordem">
      <option value="vendas"> Mais vendidos</option>
      <option value="maiorPreco">Maior preço</option>
      <option value="menorPreco">Menor preço</option>
    </select>
  </div>
</template>
<style scoped>
option {
  background-color: transparent;
  border-radius: 10px;
}

select {
  padding: 10px;
  font-weight: 520;
  border: none;
  background-color: transparent;
  outline: none;
}

select:focus {
  border-color: transparent;
}

.ordenar {
  padding-right: 7vw;
  text-align: end;
}
</style>
