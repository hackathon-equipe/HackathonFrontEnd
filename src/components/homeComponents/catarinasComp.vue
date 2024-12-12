<template>
  <div class="container">
    <div class="titulo" v-motion-slide-visible-once-right :delay="300" :duration="400">
      <h2>Precisa de um serviço de instalação?</h2>
    </div>
    <div class="content">
      <div class="img" v-motion-slide-visible-once-right :delay="300" :duration="400">
        <img src="./img/CatarinasLoja.png" alt="" />
      </div>
      <div class="texto" v-motion-slide-visible-once-left :delay="300" :duration="400">
        <p>A empresa Catarinas Energia Solar pode realizar esse serviço para você</p>
        <a target="_blank" href="https://catarinnasenergiasolar.com.br/#:~:text=Os%20pain%C3%A9is%20solares,%20instalados%20sobre%20o%20seu%20telhado,%20capturam%20a">Entre em contato</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
}
.content{
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    gap: 100px;
    align-items: center;
    padding: 0px 100px;
}
.texto{
    width: 350px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-weight: 500;
}
.texto a{
    padding: 10px 25px;
    border: none;
    background-color: #29375B;
    border-radius: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    min-width: 200px;
    text-decoration: none;
    color: white;
    cursor: pointer;
    transition: .2s ease;
}
.texto a:hover{
    transform: translateY(-5px);
}
.titulo h2{
    margin: 125px 0px 100px;
    text-align: center;
    font-size: 24px;
    text-wrap: wrap;
    padding: 0px 100px;
}
@media (max-width: 768px) {
    .content{
        flex-direction: column;
        gap: 30px;
        padding: 0px 30px;
    }
    .texto{
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0px 50px;
        width: 100%;
    }
    .titulo h2{
        margin: 100px 0px 50px;
        padding: 0px 50px;
    }
}
</style>