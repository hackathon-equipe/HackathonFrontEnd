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

async updateUserData(id, userData, token) {
  try {
    const response = await axios.patch(`/usuarios/${id}/`, userData, {
      headers: {
        Authorization: `Bearer ${token}`, // Adiciona o token ao cabeçalho
      },
    });
    console.log("Dados do usuário atualizados com sucesso:", response.data);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar dados do usuário: ${token}, error,` );
    return null;
  }
}

}


