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
  }
</style>