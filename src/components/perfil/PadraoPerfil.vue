<template>
    <PadraoPropagandas />
    <PadraoCaminho />
    <div class="container" v-if="!carregando">
        <AsidePerfil :usuario="usuario" @CarregarImagem="handleFileUpload" @selecionarComponente="caminho" :opcao="componenteCaminho"/>
        <PerfilInfo :DadosUser="usuario" v-if="componenteCaminho == 1" />
        <div v-if="componenteCaminho==2">oii</div>
      <!-- <div class="span-nav">
        <div class="foto">
          <img :src="useAuth.user.foto? useAuth.user.foto.url: usuario?.foto && usuario.foto.trim() ? usuario.foto : '/src/assets/images/usersemfoto.jpg'" alt="Foto de perfil">
  
  
        </div>
        <label for="file-upload" class="file"> Mudar foto </label>
        <input type="file" id="file-upload" @change="handleFileUpload($event)" />
        <div class="links">
          <ul>
            <li class="active" @click="teste= 1"><userIcon /> Meus dados</li>
            <li @click="teste = 2"><markerPinIcon /> Meus enderecos</li>
            <li @click="teste = 3"><packageIcon /> Meus pedidos</li>
            <li @click="teste = 4"><walletIcon /> Meus cupons</li>
          </ul>
        </div>
      </div> -->
      <!-- <div class="perfil-info" v-if="teste == 1">
        <div><h1>Meus Dados</h1></div>
        <div class="inputs" v-if="usuario">
          <div class="input-div">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" class="inputInteiro" v-model="usuario.name" />
          </div>
          <div class="input-div">
            <label for="email">Email:</label>
            <input type="text" class="inputInteiro" id="email" v-model="usuario.email" />
          </div>
          <div class="input-div">
            <label for="telefone">DDD:</label>
            <input type="text" id="telefone" v-model="usuario.telefone.ddd" />
          </div>
          <div class="input-div">
            <label for="wahtsapp">Número:</label>
            <input type="text" id="whatsapp" v-model="usuario.telefone.numero" />
          </div>
          <div class="input-div">
            <label for="alterarsenha">Alterar Senha:</label>
            <input type="password" id="alterarsenha" v-model="usuario.senha" />
          </div>
          <div class="input-div">
            <label for="confirmarsenha">Confirme Senha:</label>
            <input type="password" id="confirmarsenha" v-model="usuario.senhaConfirmacao" />
          </div>
        </div>
        <div class="button">
          <button @click="submitUpdate()">Salvar alteracoes</button>
        </div>
      </div>
      <div v-if="teste==2">Enderecos</div>
      <div v-if="teste == 3">Pedidos</div>
      <div v-if="teste == 4">Cupons</div> -->
    </div>
    <div v-else class="carregamento">
      <img src="/src/assets/images/LoadGif/LoadingAnimation.gif" alt="gif carregamento">
  
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import axios from "axios";
  import { useAuthStore } from "@/stores/auth";
  import ImageService from "@/service/image";
  import AuthService from "@/service/auth";
  import PadraoPropagandas from "@/components/header/propagandas/PadraoPropagandas.vue";
  import PadraoCaminho from "@/components/header/caminho/PadraoCaminho.vue";
  import AsidePerfil from "./AsidePerfil/AsidePerfil.vue";
  import PerfilInfo from "./form/PerfilInfo.vue";
  import { baixarImagem } from "@/composables/image";
  const authService = new AuthService();
  const componenteCaminho = ref(1)
  const usuario = ref({
    name: "",
    email: "",
    telefone: { ddd: "", numero: "" },
    senha: "",
    senhaConfirmacao: "",
    foto: "",
  });

  function caminho (opcao){
    componenteCaminho.value = opcao
  }

  
  const useAuth = useAuthStore();
  const imagem = new ImageService();
  const carregando = ref(false);
  const message = ref("");
  const file = ref(null);  // Salvar o arquivo diretamente aqui
  const authToken = localStorage.getItem("psg_auth_token");
  
  // Função para capturar o arquivo selecionado
  function handleFileUpload(e) {
    const target = e.target;
    if (target && target.files) {
      file.value = target.files[0];
      usuario.value.foto = URL.createObjectURL(file.value);  // Apenas para exibição local
    }
  }
  
  // Função para enviar a imagem ao backend
//   async function baixarImagem() {
//     if (!file.value) {
//       console.warn("Nenhuma imagem selecionada.");
//       return null;
//     }
  
//     const formData = new FormData();
//     formData.append("file", file.value);
  
//     try {
//       // Chama a função AdcionarImage e espera pela resposta completa
//       const response = await imagem.AdcionarImage(formData, authToken);
  
//       console.log('Resposta da API:', response);  // Verifique a resposta da API no console
  
