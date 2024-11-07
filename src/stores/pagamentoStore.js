import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCartStore } from './carrinhoStore'

export const usePagamentoStore = defineStore('pagamento', () => {
    const carrinho = useCartStore()

    const produto = ref(null)
    const tipo_compra = ref(null)
    const frete = ref(0)
    const desconto = ref(0)
    const valorFinal = ref(0)
    
    function realizarCompra(item, tipo, valor_frete, valor_desconto, valor_final){
        produto.value = item
        tipo_compra.value = tipo
        frete.value = valor_frete
        desconto.value = valor_desconto
        valorFinal.value = valor_final
        console.log(valor_frete)
    }

    function confirmarCompra(){
        if(tipo_compra.value == 'carrinho'){
            carrinho.itens = ['']
        }else{
            if(carrinho.itens.includes(produto)){
                carrinho.removeItem(produto.value.id)
            }
        }
    }
    return { produto, realizarCompra, confirmarCompra, frete, desconto, tipo_compra}
})