<script setup>
// componentes
import { ListaTitulos } from '@/components'
import logoStandart from '@/assets/logo/logoStandart.vue'

import { ref } from 'vue';

const abrirSubMenu = ref(false)
const abrirProdutosMenu = ref(false)
//icons
import { shopingCartIcon, searchIcon, menuIcon, userblackIcon, XCloseIcon } from '../../icons'

import { useRotasStore } from '@/stores/rotas';
const rotasStore = useRotasStore()

function onClick(e) {
  if (e == 'Produtos') {
    abrirProdutosMenu.value = true
  }
}
</script>

<template>
    <nav class="navbar">
        <div class="menu-base">
            <div class="menu-base-itens">
                <div class="item" @click="abrirSubMenu = !abrirSubMenu">
                    <XCloseIcon v-if="abrirSubMenu" />
                    <menuIcon v-else />
                </div>
                <div class="item">
                    <searchIcon />
                </div>
            </div>
            <div class="menu-base-logo">
                <router-link to="/">
                    <logoStandart />
                </router-link>
            </div>
            <div class="menu-base-itens">
                <div class="item user-icon">
                    <userblackIcon />
                </div>
                <div class="item">
                    <router-link to="/carrinho">
                        <shopingCartIcon />
                    </router-link>
                </div>
            </div>
        </div>
        <div class="sub-menu" v-if="abrirSubMenu">
            <ListaTitulos v-for="(text, index) in rotasStore.titles" :key="index" :title="text.text" :link="text.link" @click="onClick(text.text)" class="link">
                <h1>Teste</h1>
            </ListaTitulos>
        </div>
    </nav>
</template>

<style scoped>
.sub-menu a{
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 20px;
    text-decoration: none;
    border-bottom: 2px solid #D9D9D9;
    color: black;
    margin: 0px 20px;
}
.sub-menu{
    padding-top: 20px;
    display: flex;
    width: 100%;
    flex-direction: column;
    position: absolute;
    background-color: white;
}
.menu-base-logo {
    display: flex;
}

.item{
    cursor: pointer;
}

.menu-base-itens {
    gap: 20px;
    display: flex;
}

.menu-base {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 0px;
    width: 100vw;
}

.navbar{
    background-color: white;
    border-bottom: 2px solid #D9D9D9;
    position: fixed;
    top: env(safe-area-inset-top, 20px);
    padding-top: env(safe-area-inset-top, 20px);
    z-index: 9999999999999999999;
}
</style>
