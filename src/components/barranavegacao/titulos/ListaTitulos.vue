<script setup>
defineProps({
  title: String,
  link: String
});
</script>

<template>
  <RouterLink :to="link">
    <li>{{ title }}</li>
  </RouterLink>
</template>