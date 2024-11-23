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
          nome: "570W",
          value: "570W",
        },
        {
          nome: "555W",
          value: "555W",
        },
        {
          nome: "550W",
          value: "550W",
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
