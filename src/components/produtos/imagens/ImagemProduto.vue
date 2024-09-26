<script setup>
defineProps({
  imagem: String
})
</script>
<template>
      <div class="img">
        <img class="oi" :src="imagem" />
      </div>
</template>
<style scoped>
.img {
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  padding: 40px;
  width: 35vw;
}
</style>
