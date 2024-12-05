import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import AvaliacaoService from '@/service/avaliacoes'

const avaliacaoService = new AvaliacaoService()
const authToken = localStorage.getItem('psg_auth_token');

export const useComentarioStore = defineStore('comentario', () => {
  const useAuth = useAuthStore()

  const comentarios = ref([])

  // Função para carregar as avaliações
  const carregarAvaliacoes = async () => {
    comentarios.value = await avaliacaoService.BuscarTodosAsAvaliacoes();
  };

  // Função para postar um novo comentário
  const postarComentario = async (comentario) => {
    if (useAuth.loggedIn) {
      try {
        // Adiciona a avaliação
        await avaliacaoService.AdcionarAvaliacao(comentario);
        await carregarAvaliacoes(); // Recarrega os comentários do banco
      } catch (error) {
        console.error('Erro ao postar comentário:', error);
        throw error;
      }
    } else {
      alert("Para comentar é necessário realizar o login");
    }
  };

  // Função para adicionar um comentário manualmente (sem passar pela API)
  const addComentario = async ( quantidadeEstrelas, textComentario, produtoId) => {
    const comentario = {
      usuario: useAuth.user.id,
      nota: quantidadeEstrelas,
      comentario: textComentario,
      produto: produtoId // Coloque o ID do produto aqui, se necessário
    };
    
    // Chama a função para postar o comentário (API)
    await postarComentario(comentario);

    // Atualiza os comentários manualmente
    comentarios.value.push({
      id: comentarios.value.length > 0 ? comentarios.value[comentarios.value.length - 1].id + 1 : 1,
      nomeUser: useAuth.user.name,
      exelencia: textExelencia,
      estrelas: quantidadeEstrelas,
      comentario: textComentario
    });
  };

  const mediaProdutos = (id) => {
    const comentariosProduto = comentarios.value.filter(comentario => comentario.produto.id == id);
    if (comentariosProduto.length === 0) return 0;  // Evita divisão por zero
  
    const somaNotas = comentariosProduto.reduce((acumulador, comentario) => acumulador + comentario.nota, 0);
    return somaNotas / comentariosProduto.length;
  };

  return { comentarios, addComentario, carregarAvaliacoes, postarComentario, mediaProdutos }
});
