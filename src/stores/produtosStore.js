import { defineStore } from 'pinia'

export const useProdutosStore = defineStore('produtos', () => {
  const produtos = [
    {
      nome: 'Kit Energia Solar 1,14kWp 570W...',
      imageUrl: 'placa',
      preco: 'R$ 1.000,00',
      parcelas: 'em até 10x de R$ 100,00'
    },
    {
      nome: 'Painel Solar 450W Monocristalino Half-Cell',
      imageUrl: 'placa2',
      preco: 'R$ 1.000,00',
      parcelas: 'em até 10x de R$ 100,00'
    },
    {
      nome: 'Cabo Solar 4mm 30M Preto',
      imageUrl: 'caboSolar',
      preco: 'R$ 1.000,00',
      parcelas: 'em até 10x de R$ 100,00'
    },
    {
      nome: 'Kit Energia Solar 1,14kWp 570W...',
      imageUrl: 'estruturaSolar',
      preco: 'R$ 1.000,00',
      parcelas: 'em até 10x de R$ 100,00'
    },
    {
      nome: 'Kit Energia Solar 1,14kWp 570W...',
      imageUrl: 'placa3',
      preco: 'R$ 1.000,00',
      parcelas: 'em até 10x de R$ 100,00'
    },
    {
      nome: 'ultimo',
      imageUrl: 'placa',
      preco: 'R$ 1.000,00',
      parcelas: 'em até 10x de R$ 100,00'
    }
  ]
  return { produtos }
})
