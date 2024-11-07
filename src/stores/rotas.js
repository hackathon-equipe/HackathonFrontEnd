import { defineStore } from 'pinia'

export const useRotasStore = defineStore('rotas', () => {  
    const titles = [
        {
          text: "Home",
          link: "/",
        },
        {
          text: "Produtos",
          link: "/produtos/all",
          hover: "alertfunction",
        },
        {
          text: "Orçamentos",
          link: "/orcamentos",
        },
        {
          text: "Sobre",
          link: "/sobre",
        },
      ];
      const produtos = [
        {
          nome: "Placas Solares",
          link: "/produtos/placas-solares",
        },
        {
          nome: "Conectores",
          link: "/produtos/conectores",
        },
        {
          nome: "Kits Solares",
          link: "/produtos/kits-solares",
        },
        {
          nome: "Micro inversores",
          link: "/produtos/micro-inversores",
        },
        {
          nome: "Inversores",
          link: "/produtos/inversores",
        },
        {
          nome: "Cabos",
          link: "/produtos/cabos",
        },
        {
          nome: "Estrutura",
          link: "/produtos/estrutura",
        },
        {
          nome: "Baterias",
          link: "/produtos/baterias",
        },
      ];
      const promocoes =
        {
          text: "Promoções",
          link: "/promocoes",
        };
        
        const verTudo =
        {
          text: "Produtos",
          link: "/all",
        };
      
  return { titles, produtos, promocoes, verTudo }
})
