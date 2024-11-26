<script setup>
defineProps({
  title: String
})
</script>
<template>
  <div class="titulo">
    <span class="titulo-carosel">{{ title }}</span>
    <hr />
  </div>
</template>
<style scoped>
.titulo {
  display: flex;
  flex-direction: column;
  padding-left: 100px;
}

.titulo-carosel {
  font-weight: 600;
  font-size: 20px;
  border-radius: 2px;
}

hr {
  width: 70px;
  height: 3px;
  background-color: #406996;
}

@media (max-width: 768px) {
  .titulo {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
  }
  .titulo-carosel {
    font-weight: 600;
    font-size: 20px;
    margin: 0px 0px;
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
}
</style>