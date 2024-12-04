import { ref, computed, onMounted, watch } from 'vue'
import { defineStore } from 'pinia'
import { useProdutosStore } from '@/stores/produtosStore'
import { useRoute } from 'vue-router'

export const useCarouselStore = defineStore('carousel', () => {
  const produtoId = ref('')  // Inicializa o produtoId
  const produto = ref('')    // Inicializa o produto
  // const ProdutosStore = useProdutosStore()  // Acessa o store de produtos
  // const route = useRoute()  // Acessa os parâmetros da rota

  // // Computed para obter o produtoId a partir da rota
  // produtoId.value = computed(() => route.params.produtoId)

  // // Função para procurar o produto pelo id
  // const findProduto = () => {
  //   if (produtoId.value) {
  //     // Usando .find() para localizar o produto
  //     produto.value = ProdutosStore.produtos.find((p) => p.id === parseInt(produtoId.value))
  //   }
  // }

  // // Chama a função de buscar o produto assim que o componente for montado
  // onMounted(() => {
  //   findProduto()
  // })
  watch(produtoId, console.log(produtoId))

  return { produtoId, produto }
})
