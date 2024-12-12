<script setup>
defineProps(['titulo', 'button', 'link'])
import { RouterLink } from 'vue-router';
import buttonPerfil from '../button/buttonPerfil.vue';
</script>

<template>
      <div class="content">
        <h1>{{ titulo }}</h1>
        <ul>
          <li>
         <slot></slot>
          </li>
        </ul>
        <RouterLink :to="link">
        <buttonPerfil :titulo="button" class="button"/>
    </RouterLink>
      </div>

</template>

<style scoped>
h1{
  font-size: 24px;
  margin-bottom: 32px;
}


.content ul li{
  display: flex;
  width: 100%;
  justify-content: space-between;
  border: 1px solid #DADADA;
  padding: 20px;
  border-radius: 30px;
  align-items: center;
  margin-bottom: 24px;
}

.button{
    margin-top: auto;
}

a{
    text-decoration: none;
}
</style>