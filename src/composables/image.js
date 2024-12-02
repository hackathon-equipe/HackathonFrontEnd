import { ref} from "vue";
import ImageService from "@/service/image";

const imagem = new ImageService();
const message = ref("");
const authToken = localStorage.getItem("psg_auth_token");



export async function baixarImagem( image) {
  console.log(`', ${image}`)
    if (!image) {
      console.warn("Nenhuma imagem selecionada.");
      return '';
    }
  
    const formData = new FormData();
    formData.append("file", image);
    console.log(formData)
  
    try {
      const response = await imagem.AdcionarImage(formData, authToken);
  console.log(response)
      console.log('Resposta da API:', response); 
      if (response && response.attachment_key) {
        message.value = "Imagem enviada com sucesso!";
        console.log('ID da imagem:', response.attachment_key); 
        return response.attachment_key; 
      } else {
        console.error("Erro no upload da imagem: ID não encontrado na resposta.", response);
        return null;
      }
    } catch (error) {
      console.error("Erro ao enviar a imagem:", error);
      return null;
    }
  }

export async function deletarFotoAntiga(user) {
  if (user.foto ) {
    console.log(user.foto)
    try {
      const response = await imagem.DeletarImagem(user.foto.id, authToken);
      console.log("Foto antiga excluída:", response);
    } catch (error) {
      console.error("Erro ao excluir foto antiga:", error);
    }
  }
}