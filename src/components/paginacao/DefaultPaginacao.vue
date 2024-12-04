<template>
  <div v-if="mostrarPaginacao" class="container-paginacao2">
    <ul>
      <li v-for="passenger in passengers" :key="passenger.id">
        {{ passenger.name }}
      </li>
    </ul>
    <Pagination
      :total="total"
      :offset="offset"
      :limit="limit"
      @change-page="changePage"
      @change-page-prev="changePagePrev"
      @change-page-next="changePageNext"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import Pagination from "./PaginacaoVue.vue";
import { useFiltroStore } from '@/stores/filtros';

const filtroStore = useFiltroStore();

// Computed para verificar se há mais de 6 itens
const mostrarPaginacao = computed(() => filtroStore.filtro.length > 6);

// import axios from "axios";

const passengers = ref([]);
const offset = ref(0);
const total = ref(2);
const limit = 1;

const changePagePrev = (value) => {
  offset.value = value - 1;
  //   getPassengers();
};
const changePageNext = (value) => {
  offset.value = value + 1;
  //   getPassengers();
};
const changePage = (value) => {
  offset.value = value;
  //   getPassengers();
};

// const getPassengers = async () => {
//   const BASE_URL = "https://api.instantwebtools.net";
// exemplo com django-filters
// /passengers/?page=1&page_size=5
//   const url = `${BASE_URL}/v1/passenger?page=${offset.value}&size=${limit}`;

//   try {
//     const { data } = await axios.get(url);
//     passengers.value = data.data;
//     total.value = data.totalPassengers;
//   } catch (error) {
//     console.error("Error fetching passengers:", error);
//   }
// };

// onMounted(() => {
//   getPassengers();
// });
</script>
<style scoped>
.container-paginacao2 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
