<script setup>
import PadraoPropagandas from "@/components/header/propagandas/PadraoPropagandas.vue";
import PadraoCaminho from "@/components/header/caminho/PadraoCaminho.vue";
import { leftArrowIcon } from "../components/icons";
import { ref } from "vue";
const step = ref('first-section')
const checked = ref(false)
function changeStep(e){
    step.value = e.value
}
</script>
<template>
<PadraoPropagandas />
<PadraoCaminho />
<div class="background">
    <div class="container">
        <div class="gif">
            <img src="../assets/images/OrcamentoGif/OrcamentoGIf.gif" alt="gif produção">
        </div>
        <div class="orcamento">
            <form @submit.prevent="" >
                <h1>Descubra Quanto Pode Economizar</h1>
                <div class="first-section" v-if="step == 'first-section'">
                    <div class="form-input">
                        <label for="">Insira seu consumo mensal de energia (kWh):</label>
                        <input type="number" placeholder="Exemplo: 112 kWh">
                    </div>
                    <div class="form-input">
                        <label for="">Insira seu gasto mensal come energia (R$):</label>
                        <input type="number" placeholder="Exemplo: R$400">
                    </div>
                    <div class="button-area">
                        <button @click="changeStep('second-step')">Próximo <leftArrowIcon/> </button>
                    </div>
                </div>
                <div v-else class="second-section">
                    <div class="form-input">
                        <label for="">Insira o estado onde mora:</label>
                        <select name="" id="" class="state-select">
                            <option value="start" selected disabled>Selecione</option>
                        </select>
                    </div>
                    <div class="input-checkbox">
                        <input type="checkbox" name="verify-limit" id="verify-limit" class="check-limit-area" v-model="checked">
                        <label for="verify-limit">Deseja inserir área disponivel?</label>
                    </div>
                    <div class="form-input" v-if="checked">
                        <input type="number" placeholder="Exemplo: 40m">
                    </div>
                    <div class="button-area">
                        <button @click="changeStep('second-step')">Calcular Economia</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>
<style scoped>
.second-section{
    display: flex;
    flex-direction: column;
}
.second-section .button-area{
    margin-top: 50px;
}
.button-area{   
    display: flex;
    justify-content: center;
    align-content: end;
}
.button-area button{
    width: 200px;
    background-color: #29375B;
    color: white;
    font-weight: 600;
    border-radius: 3rem;
    border: none;
    height: 45px;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
}
.orcamento{
    display: flex;
    width: 40%;
}
.first-section{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.container{
    background-color: rgb(64, 105, 150, 0.08);
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.background{
    padding: 50px 90px;
}
form{
    width: 100%;
    gap: 20px;
    display: flex;
    flex-direction: column;
}
form h1{
    color: #2F3F68;
    font-size: 20px;
}
.form-input{
    gap: 5px;
    display: flex;
    flex-direction: column;
}
.input-checkbox{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin: 10px 0px;
    padding: 0px 20px;
}
.input-checkbox input{
    width: 20px;
    height: 20px;
}
.form-input .state-select{
    appearance: none;
    height: 45px;
    border: 1px solid hsla(223, 38%, 26%, 0.3);
    border-radius: 3rem;
    text-indent: 20px;
    color: #A1A1A1;
}
.form-input input{
    height: 45px;
    border: 1px solid hsla(223, 38%, 26%, 0.3);
    border-radius: 3rem;
    text-indent: 20px;
    display: flex;
    appearance: textfield;
}
.form-input input:focus{
    outline: none;
}
.form-input input::-webkit-inner-spin-button,.form-input input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.form-input label{
    text-indent: 20px;
    color: #2F3F68;
}
</style>