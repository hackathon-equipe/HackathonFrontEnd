<script setup>
import { Navbar, Footer }  from '@/components';
import { RouterView } from 'vue-router';
</script>
<template>
    <div class="content">
        <Navbar/>
        <RouterView/>
        <Footer/>
    </div>
</template>

<style scoped>
.content{
    width: 100vw;
    max-width: 100vw;
    min-width: 100vw;
    overflow: hidden;
}
</style>