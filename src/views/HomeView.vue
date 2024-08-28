<script setup>
  import { dollarIcon, recycleIcon, downGraphicIcon, leftArrowIcon } from '@/components/icons';
  import bunnerHomePage from '@/assets/images/bunnerHome/bunnerHomePage.vue';
import LeftArrowIcon from '@/components/icons/leftArrowIcon.vue';
</script>

<template>
  <div class="home">
    <div class="info-side">
      <div class="home-tittle">
        <h1>INVESTIMENTO, SUSTENTABILIDADE, ECONOMIA</h1>
      </div>
      <div class="home-icons">
        <div>
          <span><dollarIcon/></span>
          <span>valoriza seu imovel</span>
        </div>
        <div class="line-icons">
          <span><recycleIcon/></span>
          <span>energia limpa</span>
        </div>
        <div>
          <span><downGraphicIcon/></span>
          <span>reducao de CO₂</span>
        </div>
      </div>
      <div class="home-buttons">
        <button>Compre sua placa <LeftArrowIcon/></button>
        <button>Faca um orcamento <LeftArrowIcon/></button>
      </div>
    </div>
    <div>
      <bunnerHomePage/>
    </div>
  </div>
</template>
<style scoped>
  .home{
    padding: 40px;
    display: flex;
    justify-content: space-around;
  }
  .home .info-side{
    display: flex;
    flex-direction: column;
  }
  .home .info-side .home-tittle h1{
    width: 620px;
    font-weight: 600;
    font-size: 64px;
    background-image: linear-gradient(43deg, #000000 0%,#2F3F68 90%);
    background-clip: text;
    color: transparent;
  }
  .home .info-side .home-icons{
    font-weight: 500;
    margin-top: 20px;
    display: flex;
  }
  .home .info-side .home-icons div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .home .info-side .home-icons .line-icons{
    border-left: 1px solid #406996;
    border-right: 1px solid #406996;
  }
  .home .info-side .home-icons span{
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 3px 20px;
    height: 36px;
  }
  .home .info-side .home-buttons{
    margin-top: 50px;
    display: flex;
    gap: 35px;
  }
  .home .info-side .home-buttons button{
    appearance: none;
    padding: 20px 30px;
    border-radius: 3rem;
    background-color: #29375B;
    color: #F6FBFF;
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;
  }

</style>