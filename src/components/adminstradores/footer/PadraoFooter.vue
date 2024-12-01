<script setup>
import SloganFooter from './logo/SloganFooter.vue'
</script>
<template>
  <footer>
      <SloganFooter />
    <div class="footer-direitos">&copy 2024 Oorun. Todos os direitos reservados.</div>
  </footer>
</template>
<style scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: auto;
  background-color: #29375b;
  padding: 40px 0px 40px 0px;
  color: white;
  font-size: 16px;
}

footer section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
}

.footer-info {
  flex-direction: row;
  display: flex;
}

.footer-direitos {
  width: 100%;
  font-weight: 500;
  display: flex;
  justify-content: center;
}
</style>
