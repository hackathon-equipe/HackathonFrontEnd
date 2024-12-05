import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useAuthStore } from '@/stores/auth'


export const useComentarioStore = defineStore('comentario', () => {
  const useAuth=useAuthStore()
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
      function addComentario(textExelencia,quantidadeEstrelas, textComentario) {
        if(!useAuth.loggedIn){
        comentarios.value.push({ id:((comentarios.value[comentarios.value.length-1]).id)+1, nomeUser:useAuth.user.name , exelencia:textExelencia, estrelas:quantidadeEstrelas, comentario:textComentario })
      }
    else{
      alert("Para comentar é necessário realizar o login")
    }}
    

  return { comentarios, addComentario }
})
