<script setup>
import {  computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const rotaAtual = computed(() => {
    return route.path.replace(/\//g, " > ")
  });
</script>
<template>
    <div class="rota-atual">Home{{ rotaAtual }}</div>
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
