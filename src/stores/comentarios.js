// import { ref } from 'vue'
// import { defineStore } from 'pinia'
// import { useAuthStore } from '@/stores/auth'
// import AvaliacaoService from '@/service/avaliacoes'

// const avaliacaoService = new AvaliacaoService()
// const authToken = localStorage.getItem('psg_auth_token');
// export const useComentarioStore = defineStore('comentario', () => {
//   const useAuth=useAuthStore()

//     const comentarios = ref([])

//     const carregarAvaliacoes = async () => {
//       comentarios.value = await avaliacaoService.BuscarTodosAsAvaliacoes();
//       console.log(comentarios.value)
//   };


//   const postarComentario = async (comentario) => {
//     try {
//       const response = await avaliacaoService.AdcionarAvaliacao(comentario, authToken);
//       comentarios.value.push(response.data);
//       return response.data;
//     } catch (error) {
//       console.error('Erro ao postar comentário:', error);
//       throw error; // Repassa o erro para tratamento no componente
//     }
//   };
  
  

//     const comentariostESTE = ref([
//       {
//         id: 1,
//         nomeUser: 'Vini',
//         exelencia: 'Exelente!',
//         estrelas: 3,
//         comentario: 'Painel solar muito grande, recomendo pela qualidade.'
//       },
//       {
//         id: 2,
//         nomeUser: 'Vini',
//         exelencia: 'Exelente!',
//         estrelas: 5,
//         comentario: 'Painel solar muito grande, recomendo pela qualidade.'
//       },
//       {
//         id: 3,
//         nomeUser: 'Vini',
//         exelencia: 'Exelente!',
//         estrelas: 5,
//         comentario: 'Painel solar muito grande, recomendo pela qualidade.'
//       },
//       {
//         id: 4,
//         nomeUser: 'Vini',
//         exelencia: 'Exelente!',
//         estrelas: 3,
//         comentario: 'Painel solar muito grande, recomendo pela qualidade.'
//       }
//     ])
//       function addComentario(textExelencia,quantidadeEstrelas, textComentario) {
//         if(useAuth.loggedIn){
//         comentarios.value.push({ id:((comentarios.value[comentarios.value.length-1]).id)+1, nomeUser:useAuth.user.name , exelencia:textExelencia, estrelas:quantidadeEstrelas, comentario:textComentario })
//       }
//     else{
//       alert("Para comentar é necessário realizar o login")
//     }}
    

//   return { comentarios, addComentario, carregarAvaliacoes, postarComentario }
// })


import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import AvaliacaoService from '@/service/avaliacoes'

const avaliacaoService = new AvaliacaoService()
const authToken = localStorage.getItem('psg_auth_token');
export const useComentarioStore = defineStore('comentario', () => {
  const useAuth=useAuthStore()

    const comentarios = ref([])

    const carregarAvaliacoes = async () => {
      comentarios.value = await avaliacaoService.BuscarTodosAsAvaliacoes();
      console.log(comentarios.value)
  };


  const postarComentario = async (comentario) => {
    try {
      const response = await avaliacaoService.AdcionarAvaliacao(comentario, authToken);
      comentarios.value.push(response.data);
      return response.data;
    } catch (error) {
      console.error('Erro ao postar comentário:', error);
      throw error; // Repassa o erro para tratamento no componente
    }
  };

  const comentariosTeste = ref([
    {
      id: 1,
      nomeUser: 'Carlos Silva',
      exelencia: 'Ótimo!',
      estrelas: 4,
      comentario: 'Produto de qualidade, entrega rápida e bem embalado.'
    },
    {
      id: 2,
      nomeUser: 'Fernanda',
      exelencia: 'Incrível!',
      estrelas: 5,
      comentario: 'Superou minhas expectativas. Recomendo a todos!'
    },
    {
      id: 3,
      nomeUser: 'João',
      exelencia: 'Bom!',
      estrelas: 3,
      comentario: 'Cumpre o que promete, mas esperava mais funcionalidades.'
    },
    {
      id: 4,
      nomeUser: 'Ana',
      exelencia: 'Excelente!',
      estrelas: 5,
      comentario: 'Ótimo custo-benefício. Atendimento ao cliente excelente.'
    }
  ]);
  
      function addComentario(textExelencia,quantidadeEstrelas, textComentario) {
        if(!useAuth.loggedIn){
         comentariosTeste.value.push({ id:((comentariosTeste.value[comentariosTeste.value.length-1]).id)+1, nomeUser:"Júlia Fuck" , exelencia:textExelencia, estrelas:quantidadeEstrelas, comentario:textComentario })
      }
    else{
      alert("Para comentar é necessário realizar o login")
    }}
    

  return { comentarios,  comentariosTeste, addComentario, carregarAvaliacoes, postarComentario }
})
