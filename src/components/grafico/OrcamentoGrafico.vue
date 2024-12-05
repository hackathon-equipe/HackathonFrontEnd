<script setup>
import Chart from 'chart.js/auto';
import { onMounted } from 'vue';

const numbers = Array.from({ length: 25 }, (_, index) => index + 1);

const props = defineProps({
  valores: Array,
});

// Função que retorna a cor com base no valor
const getColor = (value) => (value < 0 ? 'rgb(255 0 0 / 72%)' : '#406996');

const data = {
  labels: numbers,
  datasets: [
    {
      label: 'Entradas',
      data: props.valores,
      borderColor: props.valores.map(getColor), // Define a cor da borda
      backgroundColor: props.valores.map(getColor), // Define a cor do fundo
      hoverBorderWidth: 1,
      hoverBorderColor: 'white',
    },
  ],
};

onMounted(() => {
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      indexAxis: 'x', // Eixo X padrão para barras verticais
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Retorno anual considerando o valor investido',
          padding: 20,
          position: 'top',
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Anos',
            color: '#000',
            font: {
              size: 12,
            },
            padding: {
              top: 15,
              left: 50,
            },
          },
          grid: {
            display: false,
          },
        },
        y: {
          title: {
            display: true,
            text: 'Retorno do Investimento',
            color: '#000',
            font: {
              size: 12,
            },
            padding: {
              bottom: 20,
            },
          },
          grid: {
            display: false,
          },
          ticks: {
            font: {
              size: 12,
            },
            beginAtZero: true,
            stepSize: 10,
            callback: function (value) {
              return 'R$ ' + value;
            },
          },
        },
      },
    },
  });
});
</script>

<template>
  <div class="grafico">
    <canvas id="myChart"></canvas>
  </div>
</template>

<style scoped>
.grafico {
  width: 100%;
  height: 100%;
  color: #29375be3;
}
</style>
