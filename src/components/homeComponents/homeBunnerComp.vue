<script setup>
import { leftArrowIcon } from '@/components/icons'
import { HomeIconsComp } from '@/components/homeComponents'
import imageHomePage from '@/assets/images/bunnerHome/imageHomePage.vue'
</script>

<template>
    <div class="home">
        <div class="info-side">
            <div class="home-tittle">
                <h1>INVESTIMENTO, SUSTENTABILIDADE, ECONOMIA</h1>
            </div>
            <HomeIconsComp />
            <div class="home-buttons">
                <router-link class="button" to="/produtos/placas-solares">Compre sua placa
                    <leftArrowIcon />
                </router-link>
                <router-link class="button" to="/orcamentos">Faça um orçamento
                    <leftArrowIcon />
                </router-link>
            </div>
        </div>
        <imageHomePage class="responsive-class" />
    </div>
</template>

<style scoped>
.home {
    padding: 160px 40px 40px 40px;
    display: flex;
    justify-content: space-around;
}

.home .info-side {
    display: flex;
    flex-direction: column;
}

.home .info-side .home-tittle h1 {
    width: 700px;
    font-weight: 600;
    font-size: 72px;
    background-image: linear-gradient(43deg, #000000 0%, #2f3f68 90%);
    background-clip: text;
    color: transparent;
    line-height: 100px;
}

.home .info-side .home-buttons {
    margin-top: 50px;
    display: flex;
    gap: 35px;
}

.home .info-side .home-buttons .button {
    appearance: none;
    padding: 20px 30px;
    border-radius: 3rem;
    background-color: #29375b;
    color: #f6fbff;
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    text-decoration: none;
    transition: .1s linear;
}

.home .info-side .home-buttons .button:hover{
    transform: translateY(-5px);
}

@media (max-width: 768px) {
    .home {
        flex-direction: column-reverse;
        align-items: center;
        padding: 40px 40px 40px 40px;
    }

    .home .info-side .home-tittle h1 {
        font-size: 32px;
        line-height: 40px;
        text-align: center;
    }

    .home .info-side .home-buttons {
        display: flex;
        gap: 0px;
        flex-direction: column-reverse;
    }

    .home .info-side .home-buttons .button {
        justify-content: center;
    }

    .home .home-buttons .button:first-child {
        background-color: transparent;
        color: black;
    }
    .responsive-class{
        display: block;
    }
}
</style>