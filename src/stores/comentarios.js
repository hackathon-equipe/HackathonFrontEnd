import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useComentarioStore = defineStore('comentario', () => {
    const comentarios = ref([
      {
        id: 1,
        nomeUser: 'Vini',
        exelencia: 'Exelente!',
        estrelas: 3,
        comentario: 'Painel solar muito grande, recomendo pela qualidade.'
      },
      {
        id: 2,
        nomeUser: 'Vini',
        exelencia: 'Exelente!',
        estrelas: 5,
        comentario: 'Painel solar muito grande, recomendo pela qualidade.'
      },
      {
        id: 3,
        nomeUser: 'Vini',
        exelencia: 'Exelente!',
        estrelas: 5,
        comentario: 'Painel solar muito grande, recomendo pela qualidade.'
      },
      {
        id: 4,
        nomeUser: 'Vini',
        exelencia: 'Exelente!',
        estrelas: 3,
        comentario: 'Painel solar muito grande, recomendo pela qualidade.'
      }
    ])
      function addComentario(nome,textExelencia,quantidadeEstrelas, textComentario) {
        comentarios.value.push({ id:((comentarios.value[comentarios.value.length-1]).id)+1, nomeUser:nome, exelencia:textExelencia, estrelas:quantidadeEstrelas, comentario:textComentario })
      }
    

  return { comentarios, addComentario }
})
