<script setup>
import { ref, computed } from 'vue'
const precoMin = ref(null)
const precoMax = ref(null)
const material = ref(null)
const potencia = ref(null)
const marca = ref(null)
let oi = computed(() => {
return console.log(precoMin.value, precoMax.value, material.value, potencia.value, marca.value) 
})
oi()
</script>
<template>
    <div class="filtros">
        <span class="subtitulo filtro-titulo">Filtros</span>
        <div class="container">
            <span class="subtitulo">Preço</span>
            <span>-</span>
        </div>
        <div class="container">
            <input class="input-min-max" placeholder="min" v-model="precoMin" />
            <span>-</span>
            <input class="input-min-max" placeholder="max" v-model="precoMax"/>
            <span>></span>
        </div>
        <div class="container">
            <span class="subtitulo">Material</span>
            <span>-</span>
        </div>
        <div class="opcoes">
            <div class="opcao-input">
                <input class="opcao" type="checkbox" id="ferro" name="ferro" value="ferro" v-model="material" />
                <label class="opcao-input-label" for="ferro"> ferro </label>
            </div>
            <div class="opcao-input">
                <input class="opcao" type="checkbox" id="Placas solares" name="Placas solares" value="Placas solares" />
                <label class="opcao-input-label" for="Placas solares"> Placas solares </label>
            </div>
            <div class="opcao-input">
                <input class="opcao" type="checkbox" id="Placas solares" name="Placas solares" value="Placas solares" />
                <label class="opcao-input-label" for="Placas solares"> Placas solares </label>
            </div>
            <div class="opcao-input">
                <input class="opcao" type="checkbox" id="Placas solares" name="Placas solares" value="Placas solares" />
                <label class="opcao-input-label" for="Placas solares"> Placas solares </label>
            </div>
        </div>

        <div>

            <div class="container">
                <span class="subtitulo">Potência</span>
                <span>-</span>
            </div>
            <div class="opcoes">
                <div class="opcao-input">
                    <input class="opcao" type="checkbox" id="500vw" name="500vw"
                        value="500vw" v-model="potencia" />
                    <label class="opcao-input-label" for="500vw"> 500vw </label>
                </div>
                <div class="opcao-input">
                    <input class="opcao" type="checkbox" id="Placas solares" name="Placas solares"
                        value="Placas solares" />
                    <label class="opcao-input-label" for="Placas solares"> Placas solares </label>
                </div>
                <div class="opcao-input">
                    <input class="opcao" type="checkbox" id="Placas solares" name="Placas solares"
                        value="Placas solares" />
                    <label class="opcao-input-label" for="Placas solares"> Placas solares </label>
                </div>
                <div class="opcao-input">
                    <input class="opcao" type="checkbox" id="Placas solares" name="Placas solares"
                        value="Placas solares" />
                    <label class="opcao-input-label" for="Placas solares"> Placas solares </label>
                </div>
            </div>
            <div class="container">
                <span class="subtitulo">Marcas</span>
                <span>+</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
option {
    background-color: transparent;
    border-radius: 10px;
}

.opcao-input input[type='checkbox']:checked,
input[type='checkbox']:checked {
    accent-color: #2F3F68;
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
    border: 1px solid #D9D9D9;
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
    border-bottom: 1px solid #D9D9D9;
    margin-bottom: 5px;
}

.subtitulo {
    font-weight: 600;
    padding: 10px 0px;
}
</style>
