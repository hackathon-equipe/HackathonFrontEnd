<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
import { useProdutosStore } from '@/stores/produtosStore'
import SlideComponent from '@/components/carousel/SlideComponent.vue'
const ProdutosStore = useProdutosStore()
let rotaAtual=route.path
rotaAtual=rotaAtual.replace("/", "> ")
</script>
<template>
    <div class="produtos-header">
        <div class="container-propagandas">
            <div class="propagandas">
                <ul>
                    <li>Você ganha frete grátis a partir de R$500</li>
                    <li>Você ganha frete grátis a partir de R$500</li>
                    <li> Você ganha frete grátis a partir de R$500</li>
                </ul>
            </div>
             </div>
        <div class="rota-atual">Home {{rotaAtual}}</div>
            <h1 class="titulo-produtos">Placas Solares</h1>
    </div>
<div class="ordenar"> <label for="ordenacao">Ordenar por:</label>
        <select id="ordenacao" name="ordenacao">
            <option value="maisvendidos">Mais vendidos</option>
            <option value="maisvendidos">Mais vendidos</option>
            <option value="maisvendidos">Mais vendidos</option>
            <option value="maisvendidos">Mais vendidos</option>
            <option value="maisvendidos">Mais vendidos</option>
        </select></div>
  <main>
    <div class="filtros">
<span class="subtitulo filtro-titulo">Filtros</span>
<div class="container">
<span class="subtitulo">Preço</span>
<span>-</span>
</div>
<div class="container">
<input class="input-min-max" placeholder="min"/>
<span>-</span>
<input class="input-min-max" placeholder="max"/>
<span>></span>
</div>
<div class="container">
<span class="subtitulo">Material</span>
<span>-</span>
</div>
<div class="opcoes">
    <div class="opcao-input">
        <input
          class="opcao"
          type="radio"
          id="Placas solares"
          name="Placas solares"
          value="Placas solares"
        />
        <label class="opcao-input-label" for="Placas solares"> Placas solares </label>
      </div>
    <div class="opcao-input">
      <input
        class="opcao"
        type="radio"
        id="Placas solares"
        name="Placas solares"
        value="Placas solares"
      />
      <label class="opcao-input-label" for="Placas solares"> Placas solares </label>
    </div>
    <div class="opcao-input">
        <input
          class="opcao"
          type="radio"
          id="Placas solares"
          name="Placas solares"
          value="Placas solares"
        />
        <label class="opcao-input-label" for="Placas solares"> Placas solares </label>
      </div>
      <div class="opcao-input">
        <input
          class="opcao"
          type="radio"
          id="Placas solares"
          name="Placas solares"
          value="Placas solares"
        />
        <label class="opcao-input-label" for="Placas solares"> Placas solares </label>
      </div>
  </div>

<div>
    
<div class="container">
<span class="subtitulo">Potência</span>
<span>-</span>
</div>
<div class="opcoes">
    <div class="opcao-input">
        <input
          class="opcao"
          type="radio"
          id="Placas solares"
          name="Placas solares"
          value="Placas solares"
        />
        <label class="opcao-input-label" for="Placas solares"> Placas solares </label>
      </div>
    <div class="opcao-input">
      <input
        class="opcao"
        type="radio"
        id="Placas solares"
        name="Placas solares"
        value="Placas solares"
      />
      <label class="opcao-input-label" for="Placas solares"> Placas solares </label>
    </div>
    <div class="opcao-input">
        <input
          class="opcao"
          type="radio"
          id="Placas solares"
          name="Placas solares"
          value="Placas solares"
        />
        <label class="opcao-input-label" for="Placas solares"> Placas solares </label>
      </div>
      <div class="opcao-input">
        <input
          class="opcao"
          type="radio"
          id="Placas solares"
          name="Placas solares"
          value="Placas solares"
        />
        <label class="opcao-input-label" for="Placas solares"> Placas solares </label>
      </div>
  </div>
<div class="container">
<span class="subtitulo">Marcas</span>
<span>+</span></div></div>
    </div>
    <div class="produtos">
      <div class="produto" v-for="(text, index) in ProdutosStore.produtos" :key="index">
        <SlideComponent
          :img="text.imageUrl"
          :nome="text.nome"
          :preco="text.preco"
          :parcelas="text.parcelas"
        />
        <!-- <p>{{text.imageUrl}} == {{route.params.id}}</p> -->
      </div>
    </div>
  </main>
</template>
<style scoped>
option{
  background-color: transparent;
  border-radius: 10px;
}
select{
  padding: 10px;
  font-weight: 520;
  border:none;
  background-color: transparent;
  outline: none;
}
select:focus{
  border-color: transparent;
}
.opcao-input input[type='checkbox']:checked,
input[type='radio']:checked {
  accent-color: #2F3F68;
}
.opcao{
    margin: 0px 15px;
}
.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:10px 0px; 
}
.titulo-produtos{
    font-size: 24px;
    padding: 50px;
    font-weight: 600;
}
.input-min-max{
    width: 40%;
    border-radius: 10px;
    background-color: transparent;
    border: 1px solid #D9D9D9;
    color:#bebdbd;
    text-align: center;
}



.rota-atual{
    display: flex;
    align-items: center;
    padding-left: 100px;
    background-color: #ECECEC;
    height: 56px;
    width: 100vw;
}
.container-propagandas{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#29375B;
    color:white;
    height: 46px;
    width: 100vw;
}
li{
    list-style: none;
    min-width: 100vw;
}
.propagandas{
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;
}
.propagandas ul{
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 40px;
 animation: 15s infinite slide linear;
}

@keyframes slide {
    from{
        transform: translateX(0)
    }
    to{
        transform: translateX(-100vw);
    }

}

.produtos-header{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
main {
  display: flex;
  justify-content: center;
  width: 100vw;
}
.filtros {
  display: flex;
  flex-direction: column;
  width: 25vw;
  margin-top: 20px;
  padding-left: 7vw;
}
.filtro-titulo{
    border-bottom: 1px solid #D9D9D9;
    margin-bottom: 5px;
}
.subtitulo{
    font-weight: 600;
   padding:10px 0px; 
}
.ordenar{
    padding-right: 7vw;
    text-align: end;
}
.produtos {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0px 7vw 0px 50px;
  width: 75vw;
}
.produto {
  width: 20vw;
  padding: 20px;
}
</style>
