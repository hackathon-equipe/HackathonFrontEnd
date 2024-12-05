<script setup>
import { ref } from 'vue';
const props = defineProps({
  images: Array
})

const emit = defineEmits(['selecionarImage'])
function selecionarImagem(imagem) {
  emit('selecionarImage', imagem) // Emitindo o evento com a imagem selecionada
  console.log(imagem)
  selectedImage.value = imagem.id; 
}
const vazio = props.images.length == 1 ? 3 : props.images.length == 2 ? 2 :props.images.length == 3 ? 1:0
const selectedImage = ref(props.images.length > 0 ? props.images[0].id : null);

// Emite o evento com a primeira imagem ao carregar o componente
if (props.images.length > 0) {
  emit('selecionarImage', props.images[0]);
}

</script>
<template>
  <div class="imgs">
    <div v-for="image in props.images" :key="image.id" :class="{ selectTrue: selectedImage === image.id }">
      <div class="img-pqn">
      <img :src="image.file" @click="selecionarImagem(image)" /></div>
    </div>
      <div v-for="n in vazio" :key="n" class="img-pqn " id="disabilitado"></div>
  </div>

  <!-- <div class="img-pqn" v-if="imagem[0]"><img :src="imagem[0].file" /></div>
        <div class="img-pqn" v-if="imagem[1]"><img :src="imagem[1].file" /></div>
        <div class="img-pqn disabilitado" v-else></div>
        <div class="img-pqn" v-if="imagem[2]"><img :src="imagem[2].file" /></div>
        <div class="img-pqn disabilitado" v-else></div>
        <div class="img-pqn" v-if="imagem[3]"><img :src="imagem[3].file" /></div>
        <div class="img-pqn disabilitado" v-else></div>
      </div> -->
</template>
<style scoped>
.imgs {
  display: flex;
  justify-content: space-between;
  width: 35vw;
  height: 15vh;
  margin-top: 1vw;
}
.imgs .img-pqn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8vw;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  height: 100%;
  cursor: pointer;

}

#disabilitado {
  background-color: #dfdfdfa1;
  cursor: not-allowed;
}

.img-pqn img {

  padding: 15px;
  height: 100%;
}

.selectTrue{
  border: 2px solid #d9d9d9;
  border-radius: 20px;
}
</style>
