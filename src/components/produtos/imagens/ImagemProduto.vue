<script setup>
import { ref } from 'vue';

defineProps({
  imagem: Array
});

// Referência para o elemento
const imgRef = ref(null);

// Estado para rastrear o hover
const isHovering = ref(false);

const handleMouseMove = (event) => {
  const img = imgRef.value;

  // Calcula as posições relativas do mouse
  const rect = img.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;

  // Atualiza as variáveis CSS
  img.style.setProperty('--x', `${x}%`);
  img.style.setProperty('--y', `${y}%`);
};

const handleMouseEnter = () => {
  isHovering.value = true;
};

const handleMouseLeave = () => {
  isHovering.value = false;
};
</script>

<template>
  <div 
    class="img" 
    @mousemove="handleMouseMove" 
    @mouseenter="handleMouseEnter" 
    @mouseleave="handleMouseLeave"
  >
    <img 
      ref="imgRef" 
      class="zoom" 
      :class="{ 'zoom-active': isHovering }" 
      :src="imagem.file" 
      alt="Imagem" 
    />
  </div>
</template>

<style scoped>
.img {
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  padding: 40px;
  width: 35vw;
  height: 50vh;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.img img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease, transform-origin 0.3s ease; /* Suaviza todas as transições */
}

.img img.zoom-active {
  transform: scale(1.8);
  transform-origin: var(--x) var(--y);
}
</style>
