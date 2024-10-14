import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFiltroStore = defineStore('filtro', () => {
  const precoMin = ref('')
  const precoMax = ref('')
  const ordem = ref('')
  const pesquisa= ref('')
  const material = ref([])
  const potencia = ref([])
  const marca = ref([])

  const produtos = [
    {
      nome: 'Kit Energia Solar 1,14kWp 570W',
      imageUrl: 'placa',
      preco: 1000.0,
      material: ['aço'],
      potencia: 500,
      marca: 'elgin',
      parcelas: 'em até 10x de R$ 100,00',
      qntdVendas: 1,
      VerMais: {
        CARACTERÍSTICAS: 'Economia Imediata Certificado pelo INMETRO Resistente'
      }
    },
    {
      nome: 'Painel Solar 450W Monocristalino Half-Cell',
      imageUrl: 'placa2',
      preco: 1000.0,
      parcelas: 'em até 10x de R$ 100,00',
      material: ['ferro'],
      potencia: 100,
      marca: 'elgin',
      qntdVendas: 2,
      VerMais: {
        CARACTERÍSTICAS: 'Economia Imediata Certificado pelo INMETRO Resistente'
      }
    },
    {
      nome: 'Cabo Solar 4mm 30M Preto',
      imageUrl: 'caboSolar',
      preco: 1000.0,
      parcelas: 'em até 10x de R$ 100,00',
      material: ['aço'],
      potencia: 400,
      marca: 'weg',
      qntdVendas: 3,
      VerMais: {
        CARACTERÍSTICAS: 'Economia Imediata Certificado pelo INMETRO Resistente'
      }
    },
    {
      nome: 'Kit Energia Solar 1,14kWp 570W',
      imageUrl: 'estruturaSolar',
      preco: 2000.0,
      parcelas: 'em até 10x de R$ 100,00',
      material: ['ferro'],
      potencia: 500,
      marca: 'weg',
      qntdVendas: 2,
      VerMais: {
        CARACTERÍSTICAS: 'Economia Imediata Certificado pelo INMETRO Resistente'
      }
    },
    {
      nome: 'Kit Energia Solar 1,14kWp 570W',
      imageUrl: 'placa3',
      preco: 2000.0,
      parcelas: 'em até 10x de R$ 100,00',
      material: ['aço'],
      potencia: 200,
      marca: 'elgin',
      qntdVendas: 1,
      VerMais: {
        CARACTERÍSTICAS: 'Economia Imediata Certificado pelo INMETRO Resistente'
      }
    },
    {
      nome: 'Kit Energia Solar 1,14kWp 570W',
      imageUrl: 'placa',
      preco: 1000.0,
      parcelas: 'em até 10x de R$ 100,00',
      material: ['ferro'],
      potencia: '900',
      marca: 'weg',
      qntdVendas: 3,
      VerMais: {
        descricao: 'Caixa de Conexão IP 68 com 3 diodos de by-pass'
      }
    }
  ]

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
        arrayFiltrada = arrayFiltrada.filter((item) => filtredPotencia.includes(item.potencia))
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
      produtos,
      material.value,
      potencia.value,
      marca.value,
      precoMin.value,
      precoMax.value,
      ordem.value,
      pesquisa.value
    )
  })
  return { precoMin, precoMax, material, potencia, marca, produtos, ordem, filtro, pesquisa}
})
