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
    <div v-if="openAdd">
      <form>
        nome user:
        <input v-model="nome" type="text"/>
        exelencia:
        <input v-model="textExelencia" type="text"/>
      qnt estrelas : 
      <input v-model="quantidadeEstrelas" type="text"/>
      comentario : 
      <input v-model="textComentario" type="text"/>
      <button @click="ComentarioStore.addComentario(nome,textExelencia,quantidadeEstrelas,textComentario)">
        aaaaaaaaaa
      </button>
    </form>
    </div>   
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital= ref(false)wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
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
