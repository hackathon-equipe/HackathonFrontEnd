import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useScreenSize = defineStore('verificador do tamanho da tela', () => {
  const isMobile = ref(window.innerWidth <= 768)

  function updateScreenSize() {
    isMobile.value = window.innerWidth <= 768
  }

  window.addEventListener('resize', function () {
    updateScreenSize()
  })

  return { isMobile }
})
