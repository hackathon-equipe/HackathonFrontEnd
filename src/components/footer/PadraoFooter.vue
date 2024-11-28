<script setup>
import { padraoFooterDesktop, padraoFooterMobile } from './templates';
import { useScreenSize } from '@/composables/useScreenSize';
</script>

<template>
  <padraoFooterMobile v-if="useScreenSize().isMobile"/>
  <padraoFooterDesktop v-else/>
</template>