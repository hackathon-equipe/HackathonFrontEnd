import axios from 'axios'

export default class ImageService {

  async AdcionarImage(imagem, token) {
    try {
      const { data } = await axios.post('/media/images/', imagem, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'  // Importante para envio de arquivos
        }
      });
      return data; // Retorna o objeto completo de resposta
    } catch (error) {
      console.error("Erro ao adicionar imagem:", error);
      throw error; // Repassa o erro para o chamador
    }
  }

  async DeletarImagem(id, token){
    try {
      const { data } = await axios.delete(`/media/images/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'  // Importante para envio de arquivos
        }
      });
      return data; // Retorna o objeto completo de resposta
    } catch (error) {
      console.error("Erro ao adicionar imagem:", error);
      throw error; // Repassa o erro para o chamador
    }
  }

  }

