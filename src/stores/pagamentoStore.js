import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCartStore } from './carrinhoStore'

export const usePagamentoStore = defineStore('pagamento', () => {
    const carrinho = useCartStore()

    const produto = ref(null)
    const tipo_compra = ref(null)
    const valor_final = ref('')
    
    function realizarCompra(item, tipo, valorFinal){
        produto.value = item
        tipo_compra.value = tipo
        valor_final.value = valorFinal
    }

    function confirmarCompra(){
        if(tipo_compra.value == 'carrinho'){
            while(carrinho.itens.length){
                carrinho.itens.pop()
            }
        }else{
            if(carrinho.itens.includes(produto)){
                carrinho.removeItem(produto.value.id)
            }
        }
    }
    return { produto, realizarCompra, confirmarCompra, tipo_compra, valor_final}
})