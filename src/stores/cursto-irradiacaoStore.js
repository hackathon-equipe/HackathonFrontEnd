import { defineStore } from 'pinia'

export const useCustoIrradiacaoStore = defineStore('irradiacao', () => {
    const irradiacaoSolar = [
        { estado: "Acre", irradiacao: 5.4 },
        { estado: "Alagoas", irradiacao: 5.8 },
        { estado: "Amazonas", irradiacao: 5.0 },
        { estado: "Bahia", irradiacao: 5.5 },
        { estado: "Ceará", irradiacao: 6.0 },
        { estado: "Espírito Santo", irradiacao: 5.4 },
        { estado: "Goiás", irradiacao: 5.7 },
        { estado: "Maranhão", irradiacao: 5.2 },
        { estado: "Mato Grosso", irradiacao: 5.8 },
        { estado: "Mato Grosso do Sul", irradiacao: 5.7 },
        { estado: "Minas Gerais", irradiacao: 5.3 },
        { estado: "Pará", irradiacao: 5.1 },
        { estado: "Paraíba", irradiacao: 5.6 },
        { estado: "Paraná", irradiacao: 5.1 },
        { estado: "Pernambuco", irradiacao: 5.9 },
        { estado: "Piauí", irradiacao: 5.7 },
        { estado: "Rio de Janeiro", irradiacao: 5.2 },
        { estado: "Rio Grande do Norte", irradiacao: 5.9 },
        { estado: "Rio Grande do Sul", irradiacao: 5.0 },
        { estado: "Rondônia", irradiacao: 5.3 },
        { estado: "Roraima", irradiacao: 5.4 },
        { estado: "Santa Catarina", irradiacao: 4.9 },
        { estado: "São Paulo", irradiacao: 5.1 },
        { estado: "Sergipe", irradiacao: 5.8 },
        { estado: "Tocantins", irradiacao: 5.7 },
        { estado: "Distrito Federal", irradiacao: 5.6 },
        { estado: "Amapá", irradiacao: 5.2 }
    ];
    return { irradiacaoSolar }
})