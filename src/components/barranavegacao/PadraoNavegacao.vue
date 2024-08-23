<script lang="ts" setup>
import { ListaTitulos } from '@/components';
const titles = [
    {
      text: 'Home',
      link: '/'
    },
    {
      text: 'Produtos',
      link: '/produtos'
    },
    {
      text: 'Orcamentos',
      link: '/orcamentos'
    },
    {
      text: 'Sobre',
      link: '/sobre'
    }
  ]
</script>

<template>
  <ul>
    <ListaTitulos
      v-for="(text, index) in titles"
      :key="index"
      :title="text.text"
      :link="text.link"
    />
  </ul>
</template>