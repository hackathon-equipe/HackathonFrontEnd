import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useFiltroStore } from './filtros';
export const useCategoriaFiltroStore = defineStore('categoriaFiltro', () => {
    const FiltrosStore = useFiltroStore();
    const testeMaterial = ref([]);
const testePotencia = ref([]);
const testeMarca = ref([]);

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
watch(testeMaterial, MudarMaterial);
watch(testePotencia, MudarPotencia);
watch(testeMarca, MudarMarca);
    const materialAberto = ref(true);
const potenciaAberto = ref(true);
const marcasAberto = ref(true);
const precoAberto = ref(true);
const precoMin = ref("");
const precoMax = ref("");
const bigArray = ref([
    {
      titulo: "material",
      funcao: () => {
        testeMaterial.value = [];
        FiltrosStore.material = [];
        materialAberto.value = false;
      },
      aberto: materialAberto,
      model: testeMaterial,
      array: [
        {
          nome: "alumínio",
          value: "alumínio",
        },
        {
          nome: "Silício Monocristalino",
          value: "Silício Monocristalino",
        },
        {
          nome: "Silício Policristalino",
          value: "Silício Policristalino",
        },
        {
          nome: "Células de Silício Amorfo",
          value: "Células de Silício Amorfo",
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
          nome: "900W",
          value: "900",
        },
        {
          nome: "500W",
          value: "500",
        },
        {
          nome: "400W",
          value: "400",
        },
        {
          nome: "800W",
          value: "800",
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

  return {bigArray, filtroPreco, materialAberto, potenciaAberto, marcasAberto, precoAberto, precoMin, precoMax};})
