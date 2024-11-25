<script setup>
import logoFooter from '@/assets/logo/logoFooter.vue'
</script>

<template>
    <div>
       <div>
         <router-link to="/">
           <logoFooter />
         </router-link>
       </div>
       <div class="footer-slogan">Investimento, sustentabilidade e economia</div>
     </div>
</template>

<style scoped>
.footer-slogan{
 font-weight: 500;
 margin: 10px 0 0 25px;
 color: #ebebeb;
}
</style>