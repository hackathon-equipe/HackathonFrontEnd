import { defineStore } from 'pinia'

export const useOrcamentoStore = defineStore('orcamento', () => {
    const clientes = [
        {
          nome: "Júlia Fuck",
          data: "22/10/2024"
        },
        {
          nome: "Carlos Silva",
          data: "18/11/2024"
        },
        {
          nome: "Ana Souza",
          data: "05/12/2024"
        },
        {
          nome: "Pedro Almeida",
          data: "12/01/2024"
        },
        {
          nome: "Mariana Costa",
          data: "09/02/2024"
        },
        {
          nome: "Lucas Pereira",
          data: "15/03/2024"
        },
        {
          nome: "Beatriz Oliveira",
          data: "28/04/2024"
        },
        {
          nome: "Ricardo Gomes",
          data: "11/05/2024"
        },
        {
          nome: "Laura Martins",
          data: "07/06/2024"
        },
        {
          nome: "Gabriel Santos",
          data: "03/07/2024"
        },
        {
          nome: "Fernanda Lima",
          data: "19/08/2024"
        },
        {
          nome: "Eduardo Barbosa",
          data: "25/09/2024"
        },
        {
          nome: "Renata Alves",
          data: "17/10/2024"
        },
        {
          nome: "Rafael Costa",
          data: "23/11/2024"
        },
        {
          nome: "Juliana Pereira",
          data: "30/12/2024"
        }
      ];
      
    function calcularOrcamento(userinfo){

        // VARIAVEIS INICIAIS
        let consumo_mensal = userinfo.consumo_mensal //kWh mes
        let eficiencia = 0.8 // 80%
        let potencia_placa = 0.550 //Wh
        let irradiacao = userinfo.irradiacao
        let custo_energia = Number(userinfo.gasto_energia / userinfo.consumo_mensal).toFixed(2)
        console.log(userinfo.value)
        let dimensao_placa = 2.7 // m²
        let espaco_livre = userinfo.area_disponivel // m²
        let espaco_limitado = userinfo.area_limitada // true or false
            
        // CONTAS DE QUANTIDADE
        let consumo_diario = consumo_mensal / 30 //kWh dia
        let potencia_sistema_necessaria = consumo_diario / (eficiencia * irradiacao) //kWp
        let quantidade_placas = Math.floor(potencia_sistema_necessaria / potencia_placa) // quantidade de placas necessarias para suprir o consumo       
        if (espaco_limitado) { 
            const placas_limites = Math.floor(espaco_livre / dimensao_placa)
            if(quantidade_placas > placas_limites){
                quantidade_placas = placas_limites
            }
        }
        let potencia_sistema_gerada = potencia_placa * quantidade_placas * eficiencia * irradiacao * 30 // Capacidade de geracao de energia do sistema em 1mes
        let consumo_restante = (consumo_diario * 30) - potencia_sistema_gerada
            
        // CONTAS COM VALORES
        let valor_energia_restante = (consumo_restante * custo_energia).toFixed(2) // quantidade que ainda sera pago de energia
        let valor_energia_antigo = (userinfo.gasto_energia).toFixed(2) // quantidade que pagava ao todo
        let valor_energia_economizado = (valor_energia_antigo - valor_energia_restante).toFixed(2) // valor economizado em 1 mes
        let valor_energia_economizado_ano = valor_energia_economizado * 12
        let porcentagem_valor_energia_economizada = Math.floor(100 - ((valor_energia_restante / valor_energia_antigo) * 100))
        let custo_instalacao_sistema = ((potencia_sistema_gerada/100) * 4000) * -1
        let saldo = custo_instalacao_sistema

        // LUCRO ANO A ANO
        let payback_anos = -1
        let payback_values = [] // registro de cada ano
        for (let i = 1; i <= 25; i++ ){
            saldo = saldo + valor_energia_economizado_ano
            payback_values.push(saldo.toFixed(2))
            if(saldo > 0 && payback_anos == -1){
                payback_anos = i
            }
        }
        return { payback_values, irradiacao, custo_energia, valor_energia_antigo, valor_energia_restante, payback_anos, porcentagem_valor_energia_economizada, consumo_mensal}
    }
    return {calcularOrcamento, clientes}
})
