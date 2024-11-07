<template>
    <div class="container">
        <div class="card">
            <router-link to="/produtos/placas-solares">
                <div class="card-image">
                    <img src="../homeComponents/img/placasolar.png" alt="">
                </div>
            </router-link>
            <span>Placas Solares</span>
        </div>
        <div class="card">
            <router-link to="/produtos/inversores">
                <div class="card-image">
                    <img src="../homeComponents/img/inversor.png" alt="">
                </div>
            </router-link>
            <span>Inversores</span>
        </div>
        <div class="card">
            <router-link to="/produtos/baterias">
                <div class="card-image">
                    <img src="../homeComponents/img/bateria.png" alt="">
                </div>
            </router-link>
            <span>Baterias</span>
        </div>
        <div class="card">
            <router-link to="/produtos/medidores">
                <div class="card-image">
                    <img src="../homeComponents/img/medidor.png" alt="">
                </div>
            </router-link>
            <span>Medidores</span>
        </div>
        <div class="card">
            <router-link to="/produtos/conectores">
                <div class="card-image">
                    <img src="../homeComponents/img/conector.png" alt="">
                </div>
            </router-link>
            <span>Conectores</span>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.container{
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
    height: 150px;
    gap: 40px;
    margin: 90px 0px;
}
.card{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
    height: auto;
}
.card-image{
    width: 90px;
    height: 90px;
    border-radius: 3rem;
}
.card span{
    display: flex;
}
</style>
