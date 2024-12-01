<script setup>
import { bunnerHomePageDesktop, bunnerHomePageMobile } from './components';
const isMobile = true
</script>

<template>
    <bunnerHomePageMobile v-if="isMobile" />
    <bunnerHomePageDesktop v-else />
</template>