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

const publications = {
  id: 1,
  label: 'Análise de Algoritmos Genéticos',
  link: 'http://copec.eu/congresses/intertech2014/proc/works/101.pdf',
  authors: ['1'],
  keywords: ['1', '2', '3'],
  categories: ['livro', 'artigo'],
  resume: 'Este artigo explora o uso de algoritmos genéticos na otimização de funções complexas.',
  type: '1',
  favorite: false,
  date: '02-02-22',
  likes: 3
}

const publicationss = [
  {
      id: 1,
      label: "Análise de Algoritmos Genéticos",
      link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
      authors: ["1"],
      keywords: ["1", "2", "3"],
      categories: ["9", "10"],
      resume: "Este artigo explora o uso de algoritmos genéticos na otimização de funções complexas.",
      type: "1",
      favorite: false,
      date: "03-02-21"
  },
  {
      id: 2,
      label: "Introdução à Inteligência Artificial",
      link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
      authors: ["2"],
      keywords: ["4", "5", "6"],
      categories: ["9"],
      resume: "Uma visão geral sobre os conceitos básicos e aplicações da inteligência artificial.",
      type: "2",
      favorite: false,
      date: "01-02-21"
  },
  {
      id: 3,
      label: "Aprendizado de Máquina Aplicado à Medicina",
      link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
      authors: ["13", "14"],
      keywords: ["5", "7", "8"],
      categories: ["5"],
      resume: "O artigo discute como técnicas de machine learning podem ser usadas para melhorar diagnósticos médicos.",
      type: "3",
      favorite: false,
      date: "03-02-21"
  },
  {
      id: 4,
      label: "Redes Neurais e sua Aplicação em Previsão de Mercado",
      link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
      authors: ["15", "16"],
      keywords: ["6", "9", "10"],
      categories: ["12"],
      resume: "Explora o uso de redes neurais para previsões financeiras e de mercado.",
      type: "4",
      favorite: false,
      date: "03-02-21"
  }]
const filtredCategories = ['14', '9']

function filterByCategories(publicacao, filtredCategories) {
  const newFiltredCategories = new Set(filtredCategories)
  const arrayFiltrada = publicacao.filter((publication) => (publication.categories.some((element) => newFiltredCategories.has(element)) ))
    console.log(arrayFiltrada)
}
function filterByDate(publicacao, minDate, maxDate) {
    const arrayFiltrada = publicacao.filter((publication) => (publication.date >= minDate && publicacao.date <= maxDate))
    console.log(arrayFiltrada)
    console.log('oi')
}
function filterByType(publicacao, filtredType) {
  if (filtredType == publicacao.type) {
    console.log(publicacao)
    return publication
  }
}
function filterByAuthors(publicacao, filtredAuthors) {
  const newFiltredAuthors = new Set(filtredAuthors)
  if (publicacao.authors.some((element) => newFiltredAuthors.has(element))) {
    console.log(publicacao)
  }
}
const publicacao = [
  { nome: 'Livro', data: 3 },
  { nome: 'Artigo', data: 2 },
  { nome: 'Zcdrd', data: 4 }
]
function sortByRecentDate() {
  publicacao.sort((a, b) => a.data - b.data)
  console.log(publicacao)
}
function sortByOldenDate() {
  publicacao.sort((a, b) => b.data - a.data)
  console.log(publicacao)
}
function sortByAz() {
  publicacao.sort((a, b) => a.nome.localeCompare(b.nome))
  console.log(publicacao)
}
function sortByZa() {
  publicacao.sort((a, b) => a.nome.localeCompare(b.nome))
  console.log(publicacao)
}
function sortByCurtidas() {
  publicacao.sort((a, b) => a.likes.localeCompare(b.likes))
  console.log(publicacao)
}
function sortByFavorites(publicacao) {
  if(seusFavoritos.includes(publicacao.name)){
    console.log(publicacao) 

    return { filterByCategories, filterByDate, filterByType, filterByAuthors }
}
}

filterByCategories(publicationss, filtredCategories)
filterByDate(publicationss, '02-02-21', '02-02-24')
filterByType(publications, '1')
filterByAuthors(publications, '1')
sortByRecentDate()
sortByOldenDate() 
sortByDate()
sortByAz()
sortByZa()
sortByCurtidas()
sortByFavorites(publications)
function oi(){
    console.log('oiiiiiiii')
}
oi()
