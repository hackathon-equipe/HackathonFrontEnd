<script setup>
defineProps({
 title: String
})
</script>
<template>
    <span class="titulo-carosel">{{title}}</span>
    <hr/>
</template>
<style scoped>
.titulo-carosel{
    font-weight: 600;
    font-size: 20px;
    margin:0px 100px;
    border-radius: 2px;
  }
  hr{
    width: 70px;
    height: 3px;
    background-color: #406996;
    margin:0px 100px;
    animation: crescer 2.5s infinite;
  }

  @keyframes crescer {
    0%{
      width: 0;
    }
    100%{
      width: 70px;
    }
  }
</style>