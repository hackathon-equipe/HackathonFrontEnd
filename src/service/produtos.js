import axios from "axios";

export default class ProdutosService{
    async BuscarTodosOsProdutos(){
        const {data} = await axios.get('/produtos/')
        return data.results;
    }

    async AdcionarProduto(produto){
        const {data} = await axios.post('/produtos/', produto)
        return data.results;
    }

    async AtualizarProduto(produto){
        const {data} = await axios.put(`/produtos/${produto.id}/`, produto)
        return data.results;
    }

    async DeletarProduto(id){
        const {data} = await axios.delete(`/produtos/${id}/`)
        return data.results;
    }
}