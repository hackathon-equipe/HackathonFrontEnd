<script setup>
import { ref } from 'vue';
import { userIcon, markerPinIcon,packageIcon,walletIcon } from '@/components/icons';
const props = defineProps(['usuario', 'opcao']);
const emit = defineEmits(['salvarFoto', 'selecionarComponente', 'sair']);
import { useAuthStore } from '@/stores/auth';
const useAuth = useAuthStore();
// const local = ref(props.opcao);
const previewFoto = ref(null);
const file = ref(null)
function handleFileChange(event) {
  file.value = event.target.files[0];
  if (file.value) {
    const reader = new FileReader();
    reader.onload = () => {
      previewFoto.value = reader.result;
      console.log('Arquivo selecionado:', file.value);
      console.log('Pré-visualização:', previewFoto.value);
      emit('salvarFoto', file.value);
    };
    reader.readAsDataURL(file.value);
  }
}
</script>

<template>
  <div class="span-nav">
    <div class="foto">
      <img :src="previewFoto
          ? previewFoto
          : useAuth.user.foto
            ? useAuth.user.foto.url
            : '/src/assets/images/usersemfoto.jpg'
        " alt="Foto de perfil" />
    </div>
    <label for="file-upload" class="file">Mudar foto</label>
    <input type="file" class="file-upload" id="file-upload" @change="handleFileChange" />
    <div class="links">
      <ul>
        <li :class="props.opcao == 1 ? 'active' : ''" @click="emit('selecionarComponente', 1)">
          <userIcon /> Meus dados
        </li>
        <li :class="props.opcao == 2 ? 'active' : ''" @click="emit('selecionarComponente', 2)">
          <markerPinIcon /> Meus endereços
        </li>
        <li :class="props.opcao == 3 ? 'active' : ''" @click="emit('selecionarComponente', 3)">
          <packageIcon /> Meus pedidos
        </li>
        <li :class="props.opcao== 4 ? 'active' : ''" @click="emit('selecionarComponente', 4)">
          <walletIcon /> Meus Orçamentos
        </li>
      </ul>
    </div>
    <div class="log-out-button"><button @click="emit('sair')">Sair</button></div>
  </div>
</template>

<style scoped>
.span-nav button {
  padding: 5px 20px 5px 20px;
  background-color: white;
  border: 1px solid #29375b;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.5s;
}

.span-nav button:hover {
  color: white;
  background-color: #29375b;
}

.active {
  padding-left: 5px;
  font-weight: 600;
}

.span-nav {
  width: 250px;
  min-width: 250px;
  padding: 30px;
  border: 1px solid #ececec;
  border-radius: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.span-nav .foto {
  width: 130px;
  height: 130px;
  border-radius: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #afe67e;
  margin-bottom: 30px;
}

.span-nav .foto img {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;

}

.span-nav .links {
  padding-bottom: 40px;
}

.span-nav ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
}

.span-nav ul li {
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid #ececec;
  padding: 0px 0px 15px 0px;
  cursor: pointer;
}

input[type='file'] {
  display: none;
  cursor: pointer;
}

.file {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 15px;
  margin-bottom: 30px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .span-nav {
    width: 100%;
    padding: 30px;
    border: 1px solid transparent !important;
  }
  .file-upload, .links, .file, .log-out-button{
    display: none;
  }
}
</style>
