<script setup>
</script>

<template>
  <div class="produto-button">
    <button>+</button>
    <span>Adicionar novo produto</span>
  </div>
</template>

<style scoped>
.produto-button {
  margin-left: calc(15vw - 30px);
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding-right: 9vw;
  margin-bottom: 20px;
  background-color: transparent;
  border: none;
  justify-content: end;
}

.produto-button button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #29375B;
  border-color: #29375B;
  color: rgb(255, 255, 255);
  margin-right: 11px;
}

.produto-button span {
  font-weight: 650;
}
</style>
