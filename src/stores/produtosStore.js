import { defineStore } from 'pinia'
import ProdutosService from '@/service/produtos'
import {ref} from 'vue'

const produtosService = new ProdutosService

export const useProdutosStore = defineStore('produtos', () => {

  const produtosTeste = ref([])

  const carregarProdutos = async () => {
    produtos.value = await produtosService.BuscarTodosOsProdutos();
};

  const produtos = [
    {
      id: 1,
      nome: 'Painel Solar 550W Monocristalino Half-Cell',
      preco: '879.00',
      descricao: {
        Nome: 'Painel Solar 550W Monocristalino Half-Cell',
        Peso: '29kg',
        PDFTecnico: 'https://content.elgin.com.br/assets/arquivos/350550ZS0000-Placa-solar-550W.pdf',
        TipoDeVidro: '3.2mm temperado',
        TipoDeCelula: 'Monocristalino (Half-cell)',
        PotenciaMaxima: '550W',
        TipoDeConector: 'MC4',
        DimensoesAltura: '2279mm',
        RegistroInmetro: '007202/2021',
        DimensoesLargura: '1134mm',
        MaterialDaMoldura: 'Alumínio Anodizado',
        EficienciaDoModulo: '21.30%',
        DimensoesProfundidade: '35mm',
        TensaoMaximaDeTrabalho: '1500Vcc',
        CargaMaximaEstaticaTras: '2400Pa',
        CoeficienteTemperaturaIsc: '0.050%/°C',
        CoeficienteTemperaturaVoc: '-0.27%/°C',
        CargaMaximaEstaticaFrontal: '5400Pa',
        CoeficienteTemperaturaPmax: '-0.35%/°C',
        CaixaDeConexaoDiodosDeByPass: '3',
        CaixaDeConexaoGrauDeProtecao: 'IP68',
        TemperaturaDeOperacaoAmbiente: '45°C ± 2°C',
        CorrenteMaximaPorFusiveisEmSerie: '25A',
        NivelDeEficienciaEnergeticaInmetro: 'Nível A',
        TemperaturaDeOperacaoDaPlacaMaxima: '+85°C',
        TemperaturaDeOperacaoDaPlacaMinima: '-40°C'
      },
      garantia_anos: 12,
      quantidade: 15,
      categoria: {
        id: 1,
        nome: 'Placas Solares',
        descricao:
          'As placas solares são dispositivos de energia limpa e renovável que convertem a luz do sol em eletricidade, possibilitando redução de custos energéticos e impacto ambiental positivo. Elas funcionam através de células fotovoltaicas que, ao serem expostas à luz solar, geram corrente elétrica pelo efeito fotovoltaico. São usadas em uma variedade de aplicações, desde pequenos sistemas residenciais até grandes instalações comerciais.'
      },
      fabricante: [
        {
          id: 1,
          nome: 'Elgin',
          cnpj: '52.556.578/0002-03',
          email: 'sac@elgin.com.br',
          site: 'https://www.elgin.com.br/',
          endereco: [3, 4],
          telefone: [8]
        }
      ],
      foto: [
        {
          id: 21,
          attachment_key: 'b421cd9c-bb86-45e9-8f4f-d79c62b91ca6',
          public_id: '93ce570b-12d7-442f-8b0e-cec1c8326d0b',
          file: 'https://res.cloudinary.com/dw2awmnxl/image/upload/v1/media/images/93ce570b-12d7-442f-8b0e-cec1c8326d0b_vu0d4j',
          description: 'Placa Solar ELGIN 550 W',
          uploaded_on: '2024-11-14T14:22:00.616222-03:00'
        }
      ]
    },
    {
      id: 2,
      nome: 'Painel Solar 590W Monocristalino Half-Cell',
      preco: '920.00',
      descricao: {
        Nome: 'Painel Solar 590W Monocristalino Half-Cell',
        Peso: '31kg',
        PDFTecnico:
          'https://content.elgin.com.br/assets/arquivos/350590Z00000-Placa-solar-590W.pdf',
        TipoDeVidro: '3.2mm temperado',
        TipoDeCelula: 'Monocristalino (Half-cell)',
        PotenciaMaxima: '590W',
        TipoDeConector: 'MC4',
        DimensoesAltura: '2279mm',
        RegistroInmetro: '007202/2021',
        DimensoesLargura: '1134mm',
        MaterialDaMoldura: 'Alumínio Anodizado',
        EficienciaDoModulo: '21.30%',
        DimensoesProfundidade: '35mm',
        TensaoMaximaDeTrabalho: '1500Vcc',
        CargaMaximaEstaticaTras: '2400Pa',
        CoeficienteTemperaturaIsc: '0.050%/°C',
        CoeficienteTemperaturaVoc: '-0.27%/°C',
        CargaMaximaEstaticaFrontal: '5400Pa',
        CoeficienteTemperaturaPmax: '-0.35%/°C',
        CaixaDeConexaoDiodosDeByPass: '3',
        CaixaDeConexaoGrauDeProtecao: 'IP68',
        TemperaturaDeOperacaoAmbiente: '45°C ± 2°C',
        CorrenteMaximaPorFusiveisEmSerie: '25A',
        NivelDeEficienciaEnergeticaInmetro: 'Nível A',
        TemperaturaDeOperacaoDaPlacaMaxima: '+85°C',
        TemperaturaDeOperacaoDaPlacaMinima: '-40°C'
      },
      garantia_anos: 15,
      quantidade: 20,
      categoria: {
        id: 1,
        nome: 'Placas Solares',
        descricao:
          'As placas solares são dispositivos de energia limpa e renovável que convertem a luz do sol em eletricidade, possibilitando redução de custos energéticos e impacto ambiental positivo. Elas funcionam através de células fotovoltaicas que, ao serem expostas à luz solar, geram corrente elétrica pelo efeito fotovoltaico. São usadas em uma variedade de aplicações, desde pequenos sistemas residenciais até grandes instalações comerciais.'
      },
      fabricante: [
        {
          id: 1,
          nome: 'Elgin',
          cnpj: '52.556.578/0002-03',
          email: 'sac@elgin.com.br',
          site: 'https://www.elgin.com.br/',
          endereco: [3, 4],
          telefone: [8]
        }
      ],
      foto: [
        {
          id: 22,
          attachment_key: '6d075486-b73a-4170-8164-70b65e9c80c2',
          public_id: '05472d40-7076-4cfd-93e0-0e04fec6f8b6',
          file: 'https://res.cloudinary.com/dw2awmnxl/image/upload/v1/media/images/05472d40-7076-4cfd-93e0-0e04fec6f8b6_ygqh9a',
          description: 'Painel Solar 590W Monocristalino Half-Cell',
          uploaded_on: '2024-11-14T15:27:08.718255-03:00'
        },
        {
          id: 23,
          attachment_key: 'acd52062-1fc4-4833-a092-7b5293ef1df8',
          public_id: 'bda250dc-0f78-45b0-a284-af62c08d0210',
          file: 'https://res.cloudinary.com/dw2awmnxl/image/upload/v1/media/images/bda250dc-0f78-45b0-a284-af62c08d0210_j0jtsp',
          description: 'Painel Solar 590W Monocristalino Half-Cell',
          uploaded_on: '2024-11-14T15:27:31.153932-03:00'
        }
      ]
    },
    {
      id: 3,
      nome: 'Painel Solar 450W Monocristalino Half-Cell',
      preco: '639.00',
      descricao: {
        Nome: 'Painel Solar 450W Monocristalino',
        Peso: '22.6kg',
        PDFTecnico:
          'https://d2u2qhufg0q9tn.cloudfront.net/assets/arquivos/imgCard_c00791a9-9047-4318-bd4b-49ff09d6a5a5_ELGIN-450W.pdf',
        TipoDeVidro: '3.2mm temperado',
        CaixaDeConexao: 'IP65/IP67',
        TipoDeConector: 'Conectores MC4',
        TipoDeMaterial: 'Monocristalino',
        DimensoesAltura: '1980mm',
        NumeroDeCelulas: '72 (6x12)',
        RegistroInmetro: '009468/2019',
        DimensoesLargura: '1002mm',
        AreaSeçãoDoCabo: 'TUV, 900mm, 4mm²',
        MaterialDaMoldura: 'Alumínio Anodizado',
        EficienciaDoModulo: '20.26%',
        DimensoesProfundidade: '40mm',
        TensaoMaximaDeTrabalho: '1000/1500Vcc',
        CargaMaximaEstaticaTras: '2400Pa (50lb/ft2)',
        CoeficienteTemperaturaIsc: '0.048%/°C',
        CoeficienteTemperaturaVoc: '-0,29%/°C',
        CargaMaximaEstaticaFrontal: '5400Pa (112lb/ft2)',
        CoeficienteTemperaturaPmax: '-0,40%/°C',
        TemperaturaDeOperacaoDaPlaca: '-40 ~ +85°C',
        TemperaturaDeOperacaoAmbiente: '45°C (+/- 2°C)',
        CorrenteMaximaPorFusiveisEmSerie: '20A',
        NivelDeEficienciaEnergeticaInmetro: 'Nível A'
      },
      garantia_anos: 12,
      quantidade: 15,
      categoria: {
        id: 1,
        nome: 'Placas Solares',
        descricao:
          'As placas solares são dispositivos de energia limpa e renovável que convertem a luz do sol em eletricidade, possibilitando redução de custos energéticos e impacto ambiental positivo. Elas funcionam através de células fotovoltaicas que, ao serem expostas à luz solar, geram corrente elétrica pelo efeito fotovoltaico. São usadas em uma variedade de aplicações, desde pequenos sistemas residenciais até grandes instalações comerciais.'
      },
      fabricante: [
        {
          id: 1,
          nome: 'Elgin',
          cnpj: '52.556.578/0002-03',
          email: 'sac@elgin.com.br',
          site: 'https://www.elgin.com.br/',
          endereco: [3, 4],
          telefone: [8]
        }
      ],
      foto: [
        {
          id: 24,
          attachment_key: '267c9712-08ee-4441-b136-c27a070aa19a',
          public_id: '259e8319-778d-4151-8d84-3d4ca0496aca',
          file: 'https://res.cloudinary.com/dw2awmnxl/image/upload/v1/media/images/259e8319-778d-4151-8d84-3d4ca0496aca_hykibm',
          description: 'Painel Solar 450W',
          uploaded_on: '2024-11-14T15:49:59.413226-03:00'
        },
        {
          id: 25,
          attachment_key: '576c3a9b-3463-4fa7-b0d1-6c0965af67e0',
          public_id: '62230440-ebd9-46b4-a1eb-cc658d4a4084',
          file: 'https://res.cloudinary.com/dw2awmnxl/image/upload/v1/media/images/62230440-ebd9-46b4-a1eb-cc658d4a4084_bpt43b',
          description: 'Painel Solar 450W',
          uploaded_on: '2024-11-14T15:51:28.127784-03:00'
        },
        {
          id: 26,
          attachment_key: '168358cb-05a6-461a-b573-cd7a291ad5ca',
          public_id: '55dbbff7-836a-41e1-a9a2-939c89914e3b',
          file: 'https://res.cloudinary.com/dw2awmnxl/image/upload/v1/media/images/55dbbff7-836a-41e1-a9a2-939c89914e3b_dqarht',
          description: 'Painel Solar 450W',
          uploaded_on: '2024-11-14T15:52:02.823371-03:00'
        }
      ]
    },
    {
      id: 5,
      nome: 'Kit de Energia Solar de 0kWp até 3kWp',
      preco: '12000.00',
      descricao: {
        Nome: 'Kits Energia Solar de 0kWp até 3kWp',
        Voltagem: '220V',
        PotenciaDoKit: '0 kWp até 3 kWp',
        PaineisSolares: 'Kits Com Painéis de 340W ou 400W',
        TipoDoInversor: 'Micro Inversor',
        ComposicaoDoKit:
          'Painéis Solares, Micro Inversores, Conectores, Cabos e Estrutura (Opcional)'
      },
      garantia_anos: 15,
      quantidade: 12,
      categoria: {
        id: 5,
        nome: 'Kits Solares',
        descricao:
          'Kits solares são conjuntos completos de equipamentos e componentes projetados para permitir a instalação e o funcionamento de sistemas de energia solar em residências, empresas ou áreas rurais.'
      },
      fabricante: [
        {
          id: 1,
          nome: 'Elgin',
          cnpj: '52.556.578/0002-03',
          email: 'sac@elgin.com.br',
          site: 'https://www.elgin.com.br/',
          endereco: [3, 4],
          telefone: [8]
        }
      ],
      foto: [
        {
          id: 27,
          attachment_key: '0f284662-32a0-4f1d-8418-5c1be528190d',
          public_id: '3a90a2ef-74c0-4481-9cdf-225868be1248',
          file: 'https://res.cloudinary.com/dw2awmnxl/image/upload/v1/media/images/3a90a2ef-74c0-4481-9cdf-225868be1248_ds5ce8',
          description: 'Kit de Energia Solar de 0kWp até 3kWp ELGIN',
          uploaded_on: '2024-11-14T16:10:04.376483-03:00'
        },
        {
          id: 28,
          attachment_key: 'fa2bafa2-6c66-4653-b031-4282d1438c4e',
          public_id: '238569fe-7412-4d7d-911c-6428a2e5606f',
          file: 'https://res.cloudinary.com/dw2awmnxl/image/upload/v1/media/images/238569fe-7412-4d7d-911c-6428a2e5606f_itp4fl',
          description: 'Kit de Energia Solar de 0kWp até 3kWp ELGIN',
          uploaded_on: '2024-11-14T16:10:41.129347-03:00'
        },
        {
          id: 29,
          attachment_key: '2588ba61-2dcb-4c39-8d13-194165cffa60',
          public_id: 'e954fb6a-f798-4610-8343-c2632eec7948',
          file: 'https://res.cloudinary.com/dw2awmnxl/image/upload/v1/media/images/e954fb6a-f798-4610-8343-c2632eec7948_ot0bp9',
          description: 'Kit de Energia Solar de 0kWp até 3kWp ELGIN',
          uploaded_on: '2024-11-14T16:11:06.527280-03:00'
        },
        {
          id: 30,
          attachment_key: 'dc26b67a-59d2-4ee9-a11e-bf247df4d823',
          public_id: 'bedd5726-b9e8-4aea-982c-95be112e8369',
          file: 'https://res.cloudinary.com/dw2awmnxl/image/upload/v1/media/images/bedd5726-b9e8-4aea-982c-95be112e8369_ecuw6j',
          description: 'Kit de Energia Solar de 0kWp até 3kWp ELGIN',
          uploaded_on: '2024-11-14T16:11:33.867504-03:00'
        }
      ]
    },
    {
      id: 6,
      nome: 'Kit de Energia Solar de 3,1kWp até 5kWp',
      preco: '20000.00',
      descricao: {
        Nome: 'Kits Energia Solar de 3kWp até 5kWp',
        Voltagem: '220V',
        PotenciaDoKit: '3,1 kWp até 5 kWp',
        PaineisSolares: 'Kits Com Painéis de 340W ou 400W',
        TipoDoInversor: 'Inversor',
        ComposicaoDoKit:
          'Painéis Solares, Inversores, String Box, Conectores, Cabos e Estrutura (Opcional)'
      },
      garantia_anos: 15,
      quantidade: 15,
      categoria: {
        id: 5,
        nome: 'Kits Solares',
        descricao:
          'Kits solares são conjuntos completos de equipamentos e componentes projetados para permitir a instalação e o funcionamento de sistemas de energia solar em residências, empresas ou áreas rurais.'
      },
      fabricante: [
        {
          id: 1,
          nome: 'Elgin',
          cnpj: '52.556.578/0002-03',
          email: 'sac@elgin.com.br',
          site: 'https://www.elgin.com.br/',
          endereco: [3, 4],
          telefone: [8]
        }
      ],
      foto: [
        {
          id: 31,
          attachment_key: '62ab1699-6e79-4573-a33a-c17b59578d42',
          public_id: '8cbba887-6ceb-4640-b0b9-765d8e465cf2',
          file: 'https://res.cloudinary.com/dw2awmnxl/image/upload/v1/media/images/8cbba887-6ceb-4640-b0b9-765d8e465cf2_vqlww7',
          description: 'Kit de Energia Solar de 3,1kWp até 5kWp',
          uploaded_on: '2024-11-14T16:41:53.493740-03:00'
        }
      ]
    },
    {
      id: 7,
      nome: 'Kit de Energia Solar de 5,1kWp até 7,5kWp',
      preco: '35000.00',
      descricao: {
        Nome: 'Kits Energia Solar de 5kWp até 7,5kWp',
        Voltagem: '220 V',
        PotenciaDoKit: '5,1 kWp até 7,5 kWp',
        PaineisSolares: 'Kits Com Painéis de 340W ou 400W',
        TipoDoInversor: 'Inversor',
        ComposicaoDoKit:
          'Kit Formado Por Micro Inversor, Inversor, Painéis Solares, Conectores, Grampos e Estrutura (Opcional)'
      },
      garantia_anos: 15,
      quantidade: 10,
      categoria: {
        id: 5,
        nome: 'Kits Solares',
        descricao:
          'Kits solares são conjuntos completos de equipamentos e componentes projetados para permitir a instalação e o funcionamento de sistemas de energia solar em residências, empresas ou áreas rurais.'
      },
      fabricante: [
        {
          id: 1,
          nome: 'Elgin',
          cnpj: '52.556.578/0002-03',
          email: 'sac@elgin.com.br',
          site: 'https://www.elgin.com.br/',
          endereco: [3, 4],
          telefone: [8]
        }
      ],
      foto: [
        {
          id: 33,
          attachment_key: '71c98823-fe92-4fd0-a575-b0c5bb334d28',
          public_id: '49d1c2d5-a8a6-46a3-b231-964b481599c5',
          file: 'https://res.cloudinary.com/dw2awmnxl/image/upload/v1/media/images/49d1c2d5-a8a6-46a3-b231-964b481599c5_btyf6a',
          description: 'Kit de Energia Solar de 5,1kWp até 7,5kWp',
          uploaded_on: '2024-11-14T16:50:42.188499-03:00'
        }
      ]
    },
    {
      id: 8,
      nome: 'Kit de Energia Solar de 7,51kWp até 10kWp',
      preco: '40000.00',
      descricao: {
        Nome: 'Kits Energia Solar de 7,5kWp até 10kWp',
        Voltagem: '220V',
        PotenciaDoKit: '7,51 kWp até 10 kWp',
        PaineisSolares: 'Kits Com Painéis de 340W ou 400W',
        TipoDoInversor: 'Inversor',
        ComposicaoDoKit:
          'Painéis Solares, Micro Inversores, Conectores, Cabos e Estrutura (Opcional)'
      },
      garantia_anos: 20,
      quantidade: 10,
      categoria: {
        id: 5,
        nome: 'Kits Solares',
        descricao:
          'Kits solares são conjuntos completos de equipamentos e componentes projetados para permitir a instalação e o funcionamento de sistemas de energia solar em residências, empresas ou áreas rurais.'
      },
      fabricante: [
        {
          id: 1,
          nome: 'Elgin',
          cnpj: '52.556.578/0002-03',
          email: 'sac@elgin.com.br',
          site: 'https://www.elgin.com.br/',
          endereco: [3, 4],
          telefone: [8]
        }
      ],
      foto: [
        {
          id: 34,
          attachment_key: '6ada6a35-1c23-4fd5-a88c-46f2aa300c28',
          public_id: 'dfbd6b7a-dfff-4bda-80d3-abe460346a84',
          file: 'https://res.cloudinary.com/dw2awmnxl/image/upload/v1/media/images/dfbd6b7a-dfff-4bda-80d3-abe460346a84_fdd6eg',
          description: 'Kit de Energia Solar de 7,51kWp até 10kWp',
          uploaded_on: '2024-11-14T17:06:32.615023-03:00'
        }
      ]
    },
    {
      id: 9,
      nome: 'Kit de Energia Solar de 10,1kWp até 20kWp',
      preco: '50000.00',
      descricao: {
        Nome: 'Kits Energia Solar de 10kWp até 20kWp',
        Voltagem: '220V/440V',
        PotenciaDoKit: '10,1 kWp até 20 kWp',
        PaineisSolares: '340W ou 400W',
        TipoDoInversor: 'Inversor',
        ComposicaoDoKit:
          'Painéis Solares, Inversores, String Box, Conectores, Cabos e Estrutura (Opcional)'
      },
      garantia_anos: 20,
      quantidade: 5,
      categoria: {
        id: 5,
        nome: 'Kits Solares',
        descricao:
          'Kits solares são conjuntos completos de equipamentos e componentes projetados para permitir a instalação e o funcionamento de sistemas de energia solar em residências, empresas ou áreas rurais.'
      },
      fabricante: [
        {
          id: 1,
          nome: 'Elgin',
          cnpj: '52.556.578/0002-03',
          email: 'sac@elgin.com.br',
          site: 'https://www.elgin.com.br/',
          endereco: [3, 4],
          telefone: [8]
        }
      ],
      foto: [
        {
          id: 39,
          attachment_key: 'fdf40e58-01ee-45f8-baf6-3f0f0d86b72c',
          public_id: 'cdf24fcb-8d1d-455d-b8a5-572a8852eb5a',
          file: 'https://res.cloudinary.com/dw2awmnxl/image/upload/v1/media/images/cdf24fcb-8d1d-455d-b8a5-572a8852eb5a_mm1v2l',
          description: 'Kit de Energia Solar de 10,1kWp até 20kWp',
          uploaded_on: '2024-11-14T17:19:46.719926-03:00'
        },
        {
          id: 35,
          attachment_key: 'c3b3ea2c-0baa-4a37-9410-510a8a8d4c7b',
          public_id: '3a0c2cea-f522-458e-a463-fdfd26697316',
          file: 'https://res.cloudinary.com/dw2awmnxl/image/upload/v1/media/images/3a0c2cea-f522-458e-a463-fdfd26697316_daspt1',
          description: 'Kit de Energia Solar de 10,1kWp até 20kWp',
          uploaded_on: '2024-11-14T17:17:34.925159-03:00'
        },
        {
          id: 36,
          attachment_key: '7b4e9604-7841-440b-9823-8c8ebf54bc00',
          public_id: '921e4e5d-2ecf-4d2f-a80b-a9ba66d24ab1',
          file: 'https://res.cloudinary.com/dw2awmnxl/image/upload/v1/media/images/921e4e5d-2ecf-4d2f-a80b-a9ba66d24ab1_ckuzxy',
          description: 'Kit de Energia Solar de 10,1kWp até 20kWp',
          uploaded_on: '2024-11-14T17:18:02.061273-03:00'
        },
        {
          id: 37,
          attachment_key: '516b4049-edd1-4b88-8e4c-e2816fca1601',
          public_id: '144c81cf-8d7d-416f-9f0b-b97a4e010b07',
          file: 'https://res.cloudinary.com/dw2awmnxl/image/upload/v1/media/images/144c81cf-8d7d-416f-9f0b-b97a4e010b07_vhvfzw',
          description: 'Kit de Energia Solar de 10,1kWp até 20kWp',
          uploaded_on: '2024-11-14T17:18:33.935558-03:00'
        }
      ]
    },
    {
      id: 10,
      nome: 'Kit de Energia Solar de 20,1kWp até 50kWp',
      preco: '65000.00',
      descricao: {
        Nome: 'Kits Energia Solar de 20kWp até 50kWp',
        Voltagem: '220V/440V',
        PotenciaDoKit: '20,1 kWp até 50 kWp',
        PaineisSolares: '340W ou 400W',
        TipoDoInversor: 'Inversor',
        ComposicaoDoKit:
          'Painéis Solares, Inversores, String Box, Conectores, Cabos e Estrutura (Opcional)'
      },
      garantia_anos: 20,
      quantidade: 10,
      categoria: {
        id: 5,
        nome: 'Kits Solares',
        descricao:
          'Kits solares são conjuntos completos de equipamentos e componentes projetados para permitir a instalação e o funcionamento de sistemas de energia solar em residências, empresas ou áreas rurais.'
      },
      fabricante: [
        {
          id: 1,
          nome: 'Elgin',
          cnpj: '52.556.578/0002-03',
          email: 'sac@elgin.com.br',
          site: 'https://www.elgin.com.br/',
          endereco: [3, 4],
          telefone: [8]
        }
      ],
      foto: [
        {
          id: 40,
          attachment_key: 'a03fde0b-46e2-4c4c-8318-7d6abf6e4e85',
          public_id: '9bfc3a06-a088-4ac1-bfb7-632cd3f31fd2',
          file: 'https://res.cloudinary.com/dw2awmnxl/image/upload/v1/media/images/9bfc3a06-a088-4ac1-bfb7-632cd3f31fd2_be5drx',
          description: 'Kit de Energia Solar de 20,1kWp até 50kWp ELGIN',
          uploaded_on: '2024-11-17T21:51:52.783703-03:00'
        },
        {
          id: 41,
          attachment_key: '901e3f24-d8c0-478c-8846-1a8d6801011e',
          public_id: '4aa0f701-1fef-4535-bff5-cc0802ecef17',
          file: 'https://res.cloudinary.com/dw2awmnxl/image/upload/v1/media/images/4aa0f701-1fef-4535-bff5-cc0802ecef17_dwdpes',
          description: 'Kit de Energia Solar de 20,1kWp até 50kWp ELGIN',
          uploaded_on: '2024-11-17T21:55:01.798895-03:00'
        },
        {
          id: 42,
          attachment_key: '61e15986-dd4a-4541-b2cc-ad1aa81049e9',
          public_id: '17e791e5-c4cb-4231-b658-3e0ad720620b',
          file: 'https://res.cloudinary.com/dw2awmnxl/image/upload/v1/media/images/17e791e5-c4cb-4231-b658-3e0ad720620b_rwrrkd',
          description: 'Kit de Energia Solar de 20,1kWp até 50kWp ELGIN',
          uploaded_on: '2024-11-17T21:55:23.649045-03:00'
        },
        {
          id: 43,
          attachment_key: '65776d0e-9a2d-4b42-a4d3-ea2b57a36913',
          public_id: 'e56b25f2-821f-46dc-8f99-2aab22e336fd',
          file: 'https://res.cloudinary.com/dw2awmnxl/image/upload/v1/media/images/e56b25f2-821f-46dc-8f99-2aab22e336fd_b5uwgc',
          description: 'Kit de Energia Solar de 20,1kWp até 50kWp ELGIN',
          uploaded_on: '2024-11-17T21:55:45.723563-03:00'
        }
      ]
    },
    {
      id: 11,
      nome: 'Kit de Energia Solar de 50,1kWp até 100kWp',
      preco: '85000.00',
      descricao: {
        Nome: 'Kits Energia Solar de 50kWp até 100kWp',
        Voltagem: '380V/440V',
        PotenciaDoKit: '50,1 kWp até 100 kWp',
        PaineisSolares: '340W ou 400W',
        TipoDoInversor: 'Inversor',
        ComposicaoDoKit:
          'Painéis Solares, Inversores, String Box, Conectores, Cabos e Estrutura (Opcional)'
      },
      garantia_anos: 25,
      quantidade: 5,
      categoria: {
        id: 5,
        nome: 'Kits Solares',
        descricao:
          'Kits solares são conjuntos completos de equipamentos e componentes projetados para permitir a instalação e o funcionamento de sistemas de energia solar em residências, empresas ou áreas rurais.'
      },
      fabricante: [
        {
          id: 1,
          nome: 'Elgin',
          cnpj: '52.556.578/0002-03',
          email: 'sac@elgin.com.br',
          site: 'https://www.elgin.com.br/',
          endereco: [3, 4],
          telefone: [8]
        }
      ],
      foto: [
        {
          id: 44,
          attachment_key: '57483b57-2ede-406d-957b-bae6c66c9ee5',
          public_id: '5da599e8-f5e9-4041-a149-9835faa129f8',
          file: 'https://res.cloudinary.com/dw2awmnxl/image/upload/v1/media/images/5da599e8-f5e9-4041-a149-9835faa129f8_qxdjor',
          description: 'Kit de Energia Solar de 50,1kWp até 100kWp ELGIN',
          uploaded_on: '2024-11-17T21:59:03.668220-03:00'
        },
        {
          id: 45,
          attachment_key: '9b8b12b0-4573-42ae-80ee-7ee8f06dfa42',
          public_id: '852f02a7-23de-4398-b751-23ef025f354b',
          file: 'https://res.cloudinary.com/dw2awmnxl/image/upload/v1/media/images/852f02a7-23de-4398-b751-23ef025f354b_tajdxh',
          description: 'Kit de Energia Solar de 50,1kWp até 100kWp ELGIN',
          uploaded_on: '2024-11-17T21:59:23.454906-03:00'
        },
        {
          id: 46,
          attachment_key: '51ed90b0-91a2-434d-bd24-5ac4e415973f',
          public_id: '19e3f6a0-4859-4862-978f-4df585ca9c7e',
          file: 'https://res.cloudinary.com/dw2awmnxl/image/upload/v1/media/images/19e3f6a0-4859-4862-978f-4df585ca9c7e_uxxxpo',
          description: 'Kit de Energia Solar de 50,1kWp até 100kWp ELGIN',
          uploaded_on: '2024-11-17T21:59:44.421813-03:00'
        }
      ]

    }
    ]

  function getProduct(id) {
    return this.produtos.find((objeto) => objeto.id === id)
  }
  function addProduto(nome, preco, descricao, garantia_anos, quantidade) {
      produtos.value.push({
        id: produtos.value.length > 0 ? produtos.value[produtos.value.length - 1].id + 1 : 1,
        nome: nome,
        preco: preco,
        descricao: descricao,
        garantia_anos: garantia_anos,
        quantidade: quantidade,
      });
      alert(`${produtos[produtos.value.length > 0 ? produtos.value[produtos.value.length - 1].id + 1 : 1]}`)
    }
  
  return { produtos, getProduct, carregarProdutos, produtosTeste, addProduto }

})
