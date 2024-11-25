<!-- npm install chart.js -->

<script setup lang="ts">
import Chart from 'chart.js/auto';
import { onMounted } from 'vue';

const data = {
  labels: [
    "Placas Solares",
    "Conectores",
    "Kits Solares",
    "Micro inversores",
    "Inversores",
    "Cabos",
    "Estrutura",
    "Baterias"
  ],
  datasets: [
    {
      label: 'Porcentagem',
      data: [27, 9, 12, 10, 13, 7, 16, 5],
      backgroundColor: [
        "#29465B", // Azul escuro
        "#406996", // Azul médio
        "#5292D0", // Azul claro
        "#1D4E89", // Azul escuro com toque de violeta
        "#004B73", // Azul marinho profundo
        "#8BB9D3", // Azul muito claro (quase cinza)
        "#62A1D0", // Azul médio suave
        "#006F8E", // Azul turquesa intenso
      ]
    }
  ]
};

onMounted(() => {
  const ctx = document.getElementById('myChart') as HTMLCanvasElement;

  new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Produtos Vendidos'
        },
        tooltip: {
          callbacks: {
            // Alterar o formato de exibição do tooltip para incluir o símbolo de porcentagem
            label: function (tooltipItem) {
              return tooltipItem.raw + '%'; // Adiciona o símbolo de % aos valores
            }
          }
        },
        datalabels: {
          // Exibir os valores com o símbolo de porcentagem no gráfico
          formatter: function (value) {
            return value + '%'; // Adiciona % aos valores no gráfico
          },
          color: '#fff', // Cor das labels
          font: {
            weight: 'bold',
            size: 16
          },
          anchor: 'end',
          align: 'start'
        }
      }
    }
  });
});
</script>

<template>
  <div class="grafico">
    <canvas id="myChart"></canvas>
  </div>
</template>

<style>
.grafico {
  width: 700px;
  height: 600px;
  color: #29375be3;
}
</style>
