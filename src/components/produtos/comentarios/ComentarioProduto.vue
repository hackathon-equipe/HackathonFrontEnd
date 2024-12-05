<script setup>
import { onMounted, computed,ref } from 'vue';
import { useComentarioStore } from '@/stores/comentarios'
const ComentarioStore = useComentarioStore()
import { useRoute } from 'vue-router';
const route = useRoute(); // Captura a rota atual
const produtoId = parseInt(route.params.id); 
const titulo = ref()
onMounted(async () => {
  await ComentarioStore.carregarAvaliacoes();
  console.log(ComentarioStore.comentarios)
});

const comentariosFiltrados = computed(() =>
  ComentarioStore.comentarios.filter((item) => item.produto.id=== produtoId)
);


</script>
<template>
    <div class=comentario v-for="item in comentariosFiltrados" :key="item.id">
    <div class="divs"><img class="usuario-img" :src="
             item.usuario.foto
              ? item.usuario.foto.file
                : '/src/assets/images/usersemfoto.jpg'
        " /><span class="nome-usuario informacao-usuario">{{item.usuario.name}}</span></div>
    <div class="divs"><span class="exelencia" v-if="item.nota == 0? titulo = 'Pessimo':item.nota == 1? titulo = 'Ruim':item.nota == 2 || item.nota ==3? titulo = 'Regular':item.nota == 4? titulo = 'Bom': titulo = 'Excelente'">{{titulo}}</span>
      <div class="estrelas">
        <div v-for="item in item.nota" :key="item">
          <svg width="20" height="20" viewBox="0 0 286 272" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M143 0L176.677 103.647H285.658L197.491 167.705L231.168 271.353L143 207.295L54.8322 271.353L88.5093 167.705L0.341522 103.647H109.323L143 0Z"
              fill="#F4AA09" />
          </svg>
        </div>  
        <div v-for="item in ( 5 - item.nota)" :key="item">
          <svg width="20" height="20" viewBox="0 0 286 272" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M143 0L176.677 103.647H285.658L197.491 167.705L231.168 271.353L143 207.295L54.8322 271.353L88.5093 167.705L0.341522 103.647H109.323L143 0Z"
              fill="#D9D9D9" />
          </svg>
        </div>  
      </div>
    </div>
        <div class="divs"><span>{{item.comentario}}</span></div>
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
.estrelas{
  display: flex;
}
</style>
