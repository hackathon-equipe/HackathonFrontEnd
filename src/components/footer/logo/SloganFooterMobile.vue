<script setup>
import logoFooter from '@/assets/logo/logoFooter.vue'
</script>

<template>
    <div class="center">
       <div>
         <router-link to="/">
           <logoFooter />
         </router-link>
       </div>
       <div class="footer-slogan">Investimento, sustentabilidade e economia</div>
     </div>
</template>

<style scoped>
.center{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.footer-slogan{
 font-weight: 500;
 width: 250px;
 text-align: center;
 margin: 10px 0 0 25px;
 color: #ebebeb;
}
</style>