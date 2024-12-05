<!-- <script setup>
import { ref, computed, watch } from 'vue'
import { useComentarioStore } from '@/stores/comentarios'
import { useAuthStore } from '@/stores/auth';
import { useRoute } from 'vue-router';
const route = useRoute(); // Captura a rota atual
const produtoid = parseInt(route.params.id); 
const authStore = useAuthStore()
const ComentarioStore = useComentarioStore()
const usuario = authStore.user.id

const openAdd = ref(false)
// const textExelencia = ref("")
const quantidadeEstrelas = ref("")
const comentario = ref("")
const nota = ref(0)

const avaliacao = ref( {
  'quantidadeEstrelas':'',
  'comentario': '',
  'nota': 0,
  'usuario':authStore.user.id,
  'produto': parseInt(route.params.id)
  

})

console.log(avaliacao.value)

const estrelasCinzas = computed(() => 5 - avaliacao.value.nota)

function comentar() {
  if(!useAuth.loggedIn){
    openAdd.value = true }
    else{
      router.replace("/login")
    }
}

function adicionarComentario() {
  console.log(avaliacao.value)
  ComentarioStore.postarComentario(avaliacao.value)
  openAdd.value = false
}


watch(openAdd, (newValue) => {
  if (!newValue) {
    avaliacao.value.quantidadeEstrelas = ""
    avaliacao.value.comentario = ""
    avaliacao.value.nota = 0
  }
})
</script>

<template>
  <div @click=" comentar()" class="comentario-button">
    <button>+</button>
    <span>Faça seu comentário</span>
  </div>

  <div class="container-add-comentario" v-if="openAdd">
    <div class="container">
      <div class="div-fechar">
        <button class="fechar" @click="openAdd = false">x</button>
      </div>

      <form class="form" @submit.prevent="adicionarComentario">
        <div>
          <div class="centro"><span>qual nota vc dá pra esse produto?*</span></div>
          <div class="estrelas centro">

            Estrelas Amarelas 
            <div v-for="item in avaliacao.nota" :key="item" @click="avaliacao.nota = item">
              <svg width="30" height="30" viewBox="0 0 286 272" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M143 0L176.677 103.647H285.658L197.491 167.705L231.168 271.353L143 207.295L54.8322 271.353L88.5093 167.705L0.341522 103.647H109.323L143 0Z"
                  fill="#F4AA09" />
              </svg>
            </div>

            Estrelas Cinzas 
            <div v-for="item in estrelasCinzas" :key="item" @click="avaliacao.nota = item + avaliacao.nota">
              <svg width="30" height="30" viewBox="0 0 286 272" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M143 0L176.677 103.647H285.658L197.491 167.705L231.168 271.353L143 207.295L54.8322 271.353L88.5093 167.705L0.341522 103.647H109.323L143 0Z"
                  fill="#D9D9D9" />
              </svg>
            </div>
          </div>
        </div>
        <div class="centro">
          <input class="input-comentario" placeholder="titulo" v-model="textExelencia" type="text" id="exelencia"
            required />
        </div> 

        <div class="centro">
          <textarea class="input-comentario comentario" placeholder="escreva sua opinião" style="display:block"
            v-model="avaliacao.comentario" type="text" id="comentario" required />
        </div>
        <div class="centro">
          <button class="button" type="submit">Adicionar Comentário</button>
        </div>
      </form>
    </div>
  </div>
</template> -->

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

.fechar {
  border: none;
  background-color: transparent;
}

.comentario {
  height: 20vh;
}

.input-comentario {
  padding: 10px;
  width: 100%;
  width: 350px;
  color: #797979af;
  border: 1px solid #797979af;
  padding: 8px 10px;
  margin: 5px;
  border-radius: 10px;
  font-size: 14px;
}

.input-comentario:focus {
  outline: none;
  /* Remove a borda de foco padrão */
  border: 2px solid #313131af;
  /* Altera a cor da borda para verde quando em foco */
}

.centro {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nota {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.button {
  appearance: none;
  padding: 10px 20px;
  border-radius: 3rem;
  background-color: #29375b;
  color: #f6fbff;
  border: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  text-decoration: none;
  transition: .2s linear;
  font-size: 14px;
  margin: 15px;
}

.button:hover {
  transform: translateY(-8px);
}

button {
  cursor: pointer;
}

.estrelas {
  margin: 5px 0px;
}

.container-add-comentario {
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
  margin-bottom: -80px;
}

.container {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.div-fechar {
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


<script setup>
import { ref, computed, watch } from 'vue'
import { useComentarioStore } from '@/stores/comentarios'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router';

const router = useRouter();
  const useAuth=useAuthStore()

const ComentarioStore = useComentarioStore()


const openAdd = ref(false)
const textExelencia = ref("")
const quantidadeEstrelas = ref("")
const textComentario = ref("")
const estrelasAmarelas = ref(0)


const estrelasCinzas = computed(() => 5 - estrelasAmarelas.value)

function comentar() {
  if(!useAuth.loggedIn){
    openAdd.value = true }
    else{
      router.replace("/login")
    }
}

function adicionarComentario() {
  ComentarioStore.addComentario( textExelencia.value, estrelasAmarelas.value, textComentario.value)
  openAdd.value = false
}


watch(openAdd, (newValue) => {
  if (!newValue) {
    textExelencia.value = ""
    quantidadeEstrelas.value = ""
    textComentario.value = ""
    estrelasAmarelas.value = 0
  }
})
</script>

<template>
  <div @click=" comentar()" class="comentario-button">
    <button>+</button>
    <span>Faça seu comentário</span>
  </div>

  <div class="container-add-comentario" v-if="openAdd">
    <div class="container">
      <div class="div-fechar">
        <button class="fechar" @click="openAdd = false">x</button>
      </div>

      <form class="form" @submit.prevent="adicionarComentario">
        <div>
          <div class="centro"><span>qual nota vc dá pra esse produto?*</span></div>
          <div class="estrelas centro">

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

        <div class="centro">
          <textarea class="input-comentario comentario" placeholder="escreva sua opinião" style="display:block"
            v-model="textComentario" type="text" id="comentario" required />
        </div>
        <div class="centro">
          <button class="button" type="submit">Adicionar Comentário</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

.fechar {
  border: none;
  background-color: transparent;
}

.comentario {
  height: 20vh;
}

.input-comentario {
  padding: 10px;
  width: 100%;
  width: 350px;
  color: #797979af;
  border: 1px solid #797979af;
  padding: 8px 10px;
  margin: 5px;
  border-radius: 10px;
  font-size: 14px;
}

.input-comentario:focus {
  outline: none;
  /* Remove a borda de foco padrão */
  border: 2px solid #313131af;
  /* Altera a cor da borda para verde quando em foco */
}

.centro {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nota {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.button {
  appearance: none;
  padding: 10px 20px;
  border-radius: 3rem;
  background-color: #29375b;
  color: #f6fbff;
  border: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  text-decoration: none;
  transition: .2s linear;
  font-size: 14px;
  margin: 15px;
}

.button:hover {
  transform: translateY(-8px);
}

button {
  cursor: pointer;
}

.estrelas {
  margin: 5px 0px;
}

.container-add-comentario {
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
  margin-bottom: -80px;
}

.container {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.div-fechar {
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
