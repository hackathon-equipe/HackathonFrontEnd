import { ref} from "vue";
import ImageService from "@/service/image";

const imagem = new ImageService();
const message = ref("");
const file = ref(null);  // Salvar o arquivo diretamente aqui
const authToken = localStorage.getItem("psg_auth_token");

export async function baixarImagem( image) {
    if (!image.value) {
      console.warn("Nenhuma imagem selecionada.");
      return null;
    }
  
    const formData = new FormData();
    formData.append("file", image);
  
    try {
      // Chama a função AdcionarImage e espera pela resposta completa
      const response = await imagem.AdcionarImage(formData, authToken);
  
      console.log('Resposta da API:', response);  // Verifique a resposta da API no console
  
      // Verifica se a resposta contém o ID
      if (response && response.attachment_key) {
        message.value = "Imagem enviada com sucesso!";
        console.log('ID da imagem:', response.attachment_key);  // Exibe o ID da imagem
        return response.attachment_key;  // Retorna o ID da imagem
      } else {
        console.error("Erro no upload da imagem: ID não encontrado na resposta.", response);
        return null;
      }
    } catch (error) {
      console.error("Erro ao enviar a imagem:", error);
      return null;
    }
  }