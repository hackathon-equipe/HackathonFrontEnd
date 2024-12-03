<script setup>
import PadraoPropagandas from "@/components/header/propagandas/PadraoPropagandas.vue";
import TitleCarousel from "@/components/carousel/TitleCarousel.vue";
import PadraoCarousel from "@/components/carousel/PadraoCarousel.vue";
import PadraoCaminho from "@/components/header/caminho/PadraoCaminho.vue";
import OrcamentoGrafico from '@/components/grafico/OrcamentoGrafico.vue'
import { useCustoIrradiacaoStore } from "@/stores/cursto-irradiacaoStore";
import { useOrcamentoStore } from "@/stores/orcamentoStore";
import { leftArrowIcon } from "../components/icons";
import { ref } from "vue";
const section = ref('first-section')

function changeSection(i) {
    section.value = i
}
const orcamento = useOrcamentoStore()

const estados_irradiacao = useCustoIrradiacaoStore().irradiacaoSolar

const userInfo = ref({
    irradiacao: '0',
    gasto_energia: ''.replace(",","."),
    consumo_mensal: ''.replace(",","."),
    area_limitada: ref(false),
    area_disponivel: ''.replace(",","."),
})

const resultado_orcamento = ref('')
function realizarCalculo() {
    resultado_orcamento.value = orcamento.calcularOrcamento(userInfo.value)
}

</script>
<template>
    <PadraoPropagandas />
    <PadraoCaminho />
    <div class="background">
        <div class="container" v-if="section == 'first-section' || section == 'second-section'">
            <div class="gif">
                <img src="../assets/images/OrcamentoGif/OrcamentoGIf.gif" alt="gif produção">
            </div>
            <div class="orcamento">
                <form @submit.prevent="" >
                    <h1>Descubra Quanto Pode Economizar</h1>
                    <div class="first-section" v-if="section == 'first-section'">
                        <div class="form-input">
                            <label for="">Insira seu consumo mensal de energia (kWh):</label>
                            <input type="number" placeholder="Exemplo: 112 kWh" v-model="userInfo.consumo_mensal" required>
                        </div>
                        <div class="form-input">
                            <label for="">Insira seu gasto mensal come energia (R$):</label>
                            <input type="number" placeholder="Exemplo: R$400" v-model="userInfo.gasto_energia">
                        </div>
                        <div class="button-area">
                            <button @click="changeSection('second-section')" :disabled="userInfo.consumo_mensal == '' || userInfo.gasto_energia == ''">Próximo <leftArrowIcon/> </button>
                        </div>
                    </div>
                    <div v-else-if="section == 'second-section'" class="second-section">
                        <div class="form-input">
                            <label for="">Insira o estado onde mora:</label>
                            <select name="" id="" class="state-select" v-model="userInfo.irradiacao">
                                <option value=0 selected disabled>Selecione</option>
                                <option v-for="estado in estados_irradiacao" :key="estado.estado" :value="estado.irradiacao">{{ estado.estado }}</option>
                            </select>
                        </div>
                        <div class="input-checkbox">
                            <input type="checkbox" name="verify-limit" id="verify-limit" class="check-limit-area" v-model="userInfo.area_limitada">
                            <label for="verify-limit">Deseja inserir área disponivel?</label>
                        </div>
                        <div class="form-input" v-if="userInfo.area_limitada">
                            <input type="number" placeholder="Exemplo: 40m" v-model="userInfo.area_disponivel">
                        </div>
                        <div class="button-area">
                            <button @click="changeSection('end-section'), realizarCalculo()" :disabled="userInfo.irradiacao == 0">Calcular Economia</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="third-section" v-else>
            <div class="componente-resultado">
                <h1>Resultado</h1>
                <div class="resultado">
                    <div class="resultado-grafico">
                        <OrcamentoGrafico :valores="resultado_orcamento.payback_values"/>
                    </div>
                    <div class="resultado-info">
                        <div>
                            <h2>Gasto de energia por mês</h2>
                            <p>Sem o sistema fotovoltaico: R${{ resultado_orcamento.valor_energia_antigo.replace(".",",") }}</p>
                            <p>Com o sistema fotovoltaico: R${{ resultado_orcamento.valor_energia_restante.replace(".",",") }}</p>
                        </div>
                        <div>
                            <h2>Payback (retorno em anos)</h2>
                            <p>{{resultado_orcamento.payback_anos}} anos</p>
                        </div>
                        <div>
                            <h2>Porcentagem na redução da fatura</h2>
                            <p>{{resultado_orcamento.porcentagem_valor_energia_economizada}}%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="resultado-alertas">
                <p>*Os valores calculados não levam em consideração aumentos da tarifa de energia elétrica 10% a.a.</p>
                <p>*A área que você possui é necessaria para implementar o sistema porém como não temos acesso ao formato dessa area não podemos afirmar com certeza que o sistema irá caber.</p>
                <p>*O valor citado não inclui instalação</p>
            </div>
        </div>
    </div>
    <div class="mais-interesses" v-if="section == 'end-section'">
        <TitleCarousel title="Você pode se interessar" />
        <PadraoCarousel />
    </div>
</template>
<style scoped>
.resultado-grafico{
    display: flex; align-items: center; justify-content: space-between;
    width: 50%;
}
.mais-interesses{
    margin-bottom: 50px;
}
.componente-resultado{
    padding: 40px 90px;
    background-color: rgb(64, 105, 150, 0.08);
}
.resultado-alertas{
    font-size: 14px;
    margin: 15px 0px 100px;
}
.third-section h1{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    font-size: 20px;
}
.third-section h2{
    font-weight: 600;
}
.resultado{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.resultado div{
    gap: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
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
    cursor: pointer;
}
.button-area button:disabled{
    opacity: 0.4;
    cursor:not-allowed;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
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
@media (max-width:1200px) {
    .container{
        padding: 0px 20px;   
    }
}
@media (max-width: 768px) {
    .background{
        padding: 0px;
    }
    .orcamento{
        width: 100%;
    }
    .container{
        background-color: transparent;
        flex-direction: column;
        padding: 20px 40px;
    }
    form h1{
        font-size: 20px;
        text-align: center;
        margin-bottom: 15px;
    }
    .button-area{
        margin: 40px 0px;
    }
    .componente-resultado{
        background-color: rgb(64, 105, 150, 0.00);
    }
    .resultado{
        flex-direction: column;
    }
    .resultado-grafico{
        width: 100%;
    }
}
</style>