<script setup>
// import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
// const route = useRoute()
const props = defineProps({
  id:Number,
  nome: String,
  img: String,
  preco: String,
  parcelas: Number,
  estrelas:Number
})
// const imgSrc = computed(() => {
//   return new URL(`../../assets/images/${props.img}.png`, import.meta.url).href
// })
function formatarPreco(numero) {
    return numero.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}
</script>
<template>
  <router-link class="link" :to="{ name: 'produto', params: { id: id } }">
  <div class="tudo">
    <div class="img">
      <img class="oi" :src="img" />
    </div>
    <div class="informacoes">
      <span class="nome">{{ nome }}</span>
      <div class="estrelas">
        <div v-for="item in Math.round(estrelas)" :key="item">
          <svg width="20" height="20" viewBox="0 0 286 272" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M143 0L176.677 103.647H285.658L197.491 167.705L231.168 271.353L143 207.295L54.8322 271.353L88.5093 167.705L0.341522 103.647H109.323L143 0Z"
              fill="#F4AA09" />
          </svg>
        </div>  
        <div v-for="item in ( 5 - Math.round(estrelas))" :key="item">
          <svg width="20" height="20" viewBox="0 0 286 272" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M143 0L176.677 103.647H285.658L197.491 167.705L231.168 271.353L143 207.295L54.8322 271.353L88.5093 167.705L0.341522 103.647H109.323L143 0Z"
              fill="#D9D9D9" />
          </svg>
        </div>  
      </div>
      <span class="preco">{{ formatarPreco(Number(preco)) }}</span>
      <span class="parcelas"> {{parcelas}}</span>
    </div>
  </div>
  </router-link>
</template>
<style scoped>
.link{
  text-decoration: none;
  color:black;
}
.informacoes {
  text-align: left;
}

.tudo {
  border: 1px solid #d9d9d9;
  border-radius: 25px;
  height: 460px;
  padding: 30px 30px;
  transition: .3s;
}

.tudo:hover{
  transform: translate3d(0, -3px, 0) scale(1.01);
  transition: .3s;
  /* border: 1px solid #3f3b3b; */
  box-shadow: 0 0 4px 1px #d9d9d9;
}
  
.img{
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 270px;
  margin: auto;
  height: 250px;
}

.img img{
  height: 90%;
}

.estrelas {
  display: flex;
  max-height: 250px;
  margin-top: 3px;
}
span {
  display: block;
  font-family: 'Poppins', sans-serif;
}
.nome {
  font-size: 16px;
}
.preco {
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 20px;
}
.parcelas {
  font-size: 12px;
}
@media (max-width: 768px) {
  .img img{
    height: 50%;
  }
  .nome{
    overflow: hidden;
    text-wrap: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
  }
  .tudo{
    width: 180px;
    height: 100%;
    padding: 15px;
  }
  .parcelas {
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
