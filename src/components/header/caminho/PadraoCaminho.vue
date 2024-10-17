<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
// Computa a última parte da rota
const ultimaParte = computed(() => {
  const path = route.path;
  const parts = path.split("/");
  return parts[parts.length - 1] || "Home"; // Retorna 'Home' se a rota for apenas '/'
});
const rotaAtual = computed(() => {
  return route.path.replace(/\//g, " > ");
});
const regex = new RegExp(`(${ultimaParte.value})`, "g");
const rotaBold = rotaAtual.value.replace(regex, "<strong>$1</strong>");
</script>
<template>
  <div class="rota-atual"><RouterLink class="link" to="/">Home</RouterLink><RouterLink :to="ultimaParte" v-html="rotaBold" class="link"></RouterLink></div>
</template>
<style scoped>
.rota-atual {
  display: flex;
  align-items: center;
  padding-left: 7vw;
  background-color: #ececec;
  height: 50px;
  width: 100vw;
  font-size: 14px;
}
span {
  margin-right: 5px;
}
.link {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
</style>
