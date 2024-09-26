<script setup>
</script>
<template>
    <div class=comentario>
    <div class="divs"><img class="usuario-img" src="@/assets/images/foto-usuario.png" /><span class="nome-usuario informacao-usuario">Vinicius Gabryel Pereira</span></div>
    <div class="divs"><span class="exelencia">Excelente!</span><img src="@/assets/images/estrelas.png"/></div>
        <div class="divs"><span>Painel solar muito grande, recomendo pela qualidade.</span></div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.nome-usuario{
  font-weight: 500;
  font-size: 16px;
}
.divs span{
  font-size: 16px;
}
.exelencia{
  margin-right:20px ;
  font-weight: 600;
}
.informacao-usuario{
  margin-left: 20px;
}
.comentario{
  margin: 0px calc(15vw - 30px);
  border-bottom: 1px solid #D9D9D9;
  padding: 28px 0px;
  margin-bottom: 40px;
}
.divs{
  display: flex;
  align-items: center;
  margin-bottom: 13px;
}
.usuario-img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 8px;
}
</style>
