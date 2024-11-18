<script setup>
import { upArrowIcon, downArrowIcon } from '@/components/icons';
import { ref } from 'vue';
import { useCartStore } from '@/stores/carrinhoStore';

const props = defineProps({
    titulo: String,
    tituloBotao: String,
    inputPlaceholder: String,
    funcaoInput: String,
});

const cart = useCartStore()

const valorInput = ref('')

function aplicar(){
    if(props.funcaoInput == "cupom"){
        cart.aplicarDesconto(valorInput.value)
    }
}

// Variavel definida para mostrar/esconder conteudo
const mostrarConteudo = ref(false)
</script>

<template>
    <div class="card-inserir-informacao">
        <div class="opcao-extra" @click="mostrarConteudo = !mostrarConteudo"><span>{{ titulo }}</span>
            <upArrowIcon v-if="mostrarConteudo" />
            <downArrowIcon v-else />
        </div>
        <div class="input-inserir-informacao" v-if="mostrarConteudo">
            <div class="input-cupom">
                <input type="text" v-model="valorInput" :placeholder="inputPlaceholder">
            </div>
            <button class="botao-informacao" @click="aplicar">{{ tituloBotao }}</button>
            <slot>

            </slot>
        </div>
    </div>
</template>

<style scoped>
.input-inserir-informacao button.botao-informacao {
    border: none;
    font-weight: 600;
    background-color: #29375B;
    height: 40px;
    width: 100%;
    color: white;
    cursor: pointer;
    border-radius: 3rem;
    transition: all .5s ease;
}

.input-inserir-informacao .input-cupom input{
    appearance: none;
    display: flex;
    height: 45px;
    border: 1px solid #29375B;
    border-radius: 3rem;
    text-indent: 20px;
    width: 100%;
}

.input-inserir-informacao{
    gap: 10px;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    width: 100%;
}

.card-inserir-informacao {
    display: flex;
    flex-direction: column;
    align-items: center;
}

div.opcao-extra {
    cursor: pointer;
    user-select: none;
    border-bottom: 1px solid transparent;
    display: flex;
    justify-content: space-between;
    height: 45px;
    margin-top: 20px;
    width: 100%;
}
</style>