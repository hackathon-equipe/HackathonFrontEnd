<script setup>
import {ref} from 'vue'
import { useComentarioStore } from '@/stores/comentarios'
const ComentarioStore = useComentarioStore()
const openAdd = ref(false)
const nome = ref("")
const textExelencia = ref("")
const quantidadeEstrelas =  ref("")
const textComentario = ref("")

</script>
<template>
    <div @click="openAdd=true" class="comentario-button"><button>+</button> <span>Faça seu comentário </span></div> 
    <div class="modal-overlay"  v-if="openAdd">
      <div class="modal-content">
    <form @submit.prevent="ComentarioStore.addComentario(nome,textExelencia,quantidadeEstrelas,textComentario)">
      <div>
        <label for="nome">Nome do usuário:</label>
        <input v-model="nome" type="text" id="nome" required />
      </div>

      <div>
        <label for="exelencia">Exelência:</label>
        <input v-model="textExelencia" type="text" id="exelencia" required />
      </div>

      <div>
        <label for="estrelas">Quantidade de Estrelas:</label>
        <input v-model="quantidadeEstrelas" type="number" id="estrelas" min="1" max="5" required />
      </div>

      <div>
        <label for="comentario">Comentário:</label>
        <input v-model="textComentario" type="text" id="comentario" required />
      </div>

      <button type="submit">Adicionar Comentário</button>
    </form>
    <button class="close-modal" @click="openAdd=false">Fechar</button>
    </div>  
  </div> 
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital= ref(false)wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Fundo semitransparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.close-modal {
  background-color: red;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}






.comentario-button{
  margin-left: calc(15vw - 30px);
  display: flex;
  align-items: center;
  margin-top: 20px;
  background-color: transparent;
  border: none;
}
.comentario-button button{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #29375B;
  border-color: #29375B;
  color: rgb(255, 255, 255);
  margin-right: 11px;
}
.comentario-button span{
  font-weight:650;
}
</style>
