<script setup lang="ts">
import Chart from 'chart.js/auto'
import { onMounted } from 'vue';

const data = {
  labels: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho'
  ],
  datasets: [
    {
      label: 'Quantidade',
      data: [23, 56, 65, 100, 5, 37, 54],
      borderColor: '#5292D0',
      backgroundColor: '#5292D0',
      hoverBorderWidth: 1,
      hoverBorderColor: 'white',
    },
  ]
};

onMounted(() => {
  const ctx = document.getElementById('orcamentoGrafico') as HTMLCanvasElement;
 
  new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Orçamentos Realizados'
        },
        legend: {
          display: false // Desabilita a legenda completamente
        }
      },
      scales: {
        x: {
          grid: {
            display: false, // Remove a linha do fundo na escala X
          }
        },
        y: {
          grid: {
            display: false, // Remove a linha do fundo na escala Y
          }
        }
      }
    },
  });
})
</script>

<template>
  <div class="grafico">
    <canvas id="orcamentoGrafico"></canvas>
  </div>
</template>

<style>
.grafico {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 100%;
  color: #29375be3;
}
</style>
