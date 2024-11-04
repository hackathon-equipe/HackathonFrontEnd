import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useProdutosStore } from '@/stores/produtosStore'
import { useRoute } from 'vue-router' // Importar useRoute

const ProdutosStore = useProdutosStore()

export const useFiltroStore = defineStore('filtro', () => {
  const precoMin = ref('')
  const precoMax = ref('')
  const ordem = ref('relevância')
  const pesquisa = ref('')
  const material = ref([])
  const potencia = ref([])
  const marca = ref([])
  
  const route = useRoute() // Usar useRoute para acessar a rota

  const filtro = computed(() => {
    function filterAndSort(
      produtos,
      filtredMateriais,
      filtredPotencia,
      filtredMarcas,
      minPrice,
      maxPrice,
      sortOrder,
      pesquisa,
      categoria // Adicionar categoria como parâmetro
    ) {
      const newFiltredMateriais = new Set(filtredMateriais)
      let arrayFiltrada = produtos

      // Filtrar produtos pela categoria
      if (categoria && categoria !== 'all' && categoria !== 'promocoes' ) {
        arrayFiltrada = arrayFiltrada.filter(item => item.categoria === categoria)
      }
      if (categoria == 'promocoes' ) {
        arrayFiltrada = arrayFiltrada.filter(item => item.promocao == true)
      }
      // Filtrando produtos com base em materiais
      if (filtredMateriais.length !== 0) {
        arrayFiltrada = arrayFiltrada.filter(item =>
          item.material.some(element => newFiltredMateriais.has(element))
        )
      }
      // Filtrando produtos com base em potência
      if (filtredPotencia.length !== 0) {
        arrayFiltrada = arrayFiltrada.filter(item => filtredPotencia.includes(String(item.potencia)))
      }
      // Filtrando produtos com base em marcas
      if (filtredMarcas.length !== 0) {
        arrayFiltrada = arrayFiltrada.filter(item => filtredMarcas.includes(item.marca))
      }
      // Filtrando produtos com base no preço
      if (minPrice !== '' && maxPrice !== '') {
        arrayFiltrada = arrayFiltrada.filter(
          item => item.preco >= minPrice && item.preco <= maxPrice
        )
      } else if (minPrice !== '') {
        arrayFiltrada = arrayFiltrada.filter(item => item.preco >= minPrice)
      } else if (maxPrice !== '') {
        arrayFiltrada = arrayFiltrada.filter(item => item.preco <= maxPrice)
      }
      // Pesquisa
      if (pesquisa !== '') {
        const normalizedPesquisa = pesquisa.toLowerCase();
        arrayFiltrada = arrayFiltrada.filter(item =>
          item.nome.toLowerCase().includes(normalizedPesquisa)
        );
      }

      // Ordenando produtos
      if (sortOrder === 'menorPreco') {
        arrayFiltrada.sort((a, b) => a.preco - b.preco)
      } else if (sortOrder === 'maiorPreco') {
        arrayFiltrada.sort((a, b) => b.preco - a.preco)
      } else if (sortOrder === 'vendas') {
        arrayFiltrada.sort((a, b) => b.qntdVendas - a.qntdVendas)
      }
      return arrayFiltrada
    }

    // Extraindo a categoria da rota
    const categoria = ref(route.params.categoria)// Assumindo que a categoria está nos parâmetros da rota

    return filterAndSort(
      ProdutosStore.produtos,
      material.value,
      potencia.value,
      marca.value,
      precoMin.value,
      precoMax.value,
      ordem.value,
      pesquisa.value,
      categoria.value, // Passando a categoria para a função de filtragem
    )
  })
  
  return { precoMin, precoMax, material, potencia, marca, ordem, filtro, pesquisa }
})
