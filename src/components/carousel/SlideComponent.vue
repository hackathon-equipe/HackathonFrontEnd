<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const props = defineProps({
  img: String,
  nome: String,
  preco: String,
  parcelas: String
})
const imgSrc = computed(() => {
  return new URL(`../../assets/images/${props.img}.png`, import.meta.url).href
})
function formatarPreco(numero) {
    return numero.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}
</script>
<template>
  <router-link class="link" :to="`${'produto/' + props.img}`">
  <div class="tudo">
    <div class="img">
      <img class="oi" :src="imgSrc" />
    </div>
    <div class="informacoes">
      <span class="nome">{{ nome }}</span>
      <img class="oii" src="@/assets/images/estrelas.png" />
      <span class="preco">{{ formatarPreco(preco) }}</span>
      <span class="parcelas"> {{ parcelas }}</span>
    </div>
  </div>
  </router-link>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.link{
  text-decoration: none;
  color:black
}
.informacoes {
  text-align: left;
}
.img {
  height: 250px;
  max-width: 270px;
  margin-bottom: 20px;
}
.tudo {
  border: 1px solid #d9d9d9;
  border-radius: 25px;
  height: 460px;
  padding: 30px 30px;
}
.oi {
  width: 100%;
  max-height: 250px;
}
.oii {
  width: 100px;
}
span {
  display: block;
  font-family: 'Poppins', sans-serif;
}
.nome {
  font-size: 16px;
}
.preco {
  font-weight: bold;
  font-size: 20px;
}
.parcelas {
  font-size: 12px;
}
</style>
