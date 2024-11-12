import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useComentarioStore = defineStore('comentario', () => {
    const comentarios = ref([
        {
          nomeUser:'Vini',
          exelencia:'Exelente!',
          estrelas:'5',
          comentario:'Painel solar muito grande, recomendo pela qualidade.'
        },
        {
          nomeUser:'Vini',
          exelencia:'Exelente!',
          estrelas:'5',
          comentario:'Painel solar muito grande, recomendo pela qualidade.'
        },
        {
          nomeUser:'Vini',
          exelencia:'Exelente!',
          estrelas:'5',
          comentario:'Painel solar muito grande, recomendo pela qualidade.'
        },
        {
          nomeUser:'Vini',
          exelencia:'Exelente!',
          estrelas:'5',
          comentario:'Painel solar muito grande, recomendo pela qualidade.'
        }
      ])
      function addComentario(nome,textExelencia,quantidadeEstrelas, textComentario) {
        comentarios.value.push({ id:((comentarios.value[comentarios.value.length-1]).id)+1, nomeUser:nome, exelencia:textExelencia, estrelas:quantidadeEstrelas, comentario:textComentario })
      }
    

  return { comentarios, addComentario }
})
