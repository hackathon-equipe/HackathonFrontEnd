<script setup>
import { ref, reactive, watch } from "vue";
import { useProdutosStore } from "@/stores/produtosStore";

const ProdutosStore = useProdutosStore();
const openAddProduct = ref(false);

const produto = reactive({
  id: 1,
  nome: "",
  preco: "",
  descricao: {
    Nome: "",
    Voltagem: "",
    PotenciaDoKit: "",
    PaineisSolares: "",
    TipoDoInversor: "",
    ComposicaoDoKit: "",
  },
  garantia_anos: null,
  quantidade: null,
  categoria: {
    id: 1,
    nome: "",
    descricao: "",
  },
  fabricante: [
    {
      id: 1,
      nome: "",
      cnpj: "",
      email: "",
      site: "",
      endereco: [],
      telefone: [],
    },
  ],
  foto: [],
});

function adicionarProduto() {
  ProdutosStore.addProduto(produto);
  alert(produto.value);
  openAddProduct.value = false;
}

watch(openAddProduct, (newValue) => {
  if (!newValue) {
    Object.assign(produto, {
      id: null,
      nome: "",
      preco: "",
      descricao: {
        Nome: "",
        Voltagem: "",
        PotenciaDoKit: "",
        PaineisSolares: "",
        TipoDoInversor: "",
        ComposicaoDoKit: "",
      },
      garantia_anos: null,
      quantidade: null,
      categoria: {
        id: null,
        nome: "",
        descricao: "",
      },
      fabricante: [
        {
          id: null,
          nome: "",
          cnpj: "",
          email: "",
          site: "",
          endereco: [],
          telefone: [],
        },
      ],
      foto: [],
    });
  }
});
</script>

<template>
  <div @click="openAddProduct = true" class="produto-button">
    <button>+</button>
    <span>Adicionar novo produto</span>
  </div>

  <div class="container-add-produto" v-if="openAddProduct">
    <div class="container">
      <div class="div-fechar">
        <button class="fechar" @click="openAddProduct = false">x</button>
      </div>

      <form @submit.prevent="adicionarProduto">
        <!-- Nome -->
        <label for="nome">Nome do Produto*</label>
        <input v-model="produto.nome" class="input-produto" type="text" id="nome" placeholder="Nome do Produto" required />

        <!-- Preço -->
        <label for="preco">Preço*</label>
        <input v-model="produto.preco" class="input-produto" type="number" id="preco" placeholder="Preço" required />

        <!-- Quantidade -->
        <label for="quantidade">Quantidade*</label>
        <input v-model="produto.quantidade" class="input-produto" type="number" id="quantidade" placeholder="Quantidade" required />

        <!-- Garantia -->
        <label for="garantia">Garantia (anos)*</label>
        <input v-model="produto.garantia_anos" class="input-produto" type="number" id="garantia" placeholder="Garantia em anos" required />

        <!-- Descrição Detalhada -->
        <label for="descricao">Descrição do Produto*</label>
        <textarea v-model="produto.descricao.ComposicaoDoKit" class="input-produto comentario" id="descricao" placeholder="Descrição do Produto" required></textarea>

        <!-- Categoria -->
        <label for="categoria">Categoria*</label>
        <input v-model="produto.categoria.nome" class="input-produto" type="text" id="categoria" placeholder="Categoria" required />

        <!-- Fabricante -->
        <label for="fabricante">Fabricante*</label>
        <input v-model="produto.fabricante[0].nome" class="input-produto" type="text" id="fabricante" placeholder="Nome do Fabricante" required />

        <!-- CNPJ do Fabricante -->
        <label for="cnpj">CNPJ do Fabricante*</label>
        <input v-model="produto.fabricante[0].cnpj" class="input-produto" type="text" id="cnpj" placeholder="CNPJ" required />

        <!-- Email do Fabricante -->
        <label for="email">Email do Fabricante*</label>
        <input v-model="produto.fabricante[0].email" class="input-produto" type="email" id="email" placeholder="Email do Fabricante" required />

        <!-- Site do Fabricante -->
        <label for="site">Site do Fabricante*</label>
        <input v-model="produto.fabricante[0].site" class="input-produto" type="url" id="site" placeholder="Site do Fabricante" />

        <button class="button" type="submit">Cadastrar Produto</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.centro {
  display: flex;
  align-items: center;
  justify-content: center;
}

.fechar {
  background-color: transparent;
  border: none;
}

.div-fechar {
  color: white;
  border: none;
  border-radius: 5px;
  text-align: end;
  width: 100%;
}

/* Container do formulário */
.container-add-produto {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.container {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.produto-button {
  margin-left: calc(15vw - 30px);
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding-right: 9vw;
  margin-bottom: 20px;
  background-color: transparent;
  border: none;
  justify-content: end;
}

.produto-button button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #29375b;
  border-color: #29375b;
  color: rgb(255, 255, 255);
  margin-right: 11px;
}

.produto-button span {
  font-weight: 650;
}

/* Estilo para inputs */
.input-produto {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Estilo para o grid de inputs */
form {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
}

textarea {
  grid-column: span 2; /* Ocupa duas colunas */
}

.button {
  grid-column: span 2; /* Botão centralizado */
  background-color: #29375b;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #1d2a45;
}
</style>
