<script setup>
</script>
<template>
  <div class="ordenar"> <label for="ordenacao">Ordenar por:</label>
    <select id="ordenacao" name="ordenacao">
      <option value="maisvendidos">Mais vendidos</option>
      <option value="maisvendidos">Mais vendidos</option>
      <option value="maisvendidos">Mais vendidos</option>
      <option value="maisvendidos">Mais vendidos</option>
      <option value="maisvendidos">Mais vendidos</option>
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
