<script setup>
import { padraoCarouselDesktop, padraoCarouselMobile } from './templates';
import { useScreenSize } from '@/composables/useScreenSize';
const props = defineProps({
  tipo: String, // Tipo do carrossel: 'Bem Avaliado' ou outro
});
</script>

<template>
  <padraoCarouselMobile :tipoCarousel="tipo"  v-if="useScreenSize().isMobile" />
  <padraoCarouselDesktop :tipoCarousel="tipo" v-else />
</template>
