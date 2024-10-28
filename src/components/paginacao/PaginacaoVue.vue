<template>
  <div class="container-paginacao">
    <span class="pagina-atual"> você está na página {{ current }} de {{ qtyPages }}</span>
    <div class="pagination">
      <button
        :disabled="!showPrevious"
        class="item prev"
        @click="$emit('change-page-prev', offset)"
      >
        <img
          class="left"
          v-if="showPrevious"
          src="@/assets/images/arrow-right.png"
          width="13px"
        />
        <img class="left" v-else src="@/assets/images/arrow-gray.png" width="13px" />
      </button>
      <div v-for="(page, index) in pages" :key="page">
        <span
          class="ver-mais"
          v-if="
            (current < qtyPages - 2 && page == qtyPages) || (page > 2 && page == current)
          "
          >...</span
        >
        <button
          class="item"
          v-if="page == 1 || page == current || page > current"
          :class="{ current: page === current }"
          @click="$emit('change-page', page - 1)"
        >
          {{ page }}
        </button>
      </div>
      <button
        :disabled="!showNext"
        class="item next"
        @click="$emit('change-page-next', offset)"
      >
        <img v-if="showNext" src="@/assets/images/arrow-right.png" width="13px" />
        <img v-else src="@/assets/images/arrow-gray.png" width="13px" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  offset: {
    type: [String, Number],
    default: 0,
  },
  total: {
    type: [String, Number],
    required: true,
  },
  limit: {
    type: [String, Number],
    default: 10,
  },
});
const current = computed(() => (Number(props.offset) ? Number(props.offset) + 1 : 1));
const showPrevious = computed(() => current.value > 1);
const showNext = computed(
  () => Number(props.total) > Number(props.limit) * current.value
);
const qtyPages = computed(() => Math.ceil(Number(props.total) / Number(props.limit)));
const pages = computed(() => {
  const qty = Math.ceil(Number(props.total) / Number(props.limit));
  const array = qty <= 1 ? [1] : Array.from(Array(qty).keys(), (i) => i + 1);
  function removeItemsBetween(array, start, end) {
    // Certifique-se de que as posições estão corretas
    const startPos = Math.min(start, end);
    const endPos = Math.max(start, end);

    // Calcule o número de itens a serem removidos
    const count = endPos - startPos + 1;

    // Remova os itens
    array.splice(startPos, count);
  }
  if (array.length > 4) {
    removeItemsBetween(array, current.value + 2, Number(qty) - 1);
    array.push(Number(qty));
  }
  return array;
});
</script>

<style lang="scss" scoped>
.container-paginacao {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 80px;
}
.pagina-atual {
  color: black;
  margin: 15px;
}
.pagination {
  display: flex;
  justify-content: center;

  .ver-mais {
    align-self: center;
    display: block;
    margin: 0px 15px;
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.9rem;
    border: none;
    cursor: pointer;
    background-color: white;
    border-radius: 10px;
    margin: 2px;
    width: 38px;
    height: 33px;
    &:hover {
      background-color: rgba(212, 212, 221, 0.582);
      border: none;
      z-index: 3;
    }

    &.current {
      cursor: default;
      color: white;
      background-color: #3a567d;
      border: 1.5px solid #29375b;
      z-index: 2;
    }

    + .item {
      margin-left: -1px;
      margin-right: 0;
    }
  }
}
.pagination div {
  display: flex;
  flex-direction: row;
}
.left {
  transform: rotate(180deg);
}
</style>
