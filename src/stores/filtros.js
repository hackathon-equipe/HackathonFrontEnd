//IMPORTAR EM OUTRO LOCAL PARA FUNCIONAR
import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter', () => {
  //   const filtredArray = ['livro']
  //   const publication = { category: 'livro' }
  //   const num=3
  //   const filtredCategories = ['livro', 'artigo']
  //   const filtredDates = [1,2,3,4,5,6,7]
  //   function filterByCategories() {
  //     console.log(filtredCategories.include(publication.category))
  //     return filtredCategories.include(publication.category)
  //   }
  //   function filterByDate(publication, minDate, maxDate) {
  //     return publication.date >= minDate && publication.date <= maxDate
  //   }
  //   function filtredPublications() {
  //     filtredArray = usePublicationStore.entirePublications.filter((publication) => {
  //       filterByCategories(publication, filtredCategories)
  //       filterByDate(publication, minDate, maxDate)
  //     })
  //   }
})


  const produtos = [
    {
      nome: 'Kit Energia Solar 1,14kWp 570W',
      imageUrl: 'placa',
      preco: 1000.00,
      material: ['aço'],
      potencia: 500,
      marca: 'elgin',
      parcelas: 'em até 10x de R$ 100,00',
      qntdVendas: 2,
      VerMais: {
        'CARACTERÍSTICAS': 'Economia Imediata Certificado pelo INMETRO Resistente'
      }
    },
    {
      nome: 'Painel Solar 450W Monocristalino Half-Cell',
      imageUrl: 'placa2',
      preco:  1000.00,
      parcelas: 'em até 10x de R$ 100,00',
      material: ['ferro'],
      potencia: 100,
      marca: 'elgin',
      qntdVendas: 3,
      VerMais: {
        'CARACTERÍSTICAS': 'Economia Imediata Certificado pelo INMETRO Resistente'
      }
    },
    {
      nome: 'Cabo Solar 4mm 30M Preto',
      imageUrl: 'caboSolar',
      preco:  1000.00,
      parcelas: 'em até 10x de R$ 100,00',
      material: ['aço'],
      potencia: 400,
      marca: 'weg',
      qntdVendas: 4,
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
      preco:  2000.00,
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
      preco:  1000.00,
      parcelas: 'em até 10x de R$ 100,00',
      material: ['ferro'],
      potencia: 900,
      marca: 'weg',
      qntdVendas: 3,
      VerMais: {
        'descricao': 'Caixa de Conexão IP 68 com 3 diodos de by-pass',
      }
    }
  ]
function filterByMateriais(produto, filtredMateriais) {
  const newFiltredMateriais = new Set(filtredMateriais)
  const arrayFiltrada = produto.filter((item) => (item.material.some((element) => newFiltredMateriais.has(element)) ))
  console.log('oi')
  console.log(arrayFiltrada)
  console.log('oi')
}
function filterByPotencia(produto, filtredPotencia) {
  const arrayFiltrada = produto.filter(item => filtredPotencia.includes(item.potencia) )
  console.log('oi')
  console.log(arrayFiltrada)
  console.log('oi')
}
function filterByMarca(produto, filtredMarcas) {
  const arrayFiltrada = produto.filter(item => filtredMarcas.includes(item.marca) )
  console.log('oi')
  console.log(arrayFiltrada)
  console.log('oi')
}
function filterByPrice(produto, minPrice, maxPrice) {
    const arrayFiltrada = produto.filter((item) => (item.preco >= minPrice && item.preco <= maxPrice))
    console.log(arrayFiltrada)
}
function sortByVendas() {
  produtos.sort((a, b) => b.qntdVendas - a.qntdVendas)
  console.log(produtos)
}
function sortByMenorPreco() {
  produtos.sort((a, b) => a.preco - b.preco)
  console.log('qq')
  console.log(produtos)
  console.log('qq')
}
function sortByMaiorPreco() {
  produtos.sort((a, b) => b.preco - a.preco)
  console.log('qq')
  console.log(produtos)
  console.log('qq')
}
filterByMateriais(produtos, ['aço'])
filterByPotencia(produtos, [500, 400])
filterByMarca(produtos, ['elgin'])
filterByPrice(produtos, 1999, 3000)
sortByMenorPreco() 
sortByMaiorPreco() 
sortByVendas()
