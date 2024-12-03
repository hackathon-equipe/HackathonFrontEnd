<script setup>
import LinksFooterMobile from '../Navegação/LinksFooterMobile.vue'
import SloganFooterMobile from '../logo/SloganFooterMobile.vue'
</script>
<template>
    <footer>
        <section>
            <SloganFooterMobile />
            <div class="footer-info">
                <LinksFooterMobile />
            </div>
        </section>
        <hr />
        <div class="footer-direitos">&copy 2024 Oorun. Todos os direitos reservados.</div>
    </footer>
</template>
<style scoped>
footer {
    width: 100vw;
    height: auto;
    background-color: #29375b;
    color: white;
    font-size: 16px;
}

footer section {
    height: auto;
    padding: 50px 50px 0px;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    gap: 30px;
}

.footer-info {
    flex-direction: column;
    display: flex;
    align-items: center;
}

hr {
    margin: 0px 30px;
    color: #ebebeb75;
}

.footer-direitos {
    width: 100%;
    font-weight: 600;
    display: flex;
    justify-content: center;
    padding: 20px 0px;
    font-size: 14px;
}
</style>
