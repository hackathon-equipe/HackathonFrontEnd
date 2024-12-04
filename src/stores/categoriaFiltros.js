import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useFiltroStore } from './filtros';
import { useRoute } from 'vue-router';
export const useCategoriaFiltroStore = defineStore('categoriaFiltro', () => {
    const FiltrosStore = useFiltroStore();
    const route = useRoute();
    const testeMaterial = ref([]);
const testePotencia = ref([]);
const testeMarca = ref([]);
const testeCategoria = ref([]);

// Função que será chamada sempre que `valor` mudar
const MudarMaterial = (novoValor) => {
  FiltrosStore.material = novoValor;
};

const MudarPotencia = (novoValor) => {
  FiltrosStore.potencia = novoValor;
};

const MudarMarca = (novoValor) => {
  FiltrosStore.marca = novoValor;
};
const MudarCategoria = (novoValor) => {
  FiltrosStore.categoriaAdm = novoValor;
};
watch(testeMaterial, MudarMaterial);
watch(testePotencia, MudarPotencia);
watch(testeMarca, MudarMarca);
watch(testeCategoria, MudarCategoria);
    const materialAberto = ref(true);
const potenciaAberto = ref(true);
const marcasAberto = ref(true);
const precoAberto = ref(true);
const categoriaAberto = ref(true);
const precoMin = ref("");
const precoMax = ref("");

    // Função para redefinir as variáveis
    const resetFilters = () => {
      testeMaterial.value = [];
      FiltrosStore.material = [];
      testePotencia.value = [];
      FiltrosStore.potencia = [];
      testeMarca.value = [];
      FiltrosStore.marca = [];
      precoMax.value = "";
      precoMin.value = "";
      FiltrosStore.precoMin = "";
      FiltrosStore.precoMax = "";
    };

    // Watcher para detectar mudanças na rota
    watch(route, resetFilters);
const bigArray = ref([
    {
      titulo: "Tipo",
      funcao: () => {
        testeMaterial.value = [];
        FiltrosStore.material = [];
        materialAberto.value = false;
      },
      aberto: materialAberto,
      model: testeMaterial,
      array: [
        {
          nome: "Silício Monocristalino",
          value: "Monocristalino",
        },
        {
          nome: "Silício Policristalino",
          value: "Policristalino",
        },
      ],
    },
    {
      titulo: "Potência",
      funcao: () => {
        testePotencia.value = [];
        FiltrosStore.potencia = [];
        potenciaAberto.value = false;
      },
      aberto: potenciaAberto,
      model: testePotencia,
      array: [
        {
          nome: "590W",
          value: "590W",
        },
        {
          nome: "450W",
          value: "450W",
        },
        {
          nome: "550W",
          value: "550W",
        },
        {
          nome: "3kWp",
          value: "0 kWp até 3 kWp",
        },
        {
          nome: "5kWp",
          value: "3,1 kWp até 5 kWp",
        },
        {
          nome: "7,5kWp",
          value: "5,1 kWp até 7,5 kWp",
        },
        {
          nome: "10kWp",
          value: "7,51 kWp até 10 kWp",
        },
        {
          nome: "20kWp",
          value: "10,1 kWp até 20 kWp",
        },
        {
          nome: "50kWp",
          value: "20,1 kWp até 50 kWp",
        },
        {
          nome: "100kWp",
          value: "50,1 kWp até 100 kWp",
        },
      ],
    },
    {
      titulo: "Marcas",
      funcao: () => {
        testeMarca.value = [];
        FiltrosStore.marca = [];
        marcasAberto.value = false;
      },
      aberto: marcasAberto,
      model: testeMarca,
      array: [
        {
          nome: "weg",
          value: "weg",
        },
        {
          nome: "elgin",
          value: "elgin",
        },
      ],
    },
  ]);

  const admProdutos = ref([
    {
      titulo: "Tipo",
      funcao: () => {
        testeCategoria.value = [];
        FiltrosStore.categoriaAdm = [];
        categoriaAberto.value = false;
      },
      aberto: categoriaAberto,
      model: testeCategoria,
      array: [
        { nome: 'Placas Solares', value: 'Placas Solares' },
        { nome: 'Inversores', value: 'Inversores' },
        { nome: 'Conectores', value: 'Conectores' },
        { nome: 'Cabos', value: 'Cabos' },
        { nome: 'Kits Solares', value: 'Kits Solares' },
        { nome: 'Estruturas', value: 'Estruturas' },
        { nome: 'Micro Inversores', value: 'Micro Inversores' }
      ],
    },
    {
      titulo: "Marcas",
      funcao: () => {
        testeMarca.value = [];
        FiltrosStore.marca = [];
        marcasAberto.value = false;
      },
      aberto: marcasAberto,
      model: testeMarca,
      array: [
        {
          nome: "weg",
          value: "weg",
        },
        {
          nome: "elgin",
          value: "elgin",
        },
      ],
    },
  ]);
  const filtroPreco = ref({
    titulo: "Preço",
    aberto: precoAberto,
    precoMin: precoMin,
    precoMax: precoMax,
    funcaoFechar: () => {
      precoMax.value = "";
      precoMin.value = "";
      FiltrosStore.precoMin = "";
      FiltrosStore.precoMax = "";
    },
    funcaoClicked: () => {
      FiltrosStore.precoMin = precoMin.value;
      FiltrosStore.precoMax = precoMax.value;
    },
  });

  return {bigArray, filtroPreco, materialAberto, potenciaAberto, marcasAberto, precoAberto, precoMin, precoMax, admProdutos};})
