<script setup>
import { onMounted, ref } from 'vue';
const props = defineProps(['DadosUser'])
const usuario = ref({
    name: "",
    email: "",
    telefone: { ddd: "", numero: "" },
    senha: "",
    senhaConfirmacao: "",
    foto: "",
  });

  onMounted(() =>{
    usuario.value = props.DadosUser
  })

</script>

<template>
 <div class="perfil-info">
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
</template>

<style scoped>

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

</style>