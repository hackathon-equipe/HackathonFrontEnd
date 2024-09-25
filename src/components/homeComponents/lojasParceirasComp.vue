<template>
  <div class="container">
    <div class="tittle">
        <h2>Navegue pelas lojas parceiras</h2>
    </div>
    <div class="markets">
        <a href="https://www.elgin.com.br/"><img src="./img/elginLogo.png" alt=""></a>
        <a href="https://www.weg.net/institutional/BR/pt/"><img src="./img/catarinasLogo.png" alt=""></a>
        <a href="https://catarinnasenergiasolar.com.br/#:~:text=Os%20pain%C3%A9is%20solares,%20instalados%20sobre%20o%20seu%20telhado,%20capturam%20a"><img src="./img/wegLogo.png" alt=""></a>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container{
    margin: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.tittle h2{
    padding-left: 100px;
    margin: 80px;
    font-size: 24px;
}
.markets{
    height: 150;
    display: flex;
    align-items: center;
    gap: 75px;
}
</style>