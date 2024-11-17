import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  
  // Variavel que armazena os itens no carrinho
  const itens = ref([
  ])

  // Adiciona item ao Carrinho
  function addItem(item) {
    const ids = this.itens.map(objeto => objeto.id)
    if(ids.includes(item.id)){
      item.quantidade++
    }else{
      item.quantidade = 1
      itens.value.push(item)
    }
  }

  // Remover item do Carrinho
  function removeItem(itemId) {
    const item = itens.value.find(item => item.id === itemId)
    if(item.quantidade < 2){
      const positionIntem = itens.value.findIndex(objeto => objeto.id == item.id)
      itens.value.splice(positionIntem, 1)
    }else{
      console.log('o item tem mais de 1 no carrinho')
      item.quantidade--
    }
  }

  // Retorna quantidade de itens no carrinho
  const itensInCart = computed(() => {
    return itens.value.length
  })

  // Retorna o valor total da soma dos itens no carrinho
  const valorNoCarrinho = computed(() => {
    return itens.value.reduce((result, item) => result + item.preco * item.quantidade, 0)
  })

  // Retorna se o frete ira ser gratuito
  const freeShip = computed(() => {
    return valorNoCarrinho.value > 950
  })

  // Cupons de desconto
  const cupons = [
    {
      codigo: 'tudo20',
      valor: 20
    },
    {
      codigo: 'tudo30',
      valor: 30
    },
    {
      codigo: 'natal15',
      valor: 15
    },
    {
      codigo: 'hackatas100',
      valor: 100
    },
  ]

  // Variável para controle do cupom e desconto
  const cupomAplicado = ref(false);
  const valorCupom = ref(0)
  // Função para aplicar o desconto
  function aplicarDesconto(cupom){
    cupomAplicado.value = true;
    valorCupom.value = cupons.find(e => e.codigo === cupom).valor
    console.log(valorCupom.value)
  };  
  
  // Computed para o valor final com a aplicação do cupom
  const valorFinal = computed(() => {
    if (cupomAplicado.value) {
      return valorNoCarrinho.value * (1-(valorCupom.value / 100))  // 20% de desconto
    }
    else{
      return valorNoCarrinho.value
    }
  });

  // Computed para mostrar o valor economizado
  const valorEconomizado = computed(() => {
    return valorNoCarrinho.value - valorFinal.value
  })


  return {itens, addItem, removeItem, itensInCart, valorNoCarrinho, freeShip, cupons, valorFinal, aplicarDesconto, valorEconomizado, cupomAplicado, valorCupom}
})
