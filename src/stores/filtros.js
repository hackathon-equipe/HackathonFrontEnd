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
      qntdVendas: 1,
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
      qntdVendas: 2,
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

function filterAndSort(produtos, filtredMateriais, filtredPotencia, filtredMarcas, minPrice, maxPrice, sortOrder) {

  const newFiltredMateriais = new Set(filtredMateriais);
  let arrayFiltrada = produtos

  // Filtrando produtos com base em materiais
  if (filtredMateriais != null) {
  arrayFiltrada = produtos.filter(item =>
    item.material.some(element => newFiltredMateriais.has(element))
  );}

  // Filtrando produtos com base em potência
  if (filtredPotencia != null) {
  arrayFiltrada = arrayFiltrada.filter(item => filtredPotencia.includes(item.potencia));
  }
  // Filtrando produtos com base em marcas
  if (filtredPotencia != null) {
  arrayFiltrada = arrayFiltrada.filter(item => filtredMarcas.includes(item.marca));
  }
  // Filtrando produtos com base no preço
  if (filtredPotencia != null) {
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
}
// Exemplo de uso
filterAndSort(produtos, null , null , null, null, null, 'maiorPreco');

