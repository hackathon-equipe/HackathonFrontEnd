<script setup>
const props = defineProps(['usuario', 'opcao'])
import { useAuthStore } from '@/stores/auth'
const useAuth = useAuthStore()
const local = props.opcao
</script>
<template>
  <div class="span-nav">
    <div class="foto">
      <img
        :src="
          useAuth.user.foto
            ? useAuth.user.foto.u
            : usuario?.foto && usuario.foto.trim()
              ? usuario.foto
              : '/src/assets/images/usersemfoto.jpg'
        "
        alt="Foto de perfil"
      />
    </div>
    <label for="file-upload" class="file"> Mudar foto </label>
    <input type="file" id="file-upload" @change="$emit('CarregarImagem', $event)" />
    <div class="links">
      <ul>
        <li :class="local === 1 ? 'active' : ''" @click="$emit('selecionarComponente', 1)"><userIcon /> Meus dados</li>
        <li :class="local === 2 ? 'active' : ''" @click="$emit('selecionarComponente', 2)"><markerPinIcon /> Meus enderecos</li>
        <li :class="local === 3 ? 'active' : ''" @click="$emit('selecionarComponente', 3)"><packageIcon /> Meus pedidos</li>
        <li :class="local === 4 ? 'active' : ''" @click="$emit('selecionarComponente', 4)"><walletIcon /> Meus cupons</li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.active {
  padding-left: 5px;
  font-weight: 600;
}

.span-nav {
  width: 250px;
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
</style>