//       // Verifica se a resposta contém o ID
//       if (response && response.attachment_key) {
//         message.value = "Imagem enviada com sucesso!";
//         console.log('ID da imagem:', response.attachment_key);  // Exibe o ID da imagem
//         return response.attachment_key;  // Retorna o ID da imagem
//       } else {
//         console.error("Erro no upload da imagem: ID não encontrado na resposta.", response);
//         return null;
//       }
//     } catch (error) {
//       console.error("Erro ao enviar a imagem:", error);
//       return null;
//     }
//   }
  
  // Função para buscar dados do usuário
  const getUserData = async () => {
    try {
      carregando.value = true;
      const response = await axios.get("/usuarios/me");
      usuario.value = response.data;
      carregando.value = false;
  
      if (!usuario.value.telefone) {
        usuario.value.telefone = { ddd: "", numero: "" };
      }
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
      carregando.value = false;
    }
  };
  
  // Função para enviar as alterações do usuário
  async function submitUpdate() {
    try {
      // Verifica se as senhas coincidem
      if (usuario.value.senha && usuario.value.senha !== usuario.value.senhaConfirmacao) {
        alert("As senhas não coincidem.");
        return;
      }
  
      // Definir o telefone, caso o usuário tenha alterado
      let telefoneId = null;
      if (usuario.value.telefone.ddd && usuario.value.telefone.numero) {
        // Se o telefone foi preenchido, criamos ou obtemos o ID do telefone
        if (!usuario.value.telefone.id) {
          const telefoneResponse = await axios.post("/telefones/", {
            ddd: usuario.value.telefone.ddd,
            numero: usuario.value.telefone.numero,
          });
          telefoneId = telefoneResponse.data.id;
        } else {
          telefoneId = usuario.value.telefone.id;
        }
      }
  
      // Envia a imagem, se houver
      let imageKey = null;
      if (file.value) {
        imageKey = await baixarImagem(file);  // Faz o upload da imagem e obtém o ID
      }
  
      console.log('Image ID:', imageKey);  // Verifica se o ID da imagem foi gerado corretamente
  
      // Cria o objeto com os dados atualizados
      const updatedUser = {
        name: usuario.value.name,
        email: usuario.value.email,
        senha: usuario.value.senha || undefined,  // Só envia senha se houver uma alteração
        foto_attachment_key: imageKey || null,  // Se não houver imagem, envia null (não undefined)
      };
  
      // Envia o ID do telefone apenas se ele foi alterado ou se um novo telefone foi criado
      if (telefoneId) {
        updatedUser.telefone = telefoneId;
      }
  
      console.log('Payload para o backend:', updatedUser); 
  
      // Envia os dados para a API para atualização do usuário
      await authService.updateUserData(useAuth.user.id, updatedUser, authToken);
      alert("Dados atualizados com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar os dados:", error.response?.data || error);
      alert("Erro ao atualizar os dados. Tente novamente.");
    }
  }
  
  
  onMounted(() => {
    getUserData();
  });
  </script>
  
  
  <style scoped>
  .active {
    padding-left: 5px;
    font-weight: 600;
  }
  .container {
    display: flex;
    gap: 80px;
    justify-content: center;
    padding: 50px 80px 200px 80px;
  }
  .span-nav {
    width: 250px;
    padding: 30px;
    border: 1px solid #ececec;
    border-radius: 25px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .span-nav .foto {
    width: 130px;
    height: 130px;
    border-radius: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #afe67e;
    margin-bottom: 30px;
  }
  
  .span-nav .foto img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }
  
  .span-nav .links {
    padding-bottom: 40px;
  }
  .span-nav ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
  }
  .span-nav ul li {
    display: flex;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid #ececec;
    padding: 0px 0px 15px 0px;
  }
  .perfil-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 720px;
  }
  .perfil-info h1 {
    font-size: 24px;
  }
  .perfil-info input {
    width: 350px;
    height: 40px;
    border: 1px solid #d9d9d9;
    border-radius: 50px;
    padding: 0px 45px;
    color: #545454;
  }
  
  .perfil-info input.inputInteiro {
    width: 720px;
  }
  .inputs {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .input-div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .button {
    display: flex;
    justify-content: center;
  }
  .button button {
    width: 280px;
    height: 50px;
    background-color: #29375b;
    color: white;
    border: 1px solid transparent;
    border-radius: 50px;
    cursor: pointer;
  }
  
  .carregamento{
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carregamento img{
    width: 15%;
  
  }
  
  input[type='file'] {
    display: none;
    cursor: pointer;
  
  }
  
  .file {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
    border-radius: 15px;
    margin-bottom: 30px;
    cursor: pointer;
  }
  </style>
  