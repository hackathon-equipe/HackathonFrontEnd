<template>
  <div class="container">
    <div class="tittle" v-motion-slide-visible-once-left :delay="300" :duration="400">
        <h2>Navegue pelas lojas parceiras</h2>
    </div>
    <div class="markets">
        <a target="_blank" href="https://catarinnasenergiasolar.com.br/#:~:text=Os%20pain%C3%A9is%20solares,%20instalados%20sobre%20o%20seu%20telhado,%20capturam%20a" v-motion-slide-visible-once-bottom :delay="300" :duration="400"><img src="./img/catarinasLogo.png" alt=""></a>
        <a target="_blank" href="https://www.elgin.com.br/" v-motion-slide-visible-once-bottom :delay="350" :duration="400"><img src="./img/elginLogo.png" alt=""></a>
        <a target="_blank" href="https://www.weg.net/institutional/BR/pt/" v-motion-slide-visible-once-bottom :delay="400" :duration="400"><img src="./img/wegLogo.png" alt=""></a>
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
    justify-content: center;
    gap: 75px;
}
@media (max-width: 768px) {
    .container{
        margin: 100px 0px
    }
    .tittle h2{
        padding: 0px;
        margin: 0px;
        font-size: 20px;
    }
    .markets{
        margin: 50px 0px;
        gap: 15px;
        flex-direction: column;
    }
}
</style>