<script setup>
import { padraoCarouselDesktop, padraoCarouselMobile } from './templates';

const isMobile = true
</script>

<template>
  <padraoCarouselMobile v-if="isMobile" />
  <padraoCarouselDesktop v-else />
</template>