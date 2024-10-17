import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useProdutosStore } from '@/stores/produtosStore'
const ProdutosStore = useProdutosStore()

export const useFiltroStore = defineStore('filtro', () => {
  const precoMin = ref('')
  const precoMax = ref('')
  const ordem = ref('relevância')
  const pesquisa= ref('')
  const material = ref([])
  const potencia = ref([])
  const marca = ref([])

  const filtro = computed(() => {
    function filterAndSort(
      produtos,
      filtredMateriais,
      filtredPotencia,
      filtredMarcas,
      minPrice,
      maxPrice,
      sortOrder,
      pesquisa
    ) {
      const newFiltredMateriais = new Set(filtredMateriais)
      let arrayFiltrada = produtos
      // Filtrando produtos com base em materiais
      if (filtredMateriais.length != 0) {
        arrayFiltrada = produtos.filter((item) =>
          item.material.some((element) => newFiltredMateriais.has(element))
        )
      }
      // Filtrando produtos com base em potência
      if (filtredPotencia.length != 0) {
        arrayFiltrada = arrayFiltrada.filter((item) => filtredPotencia.includes(String(item.potencia)))
      }
      // Filtrando produtos com base em marcas
      if (filtredMarcas.length != 0) {
        arrayFiltrada = arrayFiltrada.filter((item) => filtredMarcas.includes(item.marca))
      }
      // Filtrando produtos com base no preço
      if (minPrice != '' && maxPrice != '') {
        arrayFiltrada = arrayFiltrada.filter(
          (item) => item.preco >= minPrice && item.preco <= maxPrice
        )
      } else if (minPrice != '' ) {
        arrayFiltrada = arrayFiltrada.filter((item) => item.preco >= minPrice)
      } else if (maxPrice != '' ) {
        arrayFiltrada = arrayFiltrada.filter((item) => item.preco <= maxPrice)
      }
      //Pesquisa
      if (pesquisa != '') {
        const normalizedPesquisa = pesquisa.toLowerCase();
        arrayFiltrada = arrayFiltrada.filter((item) =>
          item.nome.toLowerCase().includes(normalizedPesquisa) // Supondo que você está filtrando pelo nome do produto
        );
      }

      // Ordenando produtos
      if (sortOrder == 'menorPreco') {
        arrayFiltrada.sort((a, b) => a.preco - b.preco)
        console.log('menorPreco')
      } else if (sortOrder == 'maiorPreco') {
        arrayFiltrada.sort((a, b) => b.preco - a.preco)
        console.log('maiorPreco')
      } else if (sortOrder == 'vendas') {
        arrayFiltrada.sort((a, b) => b.qntdVendas - a.qntdVendas)
      }
      console.log(arrayFiltrada)
      return arrayFiltrada
    }
    return filterAndSort(
      ProdutosStore.produtos,
      material.value,
      potencia.value,
      marca.value,
      precoMin.value,
      precoMax.value,
      ordem.value,
      pesquisa.value
    )
  })
  return { precoMin, precoMax, material, potencia, marca, ordem, filtro, pesquisa}
})
