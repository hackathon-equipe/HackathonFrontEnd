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
  estrelas:Number,
  quantidade:Number
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
      <div class="nome-container">
        <span class="nome">{{ nome }}</span>
        <span class="detalhes">ver detalhes</span>
      </div>
    </div>
    <div class="informacoes">
      <span class="quantidade">Quantidade: {{ quantidade }}</span>
    </div>
    <div class="informacoes">
      <svg class="svg" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_915_4649)">
        <path d="M14.2499 7.91674L11.0832 4.75008M1.979 17.0209L4.6583 16.7232C4.98564 16.6868 5.14932 16.6687 5.3023 16.6191C5.43803 16.5752 5.56719 16.5131 5.68629 16.4346C5.82053 16.3461 5.93698 16.2296 6.16987 15.9967L16.6249 5.54174C17.4993 4.66729 17.4993 3.24953 16.6249 2.37508C15.7504 1.50063 14.3326 1.50063 13.4582 2.37507L3.00321 12.83C2.77031 13.0629 2.65386 13.1794 2.56534 13.3136C2.4868 13.4327 2.42472 13.5619 2.38079 13.6976C2.33126 13.8506 2.31307 14.0143 2.2767 14.3416L1.979 17.0209Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_915_4649">
        <rect width="19" height="19" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.6667 4.75016V4.11683C12.6667 3.23008 12.6667 2.7867 12.4941 2.44801C12.3423 2.15009 12.1001 1.90787 11.8022 1.75607C11.4635 1.5835 11.0201 1.5835 10.1333 1.5835H8.86667C7.97992 1.5835 7.53654 1.5835 7.19785 1.75607C6.89993 1.90787 6.65771 2.15009 6.50591 2.44801C6.33333 2.7867 6.33333 3.23008 6.33333 4.11683V4.75016M7.91667 9.10433V13.0627M11.0833 9.10433V13.0627M2.375 4.75016H16.625M15.0417 4.75016V13.6168C15.0417 14.947 15.0417 15.612 14.7828 16.1201C14.5551 16.5669 14.1918 16.9303 13.7449 17.158C13.2369 17.4168 12.5718 17.4168 11.2417 17.4168H7.75833C6.42821 17.4168 5.76315 17.4168 5.25511 17.158C4.80822 16.9303 4.44489 16.5669 4.21719 16.1201C3.95833 15.612 3.95833 14.947 3.95833 13.6168V4.75016" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          
    </div>
  </div>
  </router-link>
</template>
<style scoped>
.detalhes{
  color:#545454;
  text-decoration: underline;
  font-size: 14px;
}
.nome-container{
  font-weight: 600;
  margin-left: 30px;
}
.svg{
  margin-right: 10px;
}
.link{
  text-decoration: none;
  color:black
}
.informacoes {
  text-align: left;
}

.tudo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  padding: 30px 30px;
  transition: .3s;
  border-bottom: 1px solid #d9d9d9;
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
}

.img img{
  height: 60px;
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
</style>
