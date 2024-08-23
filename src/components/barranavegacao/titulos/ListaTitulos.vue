<script lang="ts" setup>
import RouterLink from 'vue';
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