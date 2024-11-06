<script setup>
import { ref, computed } from 'vue';
import { useFiltroStore } from "@/stores/filtros";

const FiltrosStore = useFiltroStore();
const isDropdownOpen = ref(false); // Controle de visibilidade do dropdown
const selectedOption = ref(FiltrosStore.ordem); // Armazena a opção selecionada
const selectedOptionView = computed(() => {
  const option = options.find(opt => opt.value === selectedOption.value);
  return option ? option.label : '';
});

// Função para alternar a visibilidade do dropdown
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Função para definir a opção selecionada
const selectOption = (option) => {
  selectedOption.value = option;
  FiltrosStore.ordem = option; // Atualiza o valor na store
  isDropdownOpen.value = false; // Fecha o dropdown após a seleção
};

// Opções de ordenação
const options = [
  { value: "relevância", label: "Relevância" },
  { value: "vendas", label: "Mais vendidos" },
  { value: "maiorPreco", label: "Maior preço" },
  { value: "menorPreco", label: "Menor preço" },
];
</script>

<template>
  <div class="ordenar">
    <label for="ordenacao">Ordenar por:</label>
    <div class="dropdown-container">
      <div class="selected-option" @click="toggleDropdown">
        {{ selectedOptionView || "Selecione" }}
        <span class="selecionar">></span>
      </div>
      <ul v-if="isDropdownOpen" class="options-list">
        <li 
          v-for="option in options"
          :key="option.value"
          class="option-item"
          @click="selectOption(option.value)"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.selecionar{
  display: inline-block; /* Necessário para aplicar transformações */
  transform: rotate(90deg); /* Rotaciona o texto em 90 graus */
  white-space: nowrap; 
  margin-left: 7px;
}
.ordenar {
  padding-right: 7vw;
  text-align: end;
}

/* Contêiner do dropdown */
.dropdown-container {
  position: relative;
  display: inline-block;
}

/* Estilo do item selecionado */
.selected-option {
  padding: 10px 15px;
  border-radius: 20px;
  background-color: white;
  cursor: pointer;
  font-weight: 520;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

/* Lista de opções */
.options-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 2px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: white;
  list-style: none;
  padding: 0;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: max-content;
}

/* Estilo de cada item da opção */
.option-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

/* Efeito de hover nas opções */
.option-item:hover {
  background-color: #ebebeb;
  color: rgb(15, 15, 15);
}

/* Foco no dropdown */
.selected-option:focus {
  outline: none;
  border-color: #ebebeb;
}
</style>
