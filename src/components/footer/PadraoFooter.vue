<script setup>
import LinksFooter from './Navegação/LinksFooter.vue'
import SloganFooter from './logo/SloganFooter.vue'
</script>
<template>
  <footer>
    <section>
      <SloganFooter />
      <div class="footer-info">
        <LinksFooter />
      </div>
    </section>
    <hr />
    <div class="footer-direitos">&copy 2024 Oorun. Todos os direitos reservados.</div>
  </footer>
</template>
<style scoped>
footer {
  width: 100vw;
  height: 400px;
  background-color: #29375b;
  padding: 70px 100px 32px 100px;
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

hr {
  width: 80%;
  margin: auto;
  color: #ebebeb75;
}

.footer-direitos {
  width: 100%;
  margin: 20px 0;
  font-weight: 500;
  display: flex;
  justify-content: center;
}
</style>
