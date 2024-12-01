<script setup lang="ts">
import Chart  from 'chart.js/auto'
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
      label: 'Entradas',
      data: [23, 56, 65, 100, 5, 37, 54],
      borderColor: '#29465B',
      backgroundColor: '#29465B',
      hoverBorderWidth: 1,
      hoverBorderColor: 'white',
    },
    {
      label: 'Saídas',
      data: [-3, -67, -6, -78, -59, -87, -49],
      borderColor: '#5292D0',
      backgroundColor: '#5292D0',
      hoverBorderWidth: 1,
      hoverBorderColor: 'white'
    }
  ]
};

onMounted(() => {
  const ctx = document.getElementById('EntradaSaida') as HTMLCanvasElement;
 
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      indexAxis: 'y',
      elements: {
        bar: {
          borderWidth: 2,
        }
      },
      responsive: true,
      scales: {
        x: {
          grid: {
            display: false, // Desabilita a linha do fundo na escala X
          }
        },
        y: {
          grid: {
            display: false, // Desabilita a linha do fundo na escala Y
          }
        }
      },
      plugins: {
        legend: {
          position: 'top', // Legenda no topo
          padding: 40, // Adiciona margem entre a legenda e o gráfico
        },
        title: {
          display: true,
          text: 'Entradas e Saídas'
        },
        tooltip: {
          callbacks: {
            // Modifica o formato dos tooltips
            label: function(tooltipItem) {
              // Adiciona "R$" no valor dos tooltips
              return 'R$ ' + tooltipItem.raw.toFixed(2);
            }
          }
        }
      }
    },
  });
})
</script>

<template>
  <div class="grafico">
    <canvas id="EntradaSaida"></canvas>
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
  padding: 20px;
}
</style>
