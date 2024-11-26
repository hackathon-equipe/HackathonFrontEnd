<script setup>
import { padraoNavegacaoDesktop, padraoNavegacaoMobile } from './templates';

const isMobile = true
</script>

<template>
  <padraoNavegacaoMobile v-if="isMobile"/>
  <padraoNavegacaoDesktop v-else/>
</template>
