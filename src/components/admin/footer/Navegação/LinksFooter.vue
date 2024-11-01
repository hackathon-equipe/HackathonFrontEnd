<script setup>
import { phoneIcon, facebookIcon, whatsappIcon, emailIcon, instagramIcon } from '@/components/icons'
</script>
<template>
   <div class="links-navegacao">
     <span>Páginas</span>
     <RouterLink to="/">Home</RouterLink>
     <RouterLink to="/produtos">Produtos</RouterLink>
     <RouterLink to="/orcamentos">Orçamento</RouterLink>
     <RouterLink to="/sobre">Sobre</RouterLink>
   </div>
   <div class="links-navegacao">
     <span>Navegção</span>
     <RouterLink to="/perfil">Minha conta</RouterLink>
     <RouterLink to="/carrinho">Meu carrinho</RouterLink>
     <RouterLink to="/promocoes">Promoções</RouterLink>
   </div>
   <div class="links-navegacao">
     <span>Precisa de ajuda?</span>
     <p>Entre em contato</p>
     <div class="icon-telefone"><phoneIcon /> 55 47 98765-6789</div>
     <div class="icons-redes">
       <a href="/"><emailIcon /></a>
       <a href="/"><whatsappIcon /></a>
       <a href="/"><facebookIcon /></a>
       <a href="/"><instagramIcon /></a>
     </div>
   </div>
</template>
<style scoped>




.links-navegacao {
 width: 10vw;
 flex-direction: column;
 display: flex;
}


.links-navegacao span {
 font-weight: 600;
 margin-bottom: 12px;
}


.links-navegacao a {
 color: #ebebeb;
 text-decoration: none;
 margin-bottom: 12px;
}


.icon-telefone {
 display: flex;
 align-items: center;
 gap: 10px;
 margin-bottom: 12px;
}


.icons-redes {
 gap: 15px;
 display: flex;
}


p{
 margin-bottom: 12px;
}
</style>