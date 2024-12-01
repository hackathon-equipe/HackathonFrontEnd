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
  const categoriaAdm = ref([])
  
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
      categoria, // Adicionar categoria como parâmetro
      categoriaAdm,
    ) {
      let arrayFiltrada = produtos

      // Filtrar produtos pela categoria
      if (categoria && categoria !== 'all' && categoria !== 'promocoes' ) {
        let categoriaAdaptada = categoria
        if (categoriaAdaptada == "placas-solares") {
          categoriaAdaptada = "Placas Solares";
        } else if (categoriaAdaptada == "kits-solares") {
          categoriaAdaptada = "Kits Solares";
        }
        arrayFiltrada = arrayFiltrada.filter(item => item.categoria.nome === categoriaAdaptada)
      }
      if (categoria == 'promocoes' ) {
        arrayFiltrada = arrayFiltrada.filter(item => item.promocao == true)
      }
      // Filtrando produtos com base em materiais
      if (filtredMateriais.length !== 0) {
        arrayFiltrada = arrayFiltrada.filter(item =>
          item.descricao && item.descricao.TipoDeCelula && filtredMateriais.some(material =>
            item.descricao.TipoDeCelula.includes(material)
          )
        );
      }
      
      // Filtrando produtos com base em potência
      if (filtredPotencia.length !== 0) {
        arrayFiltrada = arrayFiltrada.filter(item => filtredPotencia.includes(String(item.descricao.PotenciaMaxima)))
      }
      // Filtrando produtos com base em marcas
      if (filtredMarcas.length !== 0) {
        arrayFiltrada = arrayFiltrada.filter(item => filtredMarcas.includes(item.fabricante[0].nome.toLowerCase()))
      }
      // Filtrando produtos com base no preço
      if (minPrice !== '' && maxPrice !== '') {
        arrayFiltrada = arrayFiltrada.filter(
          item => Number(item.preco) >= minPrice && Number(item.preco) <= maxPrice
        )
      } else if (minPrice !== '') {
        arrayFiltrada = arrayFiltrada.filter(item => Number(item.preco) >= minPrice)
      } else if (maxPrice !== '') {
        arrayFiltrada = arrayFiltrada.filter(item => Number(item.preco) <= maxPrice)
      }
      if (categoriaAdm.length !== 0) {
        arrayFiltrada = arrayFiltrada.filter(item =>
          item.categoria && item.categoria.nome && categoriaAdm.some(catego =>
            item.categoria.nome.includes(catego)
          )
        );
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
      categoriaAdm.value,
    )
  })
  
  return { precoMin, precoMax, material, potencia, marca, ordem, filtro, pesquisa, categoriaAdm }
})
