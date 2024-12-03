import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useVerificadorTelaStore = defineStore('verificadorTela', () => {
    const isMobile = computed(() => {
        console.log(screen.width)
        return screen.width <= 768
      })
    return {isMobile}
})