<script setup>
import { ListaTitulos } from '@/components';
import { ref, onMounted } from 'vue';
import logoStandart from '@/assets/logo/logoStandart.vue';
import { shopingCartIcon, searchIcon } from '../icons';
const titles = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'Produtos',
    link: '/produtos'
  },
  {
    text: 'Orcamentos',
    link: '/orcamentos'
  },
  {
    text: 'Sobre',
    link: '/sobre'
  }
]
</script>

<template>
  <div class="navbar"> 
    <div class="logo">
      <router-link to="/">
        <logoStandart />
      </router-link>
    </div>
    <ul class="link-list">
      <ListaTitulos v-for="(text, index) in titles" :key="index" :title="text.text" :link="text.link" class="link" />
    </ul>
    <div class="utilities">
      <span>
        <searchIcon /> Pesquisar
      </span>
      <button>cadastro</button>
      <span>
        <shopingCartIcon />
      </span>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  z-index: 99999999999;
  top: 0px;
  position: sticky;
  width: 100vw;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 40px 40px 25px;
}

.navbar .logo {
  cursor: pointer;
}

.navbar .link-list {
  list-style: none;
  display: flex;
  gap: 25px;
}

.navbar .link-list .link:nth-child(1) {
  font-weight: 600;
}

.navbar .link-list .link {
  text-decoration: none;
  color: black;
}

.navbar .utilities {
  display: flex;
  align-items: center;
  gap: 30px;
}

.navbar .utilities span {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.navbar .utilities button {
  appearance: none;
  border: 1px solid #406996;
  font-weight: 600;
  color: #406996;
  padding: 8px 25px;
  background-color: transparent;
  border-radius: 3rem;
  cursor: pointer;
}
</style>