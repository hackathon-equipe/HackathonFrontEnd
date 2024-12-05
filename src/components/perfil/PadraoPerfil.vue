<script setup>
import { perfilDesoktop, perfilMobille } from '.';
import { useScreenSize } from '@/composables/useScreenSize';
</script>

<template>
<perfilMobille v-if="useScreenSize().isMobile"/>
<perfilDesoktop v-else />
</template>
