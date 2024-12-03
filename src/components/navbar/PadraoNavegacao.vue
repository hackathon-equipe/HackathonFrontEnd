<script setup>
import { padraoNavegacaoDesktop, padraoNavegacaoMobile } from './templates';
import { useScreenSize } from '@/composables/useScreenSize';
</script>

<template>
  <padraoNavegacaoMobile v-if="useScreenSize().isMobile"/>
  <padraoNavegacaoDesktop v-else/>
</template>
