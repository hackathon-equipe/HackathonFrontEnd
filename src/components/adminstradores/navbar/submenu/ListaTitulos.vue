<script setup>
defineProps({
  title: String,
  link: String,
  onHover: {
    type: Function,
  }
});
</script>

<template>
  <RouterLink :to="link" @mouseover="onHover(title)">
    <li>{{ title }}</li>
  </RouterLink>
</template>