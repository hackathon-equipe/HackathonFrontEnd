<script setup>
defineProps({
  filtroLista: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div v-for="(item, index) in filtroLista" :key="index" class="item">
    <div class="container">
      <span class="subtitulo">{{ item.titulo }}</span>
      <button class="pointer" @click="item.funcao, item.aberto = !item.aberto" v-if="!item.aberto">-</button>
      <button class="pointer" @click="item.aberto = !item.aberto" v-else>+</button>
    </div>
    <div class="opcoes" v-if="!item.aberto">
      <div v-for="(item2, index) in item.array" :key="index" class="opcao-input">
        <input
          class="opcao"
          type="checkbox"
          :id="item2.nome"
          :name="item2.nome"
          :value="item2.value"
          v-model="item.model"
        />
        <label class="opcao-input-label" :for="item2.nome"> {{ item2.nome }} </label>
      </div>
    </div>
  </div>
</template>
<style scoped>
.pointer{
  cursor: pointer;
}
button {
  background-color: transparent;
  border: none;
}
option {
  background-color: transparent;
  border-radius: 10px;
}

.opcao-input {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
}

.opcao-input input[type="checkbox"]:checked,
input[type="checkbox"]:checked {
  background-color: #2f3f68;
}

.opcao-input input[type="checkbox"] {
  all: unset;
  border: 1.5px solid #d9d9d9;
  border-radius: 15px;
  width: 15px;
  height: 15px;
  margin: 0px 8px;
}

.opcao {
  margin: 0px 15px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
}

.subtitulo {
  font-weight: 600;
  padding: 10px 0px;
}

.opcao-input-label{
  cursor: pointer;
}

@media (max-width: 768px) {
  .item{
    margin: 0px 15px;
    padding: 10px 10px;
    border-bottom: 1px solid #d9d9d9;
  }
}
</style>
