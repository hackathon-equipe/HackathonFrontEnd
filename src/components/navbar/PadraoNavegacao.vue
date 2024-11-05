<script setup>
import { ListaTitulos } from "@/components";
import ListaProdutos from "../produtos/ListaProdutos.vue";
import logoStandart from "@/assets/logo/logoStandart.vue";
import { shopingCartIcon, searchIcon } from "../icons";
import { ref } from "vue";
import { useFiltroStore } from "@/stores/filtros";
import { useRotasStore } from "@/stores/rotas";
import { useCartStore } from "@/stores/carrinhoStore";
import { useAuthStore } from "@/stores/auth";
const cart = useCartStore();
const FiltrosStore = useFiltroStore();
const RotasStore = useRotasStore();
const AuthStore = useAuthStore();
console.log(AuthStore.user);
const showMenu = ref(false);
const openPesquisar = ref(false);
function onHover(e) {
  if (e == "Produtos") {
    showMenu.value = true;
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
      <ListaTitulos
        v-for="(text, index) in RotasStore.titles"
        :key="index"
        :title="text.text"
        :link="text.link"
        :onHover="onHover"
        :onLeave="onLeave"
        class="link"
      />
    </ul>
    <div class="utilities">
      <span @click="openPesquisar = !openPesquisar">
        <searchIcon /> {{ AuthStore.loggedIn }}
      </span>
      <div v-if="AuthStore.isAuthenticated">
        <p>Bem-vindo, {{ AuthStore.user.nome }}!</p>
        <!-- Exibir outras informações do usuário -->
      </div>
      <input type="text" v-if="openPesquisar" v-model="FiltrosStore.pesquisa" />
      <router-link to="/perfil" v-if="AuthStore.loggedIn">{{
        AuthStore.user.name
      }}</router-link>
      <router-link to="/login" v-else class="button">cadastro</router-link>
      <span>
        <router-link to="/carrinho" class="cart">
          <shopingCartIcon />
          <span v-if="cart.itensInCart > 0">{{ cart.itensInCart }}</span>
        </router-link>
      </span>
    </div>
  </div>
  <div class="menu" v-if="showMenu" @mouseleave="showMenu = false">
    <div class="submenu">
      <div class="filter-menu">
        <ul class="filters">
          <ListaProdutos
            title="Promoções"
            link="/produtos/promocoes"
            class="link link-all"
          />
          <ListaProdutos
            title="Ver Tudo"
            link="/produtos/all"
            class="active link link-all"
          />
        </ul>
      </div>
      <div class="products-list">
        <ul class="products">
          <ListaProdutos
            v-for="(text, index) in RotasStore.produtos"
            :key="index"
            :title="text.nome"
            :link="text.link"
            class="link link-produto"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  top: 0;
}
.link-produto {
  width: 20%;
  cursor: pointer;
}
.link-produto:hover {
  text-decoration: underline;
}
.link-all:hover {
  text-decoration: underline;
}
.cart {
  position: relative;
}
.cart span {
  position: absolute;
  top: 0;
  right: 0;
  background: #29375b;
  font-size: 9px;
  width: 12px;
  height: 12px;
  color: white;
  display: flex;
  flex-direction: column;

  border-radius: 3rem;
}
/* CSS SUBMENU */
.menu {
  z-index: 9999999;
  position: fixed;
  width: 100vw;
  top: 75px;
  display: flex;
  background-color: white;
  justify-content: center;
  border-bottom: 1px solid #cfcfcf;
}

.submenu {
  width: 1400px;
  padding: 20px 250px 30px;
  display: flex;
  justify-content: center;
}

.filter-menu {
  padding: 15px 30px 0px 0px;
  border-right: 1px solid #5292d0;
}

.filters {
  padding: 0px 30px 20px 0px;
  gap: 15px;
  display: flex;
  flex-direction: column;
  list-style: none;
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

.link {
  text-decoration: none;
  color: black;
}

.link {
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
