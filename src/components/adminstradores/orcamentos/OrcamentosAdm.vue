<script setup>
const props = defineProps({
  index:Number,
  cliente: String,
  data: String
})
</script>
<template>
  <div class="tudo">
    <span class=index>{{index}}</span>
    <div class="cliente-data">
    <div class="cliente-informacoes">
        <img class="user-img" src="@/assets/images/foto-usuario.png"/>
        <div>
       <span class="cliente">Cliente: {{cliente}}</span>
       <span class="detalhes">ver detalhes</span>
          </div>
    </div>
    <span class="data">Data: {{data}}</span></div>
    <div class="vertical-line"></div>
  </div>
</template>
<style scoped>
.data{
    font-weight: 400;
}
.cliente{
    font-weight: 600;
}
.index{
    color:#29375B;
    font-weight: 600;
}
.cliente-data{
    padding:0px 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.cliente-informacoes{
    display: flex;
    flex-direction: row;
}
.user-img{
    margin-right:30px;
    border-radius: 50%;
    width:50px
}
.detalhes{
    color:#545454;
    text-decoration: underline;
    font-size: 14px;
  }
.vertical-line {
    width: 1px;
    height: 100px;
    background-color: #d9d9d9;
    margin-left:
  }
.nome-container{
  font-weight: 600;
  margin-left: 30px;
}
.svg{
  margin-right: 10px;
}
.link{
  text-decoration: none;
  color:black
}
.informacoes {
  text-align: left;
}

.tudo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  padding-left: 30px;
  transition: .3s;
  border-bottom: 1px solid #d9d9d9;
  margin: 0px 20px;
}

.tudo:hover{
  transform: translate3d(0, -3px, 0) scale(1.01);
  transition: .3s;
  /* border: 1px solid #3f3b3b; */
  box-shadow: 0 0 4px 1px #d9d9d9;
}
  
.img{
  display: flex;
  justify-content: center;
  align-items: center;
}

.img img{
  height: 60px;
}

.estrelas {
  display: flex;
  max-height: 250px;
  margin-top: 3px;
}
span {
  display: block;
  font-family: 'Poppins', sans-serif;
}
.nome {
  font-size: 16px;
}
.preco {
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 20px;
}
.parcelas {
  font-size: 12px;
}
</style>
