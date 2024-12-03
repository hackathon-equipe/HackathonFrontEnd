
<script setup>
import imgMobile from './img/svgFaleConosco.vue'
const isMobile = true
</script>

<template>
    <div class="container">
        <div class="images">
            <imgMobile v-if="isMobile" />
            <div v-else>
                <img src="./img/menorFrame.png" alt="">
                <img src="./img/maiorFrame.png" alt="">
            </div>
        </div>
        <div class="content">
            <h2>Oorun, o seu maior investimento para o futuro</h2>
            <p>Você sabia que a energia solar é ideal para o clima tropical do Brasil? </p>
            <p>Entre em contato conosco o mais rápido possível para obter a sua energia solar Oorun!</p>
            <router-link class="button" to="/sobre">Fale conosco</router-link>
        </div>
    </div>
</template>

<style scoped>
.container{
    display: flex;
    justify-content: center;
    gap: 50px;
}
.images img{
    margin: 0px 10px;
}
.content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
}
.content p{
    width: 350px;
}
.content h2{
    width: 350px;
    font-size: 24px;
}
.content .button{
    width: 200px;
    height: 50px;
    border-radius: 50px;
    border: none;
    background-color: #29375B;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: .5s linear;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}
.content .button:hover{
    transform: translateX(5px);
    background-color: white;
    color: #29375B;
    border:1px solid #29375B;
    transition: .1s linear;
}

@media (max-width: 768px) {
    .container{
        flex-direction: column;
        margin: 10px 30px;
    }
    .content{
        justify-content: center;
        text-align: center;
        align-items: center;
    }
    .images{
        display: flex;
        justify-content: center;
    }
}
</style>