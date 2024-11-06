<script setup>
import Chart  from 'chart.js/auto'
import { onMounted } from 'vue';
const numbers = Array.from({ length: 25 }, (_, index) => index + 1);
const props= defineProps({
  valores: Array
});

const data = {
  labels: numbers,
  datasets: [
    {
      label: 'Entradas',
      data: props.valores,
      borderColor: '#29465B',
      backgroundColor: '#29465B',
      hoverBorderWidth: 1,
      hoverBorderColor: 'white',
    }
  ]
};

onMounted(() => {
  const ctx = document.getElementById('myChart')
 
  new Chart(ctx,{
  type: 'bar',
  data: data,
  options: {
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      }
    },
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Retorno anual considerando o valor investido'
      }
    },
    scales: {
      x: {
        grid: {
          display: false // Remove a grade do eixo X
        }
      },
      y: {
        grid: {
          display: false // Remove a grade do eixo Y
        }
      }
    }
  },
});
})

</script>

<template>
    <div class="grafico">
        <canvas id="myChart"></canvas>
    </div>
</template>
<style scoped>
.grafico{
  width: 100%;
  height:100%;
  color:#29375be3
}</style>