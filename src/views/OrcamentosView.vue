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
    gasto_energia: ''.replace(",", "."),
    consumo_mensal: ''.replace(",", "."),
    area_limitada: ref(false),
    area_disponivel: ''.replace(",", "."),
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
                <form @submit.prevent="">
                    <h1>Descubra Quanto Pode Economizar</h1>
                    <div class="first-section" v-if="section == 'first-section'">
                        <div class="form-input">
                            <label for="">Insira seu consumo mensal de energia (kWh):</label>
                            <input type="number" placeholder="Exemplo: 112 kWh" v-model="userInfo.consumo_mensal"
                                required>
                        </div>
                        <div class="form-input">
                            <label for="">Insira seu gasto mensal come energia (R$):</label>
                            <input type="number" placeholder="Exemplo: R$400" v-model="userInfo.gasto_energia">
                        </div>
                        <div class="button-area">
                            <button @click="changeSection('second-section')"
                                :disabled="userInfo.consumo_mensal == '' || userInfo.gasto_energia == ''">Próximo
                                <leftArrowIcon />
                            </button>
                        </div>
                    </div>
                    <div v-else-if="section == 'second-section'" class="second-section">
                        <div class="form-input">
                            <label for="">Insira o estado onde mora:</label>
                            <select name="" id="" class="state-select" v-model="userInfo.irradiacao">
                                <option value=0 selected disabled>Selecione</option>
                                <option v-for="estado in estados_irradiacao" :key="estado.estado"
                                    :value="estado.irradiacao">{{ estado.estado }}</option>
                            </select>
                        </div>
                        <div class="input-checkbox">
                            <input type="checkbox" name="verify-limit" id="verify-limit" class="check-limit-area"
                                v-model="userInfo.area_limitada">
                            <label for="verify-limit">Deseja inserir área disponivel?</label>
                        </div>
                        <div class="form-input" v-if="userInfo.area_limitada">
                            <input type="number" placeholder="Exemplo: 40m" v-model="userInfo.area_disponivel">
                        </div>
                        <div class="button-area">
                            <button @click="changeSection('end-section'), realizarCalculo()"
                                :disabled="userInfo.irradiacao == 0">Calcular Economia</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="third-section" v-else>
                <div class="grafico">
                    <OrcamentoGrafico :valores="resultado_orcamento.payback_values" />
                </div>
                <div class="cards">
                    <div class="card">
                        <div class="card-titulo">
                            <h2>Gasto de energia por mês</h2>
                        </div>
                        <div class="card-subtitulos">
                            <div class="card-subtitulo">
                                <span>Sem o sistema fotovoltaico</span>
                                <div class="resultado">
                                    <span>R${{ resultado_orcamento.valor_energia_antigo }}</span>
                                </div>
                            </div>
                            <div class="card-subtitulo">
                                <span>Sem o sistema fotovoltaico</span>
                                <div class="resultado">
                                    <span>R${{ resultado_orcamento.valor_energia_restante }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-subtitulo">
                            <h2>Redução</h2>
                            <span>(redução na fatura)</span>
                        </div>
                        <div class="resultado">
                            <span>{{ resultado_orcamento.porcentagem_valor_energia_economizada }}%</span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-subtitulo">
                            <h2>Payback</h2>
                            <span>(tempo retorno em anos)</span>
                        </div>
                        <div class="resultado">
                            <span>{{ resultado_orcamento.payback_anos }} anos</span>
                        </div>
                    </div>
                </div>
                <div class="alerts">
                    <ul>
                        <li>*Os valores calculados não levam em consideração aumentos da tarifa de energia elétrica 10% a.a.</li>
                        <li>*A área que você possui é necessaria para implementar o sistema porém como não temos acesso ao formato dessa area não podemos afirmar com certeza que o sistema irá caber.</li>
                        <li>*O valor citado não inclui instalação</li>
                    </ul>
                </div>
            </div>
    </div>
    <div class="mais-interesses" v-if="section == 'end-section'">
        <TitleCarousel title="Você pode se interessar" />
        <PadraoCarousel />
    </div>
</template>
<style scoped>
.third-section{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.alerts{
    margin-top: 40px;
    align-self: flex-start;
}
.alerts ul{
    list-style: none;
}
.alerts ul li{
    padding: 8px 0px;
}
.grafico{
    max-width: 800px;
    display: flex;
    width: 100%;
}
.card .card-subtitulos .resultado span {
    margin-top: 0px;
}

.card .resultado span {
    margin-top: 20px;
    font-size: 32px;
    color: #225286;
    font-weight: 500;
}

.resultado {
    display: flex;
    justify-content: center;
}

.card-subtitulo span {
    font-size: 14px;
}

.card h2 {
    text-align: center;
    font-size: 20px;
    color: #29375B;
}

.card-subtitulo {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #406996;
}

.card-subtitulos {
    margin-top: 20px;
    display: flex;
    gap: 40px;
}

.cards {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 50px;
    flex-wrap: wrap;
}

.card {
    border: 2px solid hsla(215, 37%, 36%, 0.09);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
    border-radius: 30px;
    width: auto;
    padding: 20px 40px 20px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .2s ease;
}

.card:hover {
    transform: translateY(-5px)
}

.mais-interesses {
    margin-bottom: 50px;
}

.second-section {
    display: flex;
    flex-direction: column;
}

.second-section .button-area {
    margin-top: 50px;
}

.button-area {
    display: flex;
    justify-content: center;
    align-content: end;
}

.button-area button {
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

.button-area button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
}

.orcamento {
    display: flex;
    width: 40%;
}

.first-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.container {
    background-color: rgb(64, 105, 150, 0.08);
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.background {
    padding: 50px 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

form {
    width: 100%;
    gap: 20px;
    display: flex;
    flex-direction: column;
}

form h1 {
    color: #2F3F68;
    font-size: 20px;
}

.form-input {
    gap: 5px;
    display: flex;
    flex-direction: column;
}

.input-checkbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin: 10px 0px;
    padding: 0px 20px;
}

.input-checkbox input {
    width: 20px;
    height: 20px;
}

.form-input .state-select {
    appearance: none;
    height: 45px;
    border: 1px solid hsla(223, 38%, 26%, 0.3);
    border-radius: 3rem;
    text-indent: 20px;
    color: #A1A1A1;
}

.form-input input {
    height: 45px;
    border: 1px solid hsla(223, 38%, 26%, 0.3);
    border-radius: 3rem;
    text-indent: 20px;
    display: flex;
    appearance: textfield;
}

.form-input input:focus {
    outline: none;
}

.form-input input::-webkit-inner-spin-button,
.form-input input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.form-input label {
    text-indent: 20px;
    color: #2F3F68;
}

@media (max-width:1200px) {
    .container {
        padding: 0px 20px;
    }
}

@media (max-width: 768px) {

    .background {
        padding: 0px;
    }

    .orcamento {
        width: 100%;
    }

    .container {
        background-color: transparent;
        flex-direction: column;
        padding: 20px 40px;
    }

    form h1 {
        font-size: 20px;
        text-align: center;
        margin-bottom: 15px;
    }

    .button-area {
        margin: 40px 0px;
    }

    .componente-resultado {
        background-color: rgb(64, 105, 150, 0.00);
        padding: 40px 0px;
    }

    .resultado-grafico {
        width: 100%;
        min-height: 200px;
        background-color: rgb(64, 105, 150, 0.00);
    }

    .third-section {
        padding: 40px 20px;
    }

    .card-subtitulos{
        flex-wrap: wrap;
        justify-content: center;
    }
}

@media (max-width: 562px) {
    .card{
        width: 100%;
    }
}
</style>