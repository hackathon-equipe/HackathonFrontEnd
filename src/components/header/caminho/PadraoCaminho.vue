<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
let rotaAtual = route.path
rotaAtual = rotaAtual.replace("/", "> ")
</script>
<template>
    <div class="rota-atual">Home {{ rotaAtual }}</div>
</template>
<style scoped>
.rota-atual {
    display: flex;
    align-items: center;
    padding-left: 100px;
    background-color: #ECECEC;
    height: 56px;
    width: 100vw;
}
</style>
