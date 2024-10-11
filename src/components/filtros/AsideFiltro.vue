<script setup>
import { ref, computed } from 'vue'
const precoMin = ref(null)
const precoMax = ref(null)
const material = ref([])
const potencia = ref([])
const marca = ref([])

const produtos = [
    {
        nome: 'Kit Energia Solar 1,14kWp 570W',
        imageUrl: 'placa',
        preco: 1000.00,
        material: ['aço'],
        potencia: 500,
        marca: 'elgin',
        parcelas: 'em até 10x de R$ 100,00',
        qntdVendas: 1,
        VerMais: {
            'CARACTERÍSTICAS': 'Economia Imediata Certificado pelo INMETRO Resistente'
        }
    },
    {
        nome: 'Painel Solar 450W Monocristalino Half-Cell',
        imageUrl: 'placa2',
        preco: 1000.00,
        parcelas: 'em até 10x de R$ 100,00',
        material: ['ferro'],
        potencia: 100,
        marca: 'elgin',
        qntdVendas: 2,
        VerMais: {
            'CARACTERÍSTICAS': 'Economia Imediata Certificado pelo INMETRO Resistente'
        }
    },
    {
        nome: 'Cabo Solar 4mm 30M Preto',
        imageUrl: 'caboSolar',
        preco: 1000.00,
        parcelas: 'em até 10x de R$ 100,00',
        material: ['aço'],
        potencia: 400,
        marca: 'weg',
        qntdVendas: 3,
        VerMais: {
            'CARACTERÍSTICAS': 'Economia Imediata Certificado pelo INMETRO Resistente'
        }
    },
    {
        nome: 'Kit Energia Solar 1,14kWp 570W',
        imageUrl: 'estruturaSolar',
        preco: 2000.00,
        parcelas: 'em até 10x de R$ 100,00',
        material: ['ferro'],
        potencia: 500,
        marca: 'weg',
        qntdVendas: 2,
        VerMais: {
            'CARACTERÍSTICAS': 'Economia Imediata Certificado pelo INMETRO Resistente'
        }
    },
    {
        nome: 'Kit Energia Solar 1,14kWp 570W',
        imageUrl: 'placa3',
        preco: 2000.00,
        parcelas: 'em até 10x de R$ 100,00',
        material: ['aço'],
        potencia: 200,
        marca: 'elgin',
        qntdVendas: 1,
        VerMais: {
            'CARACTERÍSTICAS': 'Economia Imediata Certificado pelo INMETRO Resistente'
        }
    },
    {
        nome: 'Kit Energia Solar 1,14kWp 570W',
        imageUrl: 'placa',
        preco: 1000.00,
        parcelas: 'em até 10x de R$ 100,00',
        material: ['ferro'],
        potencia: '900',
        marca: 'weg',
        qntdVendas: 3,
        VerMais: {
            'descricao': 'Caixa de Conexão IP 68 com 3 diodos de by-pass',
        }
    }
]

const filter = computed(() => {
    function filterAndSort(produtos, filtredMateriais, filtredPotencia, filtredMarcas, minPrice, maxPrice, sortOrder) {

        const newFiltredMateriais = new Set(filtredMateriais);
        let arrayFiltrada = produtos

        // Filtrando produtos com base em materiais
        if (filtredMateriais.length != 0) {
            arrayFiltrada = produtos.filter(item =>
                item.material.some(element => newFiltredMateriais.has(element))
            );
        }

        // Filtrando produtos com base em potência
        if (filtredPotencia.length != 0) {
            arrayFiltrada = arrayFiltrada.filter(item => filtredPotencia.includes(item.potencia));
        }
        // Filtrando produtos com base em marcas
        if (filtredMarcas.length != 0) {
            arrayFiltrada = arrayFiltrada.filter(item => filtredMarcas.includes(item.marca));
        }
        // Filtrando produtos com base no preço
        if (minPrice != null && maxPrice != null) {
            arrayFiltrada = arrayFiltrada.filter(item => item.preco >= minPrice && item.preco <= maxPrice);
        }
        // Ordenando produtos
        if (sortOrder == 'menorPreco') {
            arrayFiltrada.sort((a, b) => a.preco - b.preco);
        }
        else if (sortOrder == 'maiorPreco') {
            arrayFiltrada.sort((a, b) => b.preco - a.preco);
        }
        else if (sortOrder == 'vendas') {

            arrayFiltrada.sort((a, b) => b.qntdVendas - a.qntdVendas);
        }
        console.log(arrayFiltrada);
        return arrayFiltrada
    } 
    return filterAndSort(produtos, material.value, potencia.value, marca.value, precoMin.value, precoMax.value, 'maiorPreco');
}
)
// Exemplo de uso


</script>
<template>
    <div class="filtros">
        <span class="subtitulo filtro-titulo">Filtros {{ filter }} {{ [precoMin, precoMax, material, potencia, marca] }}</span>
        <div class="container">
            <span class="subtitulo">Preço</span>
            <span>-</span>
        </div>
        <div class="container">
            <input class="input-min-max" placeholder="min" v-model="precoMin" />
            <span>-</span>
            <input class="input-min-max" placeholder="max" v-model="precoMax" />
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
                    <input class="opcao" type="checkbox" id="900" name="900" value="900" v-model="potencia" />
                    <label class="opcao-input-label" for="900"> 900 </label>
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
            <div class="opcoes">
                <div class="opcao-input">
                    <input class="opcao" type="checkbox" id="weg" name="weg" value="weg" v-model="marca" />
                    <label class="opcao-input-label" for="weg"> weg </label>
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
