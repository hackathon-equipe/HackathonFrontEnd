<script setup>
import { ref } from 'vue'
import sobrenosImgComp from '@/components/sobrenos/sobrenosImgComp.vue'
import {
  whiteEmailIcon,
  whitePhoneIcon,
  whiteMarkIcon,
  blackFacebookIcon,
  blackInstagramIcon,
  twitterIcon
} from '@/components/icons'
import axios from 'axios'

const form = ref({
  tefefone: '',
  nome: '',
  user_email: '',
  mensagem: ''
})

const sucesso = ref('')
const error = ref('')
const popup = ref(false)
const validacao = ref(false)
const enviarEmail = async () => {
  try {
    const response = await axios.post('/send-email/', form.value)
    sucesso.value = response.data.success || 'E-mail enviado com sucesso!'
    popup.value = true
    error.value = ''
    setTimeout(() => {
      popup.value = false
    }, 1300)
    form.value = { telefone: '', nome: '', user_email: '', mensagem: '' } // Limpa o formulário
  } catch (error) {
    validacao.value = true
    error.value = error.response.data || 'Erro ao comunicar servidor'
    console.log('Erro:', error.value)
    sucesso.value = ''
  }
}
</script>
<template>
  <h1 class="page-tittle">Sobre nós</h1>
  <div class="page-bunner">
    <sobrenosImgComp />
    <div class="bunner-info">
      <h2>Quem somos?</h2>
      <p>
        Nosso projeto do Hackathon é um site de vendas de equipamentos voltados a energia solar. Ele
        apresenta um sistema para o comprador e um sistema de administração para o vendedor que são
        identificados através do e-mail do usuário logado. Nossa loja também oferece uma simulação
        de um orçamento do quanto de economia a energia solar pode gerar.
      </p>
      <h2>Quais nossos objetivos?</h2>
      <p>
        A palavra "Oorun" significa "sol" ou "luz maior" na língua iorubá. Passamos muito tempo
        discutindo qual seria o nome de nossa loja e concluímos que Oorun além de ser um nome forte
        conseguiria passar todo a imagem da loja apenas com seu significado.
      </p>
    </div>
  </div>
  <div class="contact">
    <div class="contact-show-info">
      <div class="contact-tittle">
        <h2>Entre em contato</h2>
        <p>
          Se você tiver alguma dúvida, sugestão ou comentário, pode nos enviar uma mensagem. Sua
          opinião é muito importante.
        </p>
      </div>
      <div>
        <ul class="contact-list">
          <li>
            <span class="icon-background"><whitePhoneIcon /></span>
            <div>
              <h3 class="list-tittle">Telefone</h3>
              <p class="contact-info">(47) 98765-6789</p>
            </div>
          </li>
          <li>
            <span class="icon-background"><whiteEmailIcon /></span>
            <div>
              <h3 class="list-tittle">Email</h3>
              <p class="contact-info">oorunplacassolare@gmail.com</p>
            </div>
          </li>
          <li>
            <span class="icon-background"><whiteMarkIcon /></span>
            <div>
              <h3 class="list-tittle">Localização</h3>
              <p class="contact-info">Joinville, Santa Catarina, Brasil</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="social-media">
        <div class="social-tittle">Redes Sociais</div>
        <div class="social-icons">
          <blackFacebookIcon />
          <blackInstagramIcon />
          <twitterIcon />
        </div>
      </div>
    </div>
    <div class="submit-form">
      <form @submit.prevent="enviarEmail">
        <div class="phone-name">
          <div class="phone-input">
            <label for="telefone">Telefone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              maxlength="12"
              placeholder="Telefone"
              v-model="form.tefefone"
            />
          </div>
          <div class="name-input">
            <label for="name">Nome:</label>
            <input type="text" id="name" placeholder="Nome" v-model="form.nome" />
          </div>
        </div>
        <div class="email-input">
          <label for="email">Email:</label>
          <input type="text" id="email" placeholder="Email" v-model="form.user_email" required />
          <span class="validacao-span" v-if="!form.user_email.trim()">Campo Obrigatório!</span>
        </div>
        <div class="feedback-input">
          <label for="feedback">Feedback:</label>
          <textarea
            cols="5"
            rows="5"
            v-model="form.mensagem"
            placeholder="Deixe registrado seu comentário"
            required
          >
