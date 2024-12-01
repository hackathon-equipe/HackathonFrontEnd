<script setup>
import logoFooter from '@/assets/logo/logoFooter.vue'
</script>

<template>
    <div>
       <div>
         <router-link to="/admin/home">
           <logoFooter />
         </router-link>
       </div>
     </div>
</template>

<style scoped>
.footer-slogan{
 font-weight: 500;
 margin: 10px 0 0 25px;
 color: #ebebeb;
}
</style>