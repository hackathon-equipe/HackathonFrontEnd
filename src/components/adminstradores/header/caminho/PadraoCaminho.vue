<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
let path = ref(route.path);

// Remove '/all' da URL, se existir
path.value = path.value.replace('/all', '');

// Computa as partes da rota
const partesRota = computed(() => {
  const parts = path.value.split("/").filter(Boolean);
  return parts.length > 0 ? parts : ["Home"];
});

// Computa o caminho completo para cada link
const caminhos = computed(() => {
  return partesRota.value.map((_, index) => {
    return '/' + partesRota.value.slice(0, index + 1).join('/');
  });
});
</script>

<template>
  <div class="rota-atual">
    <RouterLink class="link" to="/admin/home">Home</RouterLink>
    <span v-if="partesRota.length > 0"> &gt; </span>

    <span v-for="(parte, index) in partesRota" :key="index" :class="{ 'hidden-admin': parte === 'admin', 'active': index === partesRota.length - 1 }">
      <RouterLink 
        :to="caminhos[index]" 
        class="link" 
        :class="{ 'hidden-admin': parte === 'admin', 'active': index === partesRota.length - 1 }"
      >
        <span v-if="index === partesRota.length - 1" v-html="'<strong>' + parte + '</strong>'"></span>
        <span v-else>{{ parte }}</span>
      </RouterLink>
      <span v-if="index < partesRota.length - 1"> &gt; </span>
    </span>
  </div>
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
  margin-top: 80px;
}

.link {
  margin: 0px 3px;
  text-decoration: none;
  color: rgb(0, 0, 0);
}

.active {
  font-weight: bold;
}

.hidden-admin {
  display: none;
}

span {
  display: flex;
  align-items: center;
}
</style>
