<script setup>
import { padraoCarouselDesktop, padraoCarouselMobile } from './templates';
import { useScreenSize } from '@/composables/useScreenSize';
</script>

<template>
  <padraoCarouselMobile v-if="useScreenSize().isMobile" />
  <padraoCarouselDesktop v-else />
</template>