<script setup>
</script>
<template> 
    <button class="ver-mais-button"> <span>Ver mais comentários</span><img src="@/assets/images/seta-baixo.png" width="10px" height="10px"/></button>
</template>
    <style scoped>
.ver-mais-button{
  margin-left: calc(15vw - 30px);
  display: flex;
  align-items: center;
  margin-top: 20px;
  background-color: transparent;
  border: none;
}
.ver-mais-button img{
  margin-left: 10px;
}
.ver-mais-button button{
  border:none;
  background-color: transparent;
}
.ver-mais-button span{
  font-weight: 500;
  text-decoration: underline;
}
</style>
