<script setup>
import { useRoute } from 'vue-router';
    const route = useRoute();
defineProps({
  title: String,
  link: String,
  onHover: {
    type: Function,
  }
});
</script>

<template>
  <RouterLink :to="link" @mouseover="onHover(title)" :class="[
    $route.fullPath == link || $route.fullPath == link + '/' + route.params.id ? 'ativo' : ''
]">
    <li class="li">{{ title }}</li>
  </RouterLink>
</template>
<style setup>
.li {
  position: relative;
  display: block;
}

.router-link {
  text-decoration: none;
}
.li::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  position: absolute;
  transition: width 0.5s ease;
  margin-top: -2px;
}

.li:hover::after {
  background-color: #29375b;
  width: 100%;
}
.ativo {
  font-weight: 600;
}
</style>
