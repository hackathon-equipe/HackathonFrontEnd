<script setup>
import Chart from 'chart.js/auto';
import { onMounted } from 'vue';

const numbers = Array.from({ length: 25 }, (_, index) => index + 1);

const props = defineProps({
  valores: Array,
});

const data = {
  labels: numbers,  // Labels do eixo X
  datasets: [
    {
      label: 'Entradas', // Rótulo da série de dados
      data: props.valores, // Dados para o gráfico
      borderColor: '#29465B',
      backgroundColor: '#29465B',
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
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      responsive: true,
      plugins: {
        legend: {
          display: false, // Se você quiser exibir a legenda, altere para true
        },
        title: {
          display: true,
          text: 'Retorno anual considerando o valor investido',
          padding: 20, // Ajuste do padding (espaço) ao redor do título para movê-lo para cima
          position: 'top', // Coloca o título no topo
        },
      },
      scales: {
        x: {
          title: {
            display: true, // Exibe o título do eixo X
            text: 'Anos',  // Texto do título do eixo X
            color: '#000',  // Cor do título
            font: {
              size: 12, // Tamanho da fonte
            },
            padding: {
              top: 15, // Ajusta o espaço acima do título
              left: 50, // Move o título para a direita
            },
          },
          grid: {
            display: false, // Remove a grade do eixo X
          },
        },
        y: {
          title: {
            display: true, // Exibe o título do eixo Y
            text: 'Retorno do Investimento',  // Texto do título do eixo Y
            color: '#000',  // Cor do título
            font: {
              size: 12, // Tamanho da fonte
            },
            padding: {
              bottom: 20, // Maior distância do gráfico
            },
          },
          grid: {
            display: false, // Remove a grade do eixo Y
          },
          ticks: {
            font: {
              size: 12, // Fonte para os números no eixo Y
            },
            beginAtZero: true, // Começa o eixo Y a partir de 0
            stepSize: 10,  // Tamanho do intervalo das marcas no eixo Y
            callback: function (value) {
              return 'R$ ' + value; // Formata os números no eixo Y
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
