<script setup></script>
<template>
  <div class="container-propagandas">
    <div class="propagandas">
      <ul>
        <li style="background-color: #29375b">
          Você ganha <span class="foco">frete grátis</span> a partir de R$500
        </li>
        <li style="background-color: #406996">
          Com pix você ganha <span class="foco">5% de desconto</span> no total da compra
        </li>
        <li style="background-color: #5292d0">
          Interresado em energia solar? Faça um <span class="foco">orçamento</span>
        </li>
        <li style="background-color: #3a567d">Parcelamento de <span class="foco">até 12x</span> no crédito</li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.foco{
  font-size: 12px;
  font-weight: 600;
  margin: 0px 5px;
}
li {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  min-width: 100vw;
  font-size: 12px;
  height: 100%;
}
.propagandas {
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
}
.propagandas ul {
  display: flex;
  transition: transform 24.5s ease-in; /* Animação de transição */
  animation-name: slide;
  animation-duration: 25s;
  animation-iteration-count: infinite;
  width: 100%;
  height: 100%;
}
.container-propagandas {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 40px;
  width: 100vw;
  margin-top: 65px;
}

@keyframes slide {
  0%,11% {
    transform: translateX(0);
  }
  14.2%,25.2% {
    transform: translateX(0);
  }
  28.4%,38.4% {
    transform: translateX(-100%);
  }
  41.6%,53.6% {
    transform: translateX(-100%);
  }
  56.8%,67.8% {
    transform: translateX(-200%);
  }
  71%,82% {
    transform: translateX(-200%);
  }
  85.2%,96.8% {
    transform: translateX(-300%);
  }
  100% {
    transform: translateX(-300%);
  }
}

@media (max-width: 768px) {
  .container-propagandas {
    margin-top: 65px;
  }
}
</style>
