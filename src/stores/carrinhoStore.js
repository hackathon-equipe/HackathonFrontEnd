import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const itens = ref([
    {
      nome: 'Kit Energia Solar 1,14kWp 570W',
      imageUrl: 'placa',
      preco: 1000,
      id: 0,
      quantidade: 1
    },
  ])
  function addItem(item) {
    const ids = this.itens.map(objeto => objeto.id)
    if(ids.includes(item.id)){
      item.quantidade ++
    }else{
      item.quantidade = 1
      itens.value.push(item)
    }
  }
  function removeItem(itemId) {
    const item = itens.value.find(item => item.id === itemId)
    if(item.quantidade < 2){
      const positionIntem = itens.value.findIndex(objeto => objeto.id == item.id)
      itens.value.splice(positionIntem, 1)
    }else{
      console.log('o item tem mais de 1 no carrinho')
      item.quantidade --
    }
  }
  const itensInCart = computed(() => {
    return itens.value.length
  })
  function valueInCart(){
    return itens.value.reduce((result, item) => result + item.preco * item.quantidade, 0)
  }

  return {itens, addItem, removeItem, itensInCart, valueInCart }
})
