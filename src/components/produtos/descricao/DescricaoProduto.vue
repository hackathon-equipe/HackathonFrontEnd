<script setup>
import { computed, ref } from 'vue';
const props = defineProps({
  desc: Array
})


// Função para tratar as chaves
function separarChave(key) {
  if (key.includes('_')) {
    // Trata snake_case
    return key.replace(/_/g, ' ');
  } else {
    // Trata CamelCase
    return key.replace(/([a-z])([A-Z])/g, '$1 $2');
  }
}

// Computed para criar um novo objeto com as chaves transformadas
const novaDesc = computed(() => {
  const result = {};
  for (const key in props.desc) {
    result[separarChave(key)] = props.desc[key];
  }
  return result;
});

const pdfTecnico = ref('');

// Função para separar "PDF Tecnico"
function separarPdfTecnico() {
  pdfTecnico.value = novaDesc.value["PDFTecnico"]; // Copia o valor
  console.log(pdfTecnico.value)
  delete novaDesc.value["PDFTecnico"]; // Remove a chave do objeto
}

separarPdfTecnico();


</script>
<template>
    <h1 class="titulo-descricao">Descrição do Produto</h1>
    <div class="descricao">
      <ul>
        <li v-if="pdfTecnico != undefined"><a target="_blank" :href="pdfTecnico">PDF Tecnico</a></li>
        <li v-for="(value, key) of novaDesc" :key="key">{{ key }}: <strong>{{ value }}</strong></li>
        <li>DOWNLOAD CENTER</li>
      </ul>
     </div>
</template>
<style scoped>
.titulo-descricao{
    font-size: 20px;
    padding: 100px;
    text-align: center;
    font-weight: 610;
  }
  .descricao{
    display: flex;
    margin-left: calc(15vw - 130px);
    padding-left: 100px;
    font-size: 16px;
  }
  .descricao ul{
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;
  }
  .descricao ul li{
    padding: 2px 0px;
  }
  @media (max-width:768px) {
    .descricao{
      padding: 20px;
    }
    .titulo-descricao{
      padding: 80px 20px;
    }
    .descricao ul li:nth-child(even){
      background-color: #f1f1f1;
    }
    .descricao ul li{
      padding: 10px;
    }
  }
</style>
