import axios from "axios";

export default class CompraService{
    async BuscarTodosAsCompras(){
        const {data} = await axios.get('/compras/')
        return data.results;
    }

    async AdcionarCompra(dados){
        const {data} = await axios.post('/compras/', dados)
        return data.results;
    }

    async AtualizarCompra(compra){
        const {data} = await axios.put(`/compras/${compra.id}/`, compra)
        return data.results;
    }

    async DeletarCompra(id){
        const {data} = await axios.delete(`/compras/${id}/`)
        return data.results;
    }
}