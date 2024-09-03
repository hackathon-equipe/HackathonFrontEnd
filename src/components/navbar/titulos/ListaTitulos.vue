<script setup>
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'
const route = useRoute()
defineProps(['title', 'link'])
</script>

<template>
  <RouterLink class="router-link" :to="link">
    <li class="color-gray" :class="[
        $route.fullPath == link || $route.fullPath == link + '/' + route.params.id ? 'active' : ''
    ]">
        {{ title }}
    </li>
</RouterLink>
</template>

<style scoped>
li {
  cursor: pointer;
}

.active {
  font-weight: 700;
}
</style>