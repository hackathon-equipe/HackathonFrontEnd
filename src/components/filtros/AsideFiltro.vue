 <script setup>
import { filtroDesktop, filtroMobile } from './templates';
import { useScreenSize } from '@/composables/useScreenSize';
</script>

<template>
  <filtroMobile v-if="useScreenSize().isMobile" />
  <filtroDesktop v-else />
</template>
