<script setup>
import { ref } from "vue";
import { useFiltroStore } from "@/stores/filtros";
const FiltrosStore = useFiltroStore();
const materialAberto = ref(true);
const potenciaAberto = ref(true);
const marcasAberto = ref(true);
const precoAberto = ref(true);
const precoMin = ref("");
const precoMax = ref("");
function clicked() {
  FiltrosStore.precoMin = precoMin.value;
  FiltrosStore.precoMax = precoMax.value;
}
function fecharPreco() {
  FiltrosStore.precoMin = "";
  FiltrosStore.precoMax = "";
  precoAberto.value = false;
}
function fecharMaterial() {
  FiltrosStore.material = [];
  materialAberto.value = false;
}
function fecharPotencia() {
  FiltrosStore.potencia = [];
  potenciaAberto.value = false;
}
function fecharMarcas() {
  FiltrosStore.marca = [];
  marcasAberto.value = false;
}
</script>

<template>
  <div class="filtros">
    <span class="subtitulo filtro-titulo">Filtros </span>
    <div class="container">
      <span class="subtitulo">Preço</span>
      <button @click="fecharPreco()" v-if="precoAberto">-</button>
      <button @click="precoAberto = !precoAberto" v-if="!precoAberto">+</button>
    </div>
    <div class="container" v-if="precoAberto">
      <input class="input-min-max" placeholder="min" v-model="precoMin" />
      <span>-</span>
      <input class="input-min-max" placeholder="max" v-model="precoMax" />
      <button @click="clicked()">></button>
    </div>
    <div class="container">
      <span class="subtitulo">Material</span>
      <button @click="fecharMaterial()" v-if="materialAberto">-</button>
      <button @click="materialAberto = !materialAberto" v-if="!materialAberto">+</button>
    </div>
    <div class="opcoes" v-if="materialAberto">
      <div class="opcao-input">
        <input
          class="opcao"
          type="checkbox"
          id="ferro"
          name="ferro"
          value="ferro"
          v-model="FiltrosStore.material"
        />
        <label class="opcao-input-label" for="ferro"> ferro </label>
      </div>
      <div class="opcao-input">
        <input
          class="opcao"
          type="checkbox"
          id="Placas solares"
          name="Placas solares"
          value="Placas solares"
        />
        <label class="opcao-input-label" for="Placas solares"> Placas solares </label>
      </div>
      <div class="opcao-input">
        <input
          class="opcao"
          type="checkbox"
          id="Placas solares"
          name="Placas solares"
          value="Placas solares"
        />
        <label class="opcao-input-label" for="Placas solares"> Placas solares </label>
      </div>
      <div class="opcao-input">
        <input
          class="opcao"
          type="checkbox"
          id="Placas solares"
          name="Placas solares"
          value="Placas solares"
        />
        <label class="opcao-input-label" for="Placas solares"> Placas solares </label>
      </div>
    </div>

    <div>
      <div class="container">
        <span class="subtitulo">Potência</span>
        <button @click="fecharPotencia()" v-if="potenciaAberto">-</button>
        <button @click="potenciaAberto = !potenciaAberto" v-if="!potenciaAberto">
          +
        </button>
      </div>
      <div class="opcoes" v-if="potenciaAberto">
        <div class="opcao-input">
          <input
            class="opcao"
            type="checkbox"
            id="900"
            name="900"
            value="900"
            v-model="FiltrosStore.potencia"
          />
          <label class="opcao-input-label" for="900"> 900 </label>
        </div>
        <div class="opcao-input">
          <input
            class="opcao"
            type="checkbox"
            id="Placas solares"
            name="Placas solares"
            value="Placas solares"
          />
          <label class="opcao-input-label" for="Placas solares"> Placas solares </label>
        </div>
        <div class="opcao-input">
          <input
            class="opcao"
            type="checkbox"
            id="Placas solares"
            name="Placas solares"
            value="Placas solares"
          />
          <label class="opcao-input-label" for="Placas solares"> Placas solares </label>
        </div>
        <div class="opcao-input">
          <input
            class="opcao"
            type="checkbox"
            id="Placas solares"
            name="Placas solares"
            value="Placas solares"
          />
          <label class="opcao-input-label" for="Placas solares"> Placas solares </label>
        </div>
      </div>
      <div class="container">
        <span class="subtitulo">Marcas</span>
        <button @click="fecharMarcas()" v-if="marcasAberto">-</button>
        <button @click="marcasAberto = !marcasAberto" v-if="!marcasAberto">+</button>
      </div>
      <div class="opcoes" v-if="marcasAberto">
        <div class="opcao-input">
          <input
            class="opcao"
            type="checkbox"
            id="weg"
            name="weg"
            value="weg"
            v-model="FiltrosStore.marca"
          />
          <label class="opcao-input-label" for="weg"> weg </label>
        </div>
        <div class="opcao-input">
          <input
            class="opcao"
            type="checkbox"
            id="Placas solares"
            name="Placas solares"
            value="Placas solares"
          />
          <label class="opcao-input-label" for="Placas solares"> Placas solares </label>
        </div>
        <div class="opcao-input">
          <input
            class="opcao"
            type="checkbox"
            id="Placas solares"
            name="Placas solares"
            value="Placas solares"
          />
          <label class="opcao-input-label" for="Placas solares"> Placas solares </label>
        </div>
        <div class="opcao-input">
          <input
            class="opcao"
            type="checkbox"
            id="Placas solares"
            name="Placas solares"
            value="Placas solares"
          />
          <label class="opcao-input-label" for="Placas solares"> Placas solares </label>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
button {
  background-color: transparent;
  border: none;
}
option {
  background-color: transparent;
  border-radius: 10px;
}

.opcao-input input[type="checkbox"]:checked,
input[type="checkbox"]:checked {
  accent-color: #2f3f68;
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

.input-min-max {
  width: 40%;
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid #d9d9d9;
  color: #bebdbd;
  text-align: center;
}

.filtros {
  display: flex;
  flex-direction: column;
  width: 25vw;
  margin-top: 20px;
  padding-left: 7vw;
}

.filtro-titulo {
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 5px;
}

.subtitulo {
  font-weight: 600;
  padding: 10px 0px;
}
</style>
