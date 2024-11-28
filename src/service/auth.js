import axios from "axios";

export default class AuthService {
  async postUserToken(token) {
    const response = await axios.get("/usuarios/me/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data? response.data: "merda")
    return response.data;
  }

   // Método para atualizar os dados do usuário
  async updateUserData(id, userData, token) {
    try {
      // Verificar o ID do usuário e o token
      console.log("ID do usuário:", id);
      console.log("Token enviado para a atualização:", token);
      console.log("Dados enviados para atualização:", userData.foto);
      const response = await axios.patch(`/usuarios/${id}/`, userData, {
        headers: {
          Authorization: `Bearer ${token}`, // Adiciona o token ao cabeçalho
        },
      });
      console.log("Dados do usuário atualizados com sucesso:", response.data);
      return response.data;
    } catch (error) {
      // Logar os detalhes do erro, se possível
      console.error(`Erro ao atualizar dados do usuário (ID: ${id}):`, error.response?.data || error.message);
      return null;
    }
  }
  
}


