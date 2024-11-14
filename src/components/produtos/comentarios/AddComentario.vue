<script setup>
import { ref, computed, watch } from 'vue'
import { useComentarioStore } from '@/stores/comentarios'

const ComentarioStore = useComentarioStore()

// Variáveis de estado para o formulário
const openAdd = ref(false)
const nome = ref("")
const textExelencia = ref("")
const quantidadeEstrelas = ref("")
const textComentario = ref("")
const estrelasAmarelas = ref(0)

// Computed para calcular as estrelas cinzas
const estrelasCinzas = computed(() => 5 - estrelasAmarelas.value)

// Função para adicionar o comentário
function adicionarComentario() {
  ComentarioStore.addComentario(nome.value, textExelencia.value, estrelasAmarelas.value, textComentario.value)
  openAdd.value = false
}

// Watch para resetar os campos quando openAdd mudar para false
watch(openAdd, (newValue) => {
  if (!newValue) {
    nome.value = ""
    textExelencia.value = ""
    quantidadeEstrelas.value = ""
    textComentario.value = ""
    estrelasAmarelas.value = 0
  }
})
</script>

<template>
  <div @click="openAdd = true" class="comentario-button">
    <button>+</button>
    <span>Faça seu comentário</span>
  </div>

  <div class="modal-overlay" v-if="openAdd">
    <div class="modal-content">
      <div class="close-modal">
        <button @click="openAdd = false">x</button>
      </div>

      <form class="form" @submit.prevent="adicionarComentario">
        <div>
          <div><span>qual nota vc dá pra esse produto?*</span></div>
          <div class="estrelas">
            <!-- Estrelas Amarelas -->
            <div v-for="item in estrelasAmarelas" :key="item" @click="estrelasAmarelas = item">
              <svg width="30" height="30" viewBox="0 0 286 272" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M143 0L176.677 103.647H285.658L197.491 167.705L231.168 271.353L143 207.295L54.8322 271.353L88.5093 167.705L0.341522 103.647H109.323L143 0Z"
                  fill="#F4AA09" />
              </svg>
            </div>

            <!-- Estrelas Cinzas -->
            <div v-for="item in estrelasCinzas" :key="item" @click="estrelasAmarelas = item + estrelasAmarelas">
              <svg width="30" height="30" viewBox="0 0 286 272" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M143 0L176.677 103.647H285.658L197.491 167.705L231.168 271.353L143 207.295L54.8322 271.353L88.5093 167.705L0.341522 103.647H109.323L143 0Z"
                  fill="#D9D9D9" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <label for="nome">Nome do usuário:</label>
          <input v-model="nome" type="text" id="nome" required />
        </div>

        <div>
          <label for="exelencia">Titulo:</label>
          <input v-model="textExelencia" type="text" id="exelencia" required />
        </div>

        <div>
          <label for="comentario">Comentário:</label>
          <textarea style="display:block" v-model="textComentario" type="text" id="comentario" required />
        </div>

        <button class="button" type="submit">Adicionar Comentário</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Estilos */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

.nota {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.button {
  appearance: none;
  padding: 20px 30px;
  border-radius: 3rem;
  background-color: #29375b;
  color: #f6fbff;
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  text-decoration: none;
  transition: .2s linear;
}

.button:hover {
  transform: translateY(-8px);
}

button {
  cursor: pointer;
}

.estrelas {
  display: flex;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  /* Fundo semitransparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.close-modal {
  color: white;
  border: none;
  border-radius: 5px;
  text-align: end;
  width: 100%;
}

.comentario-button {
  margin-left: calc(15vw - 30px);
  display: flex;
  align-items: center;
  margin-top: 20px;
  background-color: transparent;
  border: none;
}

.comentario-button button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #29375B;
  border-color: #29375B;
  color: rgb(255, 255, 255);
  margin-right: 11px;
}

.comentario-button span {
  font-weight: 650;
}
</style>
