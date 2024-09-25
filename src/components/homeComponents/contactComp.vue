<template>
    <div class="container">
        <div class="images">
            <img src="./img/menorFrame.png" alt="">
            <img src="./img/maiorFrame.png" alt="">
        </div>
        <div class="content">
            <h2>Oorun, o seu maior investimento para o futuro</h2>
            <p>Você sabia que a energia solar é ideal para o clima tropical do Brasil? </p>
            <p>Entre em contato conosco o mais rápido possível para obter a sua energia solar Oorun!</p>
            <button>Fale conosco</button>
        </div>
    </div>
</template>

<script setup>

</script>

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
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
}
.content p{
    width: 350px;
}
.content h2{
    font-size: 24px;
}
.content button{
    width: 200px;
    height: 50px;
    border-radius: 50px;
    border: none;
    background-color: #29375B;
    color: white;
    font-weight: 600;
}
</style>