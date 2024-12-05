import axios from "axios";

export default class AvaliacaoService{
    async BuscarTodosAsAvaliacoes(){
        const {data} = await axios.get('/avaliacoes/')
        return data.results;
    }

    async AdcionarAvaliacao(dados, token){
        const {data} = await axios.post('/avaliacoes/', dados,  {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        })
        console.log('erro')
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