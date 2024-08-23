<script setup>
import { PadraoNavegacao, PadraoFooter }  from '@/components';
import { RouterView } from 'vue-router';
</script>
<template>
    <PadraoNavegacao/>
    <RouterView/>
    <PadraoFooter/>
</template>