<script setup>
import { ListaTitulos } from '@/components';
import { ref } from 'vue';
import logoStandart from '@/assets/logo/logoStandart.vue';
import { shopingCartIcon, searchIcon } from '../icons';
const titles = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'Produtos',
    link: '/produtos',
    hover: 'alertfunction'
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
const showMenu = ref(false)
function onHover(e) {
  if (e == 'Produtos') {
    showMenu.value = true
  }
}
</script>

<template>
  <div class="navbar">
    <div class="logo">
      <router-link to="/">
        <logoStandart />
      </router-link>
    </div>
    <ul class="link-list">
      <ListaTitulos v-for="(text, index) in titles" :key="index" :title="text.text" :link="text.link" :onHover="onHover"
        :onLeave="onLeave" class="link" />
    </ul>
    <div class="utilities">
      <span>
        <searchIcon /> Pesquisar
      </span>
      <router-link to="/perfil" class="button">cadastro</router-link>
      <span>
        <shopingCartIcon />
      </span>
    </div>
  </div>
  <div class="teste" v-if="showMenu" @mouseleave="showMenu = false">
    <div class="submenu">
      <div class="filter-menu">
        <ul class="filters">
          <li>Promoções</li>
          <li class="active">Ver Tudo</li>
        </ul>
      </div>
      <div class="products-list">
        <ul class="products">
          <li>Placas Solares</li>
          <li>Conectores</li>
          <li>Kits Solares</li>
          <li>Micro inversores</li>
          <li>Inversores</li>
          <li>Cabos</li>
          <li>Estrutura</li>
          <li>Baterias</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* CSS SUBMENU */
.teste {
  z-index: 9999999;
  position: fixed;
  width: 100vw;
  top: 75px;
  display: flex;
  background-color: white;
  justify-content: center;
  border-bottom: 1px solid #CFCFCF;
}

.submenu {
  width: 1400px;
  padding: 20px 250px 30px;
  display: flex;
  justify-content: center;
}

.filter-menu {
  padding: 15px 30px 0px 0px;
  border-right: 1px solid #5292D0;
}

.filters {
  padding: 0px 30px 20px 0px;
  gap: 15px;
  display: flex;
  flex-direction: column;
  list-style: none
}

.filters li {
  cursor: pointer;
}

.products {
  padding: 15px 0px 0px 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
}

.products li {
  width: 20%;
  cursor: pointer;
}

.products li:hover {
  text-decoration: underline;
}

.active {
  font-weight: 600;
}

/* FIM -> CSS SUBMENU */
.navbar {
  z-index: 999999999;
  position: fixed;
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

.navbar .link-list .link:nth-child(2):hover .submenu {
  background-color: red;
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

.navbar .utilities .button {
  cursor: pointer;
  appearance: none;
  border: 1px solid #406996;
  font-weight: 600;
  color: #406996;
  padding: 8px 25px;
  background-color: transparent;
  border-radius: 3rem;
  cursor: pointer;
 text-decoration: none;
}
</style>