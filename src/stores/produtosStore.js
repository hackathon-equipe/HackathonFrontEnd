import { defineStore } from 'pinia'

export const useProdutosStore = defineStore('produtos', () => {
  const produtos = [
    {
      nome: 'Kit Energia Solar 1,14kWp 570W...',
      imageUrl: 'placa',
      preco: 'R$ 1.000,00',
      parcelas: 'em até 10x de R$ 100,00',
      VerMais: {
        'descricao': 'Caixa de Conexão IP 68 com 3 diodos de by-pass',
        'Máximo Tensão de Trabalho': '1500Vcc',
        'Moldura': 'Alumínio Anodizado',
        'Coeficiente de Temperatura (Pmax)': '0.35 %/°C',
        'Coeficiente de Temperatura (Voc)': '0.27 %/°C',
        'Temperatura de Operação da Placa': '- 40 ~ + 85 °C',
        'Temperatura de Operação Ambiente': '45°C (± 2°C)',
        'Tipo de Vidro Frontal': '3.2mm temperado',
        'Nº de Células': '144 (6x24)',
        'Coeficiente de Temperatura (Isc)': '0.050 %/°C',
        'Dimensões (AxLxP)': '2279 X 1134 X 35mm',
        'Máxima carga estática na parte frontal (ex:carga sob placa)': '5400Pa',
        'Tipo de Material': 'Monocristalino (Half-cell)',
        'Tipo de Conector': 'Conectores MC4',
        'Eficiência do Módulo': '21.30%',
        'Nível de Eficiência Energética no Inmetro': 'Nível A',
        'Máxima carga estática traseira (ex:vento)': '2400Pa',
        'Área da seção do': 'cabo:4mm²',
        'REGISTRO INMETRO': '007202/2021',
        'Corrente Máxima por Fusíveis em Série': '25A',
        'Peso': '29kg',
        'CARACTERÍSTICAS': 'Economia Imediata Certificado pelo INMETRO Resistente'
      }
    },
    {
      nome: 'Painel Solar 450W Monocristalino Half-Cell',
      imageUrl: 'placa2',
      preco: 'R$ 1.000,00',
      parcelas: 'em até 10x de R$ 100,00',
      VerMais: {
        'descricao': 'Caixa de Conexão IP 68 com 3 diodos de by-pass',
        'Máximo Tensão de Trabalho': '1500Vcc',
        'Moldura': 'Alumínio Anodizado',
        'Coeficiente de Temperatura (Pmax)': '0.35 %/°C',
        'Coeficiente de Temperatura (Voc)': '0.27 %/°C',
        'Temperatura de Operação da Placa': '- 40 ~ + 85 °C',
        'Temperatura de Operação Ambiente': '45°C (± 2°C)',
        'Tipo de Vidro Frontal': '3.2mm temperado',
        'Nº de Células': '144 (6x24)',
        'Coeficiente de Temperatura (Isc)': '0.050 %/°C',
        'Dimensões (AxLxP)': '2279 X 1134 X 35mm',
        'Máxima carga estática na parte frontal (ex:carga sob placa)': '5400Pa',
        'Tipo de Material': 'Monocristalino (Half-cell)',
        'Tipo de Conector': 'Conectores MC4',
        'Eficiência do Módulo': '21.30%',
        'Nível de Eficiência Energética no Inmetro': 'Nível A',
        'Máxima carga estática traseira (ex:vento)': '2400Pa',
        'Área da seção do': 'cabo:4mm²',
        'REGISTRO INMETRO': '007202/2021',
        'Corrente Máxima por Fusíveis em Série': '25A',
        'Peso': '29kg',
        'CARACTERÍSTICAS': 'Economia Imediata Certificado pelo INMETRO Resistente'
      }
    },
    {
      nome: 'Cabo Solar 4mm 30M Preto',
      imageUrl: 'caboSolar',
      preco: 'R$ 1.000,00',
      parcelas: 'em até 10x de R$ 100,00',
      VerMais: {
        'descricao': 'Caixa de Conexão IP 68 com 3 diodos de by-pass',
        'Máximo Tensão de Trabalho': '1500Vcc',
        'Moldura': 'Alumínio Anodizado',
        'Coeficiente de Temperatura (Pmax)': '0.35 %/°C',
        'Coeficiente de Temperatura (Voc)': '0.27 %/°C',
        'Temperatura de Operação da Placa': '- 40 ~ + 85 °C',
        'Temperatura de Operação Ambiente': '45°C (± 2°C)',
        'Tipo de Vidro Frontal': '3.2mm temperado',
        'Nº de Células': '144 (6x24)',
        'Coeficiente de Temperatura (Isc)': '0.050 %/°C',
        'Dimensões (AxLxP)': '2279 X 1134 X 35mm',
        'Máxima carga estática na parte frontal (ex:carga sob placa)': '5400Pa',
        'Tipo de Material': 'Monocristalino (Half-cell)',
        'Tipo de Conector': 'Conectores MC4',
        'Eficiência do Módulo': '21.30%',
        'Nível de Eficiência Energética no Inmetro': 'Nível A',
        'Máxima carga estática traseira (ex:vento)': '2400Pa',
        'Área da seção do': 'cabo:4mm²',
        'REGISTRO INMETRO': '007202/2021',
        'Corrente Máxima por Fusíveis em Série': '25A',
        'Peso': '29kg',
        'CARACTERÍSTICAS': 'Economia Imediata Certificado pelo INMETRO Resistente'
      }
    },
    {
      nome: 'Kit Energia Solar 1,14kWp 570W...',
      imageUrl: 'estruturaSolar',
      preco: 'R$ 1.000,00',
      parcelas: 'em até 10x de R$ 100,00',
      VerMais: {
        'descricao': 'Caixa de Conexão IP 68 com 3 diodos de by-pass',
        'Máximo Tensão de Trabalho': '1500Vcc',
        'Moldura': 'Alumínio Anodizado',
        'Coeficiente de Temperatura (Pmax)': '0.35 %/°C',
        'Coeficiente de Temperatura (Voc)': '0.27 %/°C',
        'Temperatura de Operação da Placa': '- 40 ~ + 85 °C',
        'Temperatura de Operação Ambiente': '45°C (± 2°C)',
        'Tipo de Vidro Frontal': '3.2mm temperado',
        'Nº de Células': '144 (6x24)',
        'Coeficiente de Temperatura (Isc)': '0.050 %/°C',
        'Dimensões (AxLxP)': '2279 X 1134 X 35mm',
        'Máxima carga estática na parte frontal (ex:carga sob placa)': '5400Pa',
        'Tipo de Material': 'Monocristalino (Half-cell)',
        'Tipo de Conector': 'Conectores MC4',
        'Eficiência do Módulo': '21.30%',
        'Nível de Eficiência Energética no Inmetro': 'Nível A',
        'Máxima carga estática traseira (ex:vento)': '2400Pa',
        'Área da seção do': 'cabo:4mm²',
        'REGISTRO INMETRO': '007202/2021',
        'Corrente Máxima por Fusíveis em Série': '25A',
        'Peso': '29kg',
        'CARACTERÍSTICAS': 'Economia Imediata Certificado pelo INMETRO Resistente'
      }
    },
    {
      nome: 'Kit Energia Solar 1,14kWp 570W...',
      imageUrl: 'placa3',
      preco: 'R$ 1.000,00',
      parcelas: 'em até 10x de R$ 100,00',
      VerMais: {
        'descricao': 'Caixa de Conexão IP 68 com 3 diodos de by-pass',
        'Máximo Tensão de Trabalho': '1500Vcc',
        'Moldura': 'Alumínio Anodizado',
        'Coeficiente de Temperatura (Pmax)': '0.35 %/°C',
        'Coeficiente de Temperatura (Voc)': '0.27 %/°C',
        'Temperatura de Operação da Placa': '- 40 ~ + 85 °C',
        'Temperatura de Operação Ambiente': '45°C (± 2°C)',
        'Tipo de Vidro Frontal': '3.2mm temperado',
        'Nº de Células': '144 (6x24)',
        'Coeficiente de Temperatura (Isc)': '0.050 %/°C',
        'Dimensões (AxLxP)': '2279 X 1134 X 35mm',
        'Máxima carga estática na parte frontal (ex:carga sob placa)': '5400Pa',
        'Tipo de Material': 'Monocristalino (Half-cell)',
        'Tipo de Conector': 'Conectores MC4',
        'Eficiência do Módulo': '21.30%',
        'Nível de Eficiência Energética no Inmetro': 'Nível A',
        'Máxima carga estática traseira (ex:vento)': '2400Pa',
        'Área da seção do': 'cabo:4mm²',
        'REGISTRO INMETRO': '007202/2021',
        'Corrente Máxima por Fusíveis em Série': '25A',
        'Peso': '29kg',
        'CARACTERÍSTICAS': 'Economia Imediata Certificado pelo INMETRO Resistente'
      }
    },
    {
      nome: 'ultimo',
      imageUrl: 'placa',
      preco: 'R$ 1.000,00',
      parcelas: 'em até 10x de R$ 100,00',
      VerMais: {
        'descricao': 'Caixa de Conexão IP 68 com 3 diodos de by-pass',
        'Máximo Tensão de Trabalho': '1500Vcc',
        'Moldura': 'Alumínio Anodizado',
        'Coeficiente de Temperatura (Pmax)': '0.35 %/°C',
        'Coeficiente de Temperatura (Voc)': '0.27 %/°C',
        'Temperatura de Operação da Placa': '- 40 ~ + 85 °C',
        'Temperatura de Operação Ambiente': '45°C (± 2°C)',
        'Tipo de Vidro Frontal': '3.2mm temperado',
        'Nº de Células': '144 (6x24)',
        'Coeficiente de Temperatura (Isc)': '0.050 %/°C',
        'Dimensões (AxLxP)': '2279 X 1134 X 35mm',
        'Máxima carga estática na parte frontal (ex:carga sob placa)': '5400Pa',
        'Tipo de Material': 'Monocristalino (Half-cell)',
        'Tipo de Conector': 'Conectores MC4',
        'Eficiência do Módulo': '21.30%',
        'Nível de Eficiência Energética no Inmetro': 'Nível A',
        'Máxima carga estática traseira (ex:vento)': '2400Pa',
        'Área da seção do': 'cabo:4mm²',
        'REGISTRO INMETRO': '007202/2021',
        'Corrente Máxima por Fusíveis em Série': '25A',
        'Peso': '29kg',
        'CARACTERÍSTICAS': 'Economia Imediata Certificado pelo INMETRO Resistente'
      }
    }
  ]
  return { produtos }
})
