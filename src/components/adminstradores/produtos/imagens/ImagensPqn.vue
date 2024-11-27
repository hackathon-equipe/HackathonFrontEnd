<script setup>
defineProps({
  imagem: String
})
</script>
<template>
    <div class="imgs">
        <div class="img-pqn"><img :src="imagem" /></div>
        <div class="img-pqn"><img :src="imagem" /></div>
        <div class="img-pqn"><img :src="imagem" /></div>
        <div class="img-pqn"><img :src="imagem" /></div>
      </div>
</template>
<style scoped>
.imgs {
    display: flex;
    justify-content: space-between;
    width: 35vw;
    margin-left: calc(15vw - 30px);
    margin-top: 1vw;
  }
  .img-pqn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8vw;
    border: 1px solid #d9d9d9;
    border-radius: 20px;
  }
  
  .img-pqn img {
    width: 100%;;
    padding: 15px;
  }
</style>
