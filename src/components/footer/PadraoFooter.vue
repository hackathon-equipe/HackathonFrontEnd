<script setup>
import { padraoFooterDesktop, padraoFooterMobile } from './templates';

const isMobile = true
</script>

<template>
  <padraoFooterMobile v-if="isMobile"/>
  <padraoFooterDesktop v-else/>
</template>