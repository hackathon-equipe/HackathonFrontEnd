<script setup>
defineProps(['titulo'])
</script>
<template>
     <div class="button">
          <button @click="$emit('enviarDados', usuario)">{{ titulo }}</button>
        </div>

</template>

<style scoped>
 .button {
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
  .button button {
    width: 280px;
    height: 50px;
    background-color: #29375b;
    color: white;
    border: 1px solid transparent;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.2s;
  }

  .button button:hover{
    background-color: white;
    color:#29375b;
    border: 1px solid #29375b;
    font-weight: 500;
  }

</style>