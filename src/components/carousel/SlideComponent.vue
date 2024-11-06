<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const props = defineProps({
  img: String,
  nome: String,
  preco: String,
  parcelas: String,
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
  <router-link class="link" :to="{ name: 'produto', params: { id: props.img } }">
  <div class="tudo">
    <div class="img">
      <img class="oi" :src="imgSrc" />
    </div>
    <div class="informacoes">
      <span class="nome">{{ nome }}</span>

      <img class="oii" src="@/assets/images/estrelas.png" width="80px"/>
      <span class="preco">{{ formatarPreco(preco) }}</span>
      <span class="parcelas"> {{ parcelas }}</span>
    </div>
  </div>
  </router-link>
</template>
<style scoped>
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
.img{
  display: flex;
  justify-content: center;
  align-items: center;
}
.oi {
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 250px;
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