Feedback!</textarea
          >
          <span class="validacao-span" v-if="!form.mensagem.trim()">Campo Obrigatório!</span>
        </div>
        <div class="button-area">
          <!-- <button type="submit" class="submit-button"> -->
          <button type="submit">Enviar</button>
        </div>
      </form>
      <div v-if="validacao" class="error-servidor">
        <span>Erro ao enviar a mensagem. Servidor fora do ar!</span>
      </div>
    </div>
  </div>
  <transition name="fade">
    <div class="sucesso-form" v-if="popup">
      <div class="popup">
        <img src="../assets/images/LoadGif/check-mark-verified.gif" alt="" />
        <h1>Sua mensagem foi registrada com sucesso!</h1>
      </div>
    </div>
  </transition>
</template>
<style scoped>

.submit-form .error-servidor{
  width: 90%;
  margin: auto;
  padding: 20px;
}

.error-servidor span{
  font-size: 18px;
  font-weight: 500;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter, .fade-leave-to /* .fade-leave-active em versões mais antigas */ {
  opacity: 0;
}

.popup {
  width: 450px;
  background-color: #ffffff;
  padding: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  border-radius: 25px;
}

.popup img {
  width: 100px;
}

.sucesso-form {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.validacao-span {
  color: #29375b;
  padding: 5px 0 0 20px;
}

.button-area {
  display: flex;
  justify-content: center;
}
form button {
  text-indent: 0px;
  width: 200px;
  height: 50px;
  background-color: #29375b;
  color: white;
  font-weight: 600;
  text-align: center;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.5s;
}

form button:hover{
  background-color: white;
  border: 1px solid #29375b;
  color: #29375b;
}
.feedback-input textarea {
  height: 150px;
  border: 1px solid #d9d9d9;
  border-radius: 50px;
  max-width: 100%;
  min-width: 100%;
  min-height: 150px;
  max-height: 200px;
  text-indent: 20px;
  padding: 20px;
  scrollbar-width: thin; /* "auto" or "thin" */
  scrollbar-color: rgba(64, 64, 64, 0) rgb(255, 255, 255, 0);
}

.submit-form form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 530px;
  height: 550px;
  border: 1px solid #d9d9d9;
  border-radius: 50px;
  padding: 20px 45px;
}
.submit-form input {
  height: 45px;
  border: 1px solid #d9d9d9;
  border-radius: 3rem;
  text-indent: 30px;
  padding: 0px 10px;
}
.submit-form label {
  margin-left: 20px;
}
.phone-name {
  display: flex;
  justify-content: space-between;
}
.phone-name input {
  width: 200px;
}
.phone-input,
.name-input,
.email-input,
.feedback-input {
  display: flex;
  flex-direction: column;
}
.contact-tittle {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.contact-tittle h2 {
  font-size: 24px;
}
.social-media,
.contact-list {
  width: 300px;
}
.contact-show-info {
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 450px;
}
.social-media {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  border-top: 1px solid #d9d9d9;
  padding-top: 20px;
}
.social-icons {
  display: flex;
  gap: 20px;
}
.contact-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.contact-list li {
  display: flex;
  align-items: center;
  gap: 15px;
}
.icon-background {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border-radius: 3rem;
  background-color: #29375b;
}
.contact-info {
  font-size: 14px;
}
.contact {
  margin: 100px 0px;
  display: flex;
  justify-content: space-around;
}
.bunner-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 450px;
  gap: 20px;
}
.page-tittle {
  font-weight: 700;
  font-size: 24px;
  display: flex;
  justify-content: center;
  padding-top: 100px;
}

.bunner-info h2 {
  font-size: 24px;
  color: rgba(41, 55, 91, 0.56);
}

.page-bunner {
  padding-top: 60px;
  display: flex;
  justify-content: center;
  gap: 50px;
}
</style>
