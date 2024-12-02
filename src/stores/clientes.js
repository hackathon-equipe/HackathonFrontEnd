import { defineStore } from 'pinia'

export const useClientesStore = defineStore('clientes', () => {
    const clientes = [
        { nome: "Júlia Fuck", email: "julia.fuck@example.com" },
        { nome: "Carlos Silva", email: "carlos.silva@example.com" },
        { nome: "Ana Souza", email: "ana.souza@example.com" },
        { nome: "Pedro Almeida", email: "pedro.almeida@example.com" },
        { nome: "Mariana Costa", email: "mariana.costa@example.com" },
        { nome: "Lucas Pereira", email: "lucas.pereira@example.com" },
        { nome: "Beatriz Oliveira", email: "beatriz.oliveira@example.com" },
        { nome: "Ricardo Gomes", email: "ricardo.gomes@example.com" },
        { nome: "Laura Martins", email: "laura.martins@example.com" },
        { nome: "Gabriel Santos", email: "gabriel.santos@example.com" },
        { nome: "Fernanda Lima", email: "fernanda.lima@example.com" },
        { nome: "Eduardo Barbosa", email: "eduardo.barbosa@example.com" },
        { nome: "Renata Alves", email: "renata.alves@example.com" },
        { nome: "Rafael Costa", email: "rafael.costa@example.com" },
        { nome: "Juliana Pereira", email: "juliana.pereira@example.com" }
      ];
      
    return {clientes}
})
