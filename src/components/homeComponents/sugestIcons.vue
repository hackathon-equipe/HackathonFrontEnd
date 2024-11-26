<template>
    <div class="limitador">
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
    </div>
</template>

<script setup>
</script>

<style scoped>
.limitador{
    margin: 90px 0px;
}
.container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 150px;
    gap: 40px;
    margin: 10px 0px;
    scrollbar-width: thin;
}
.card{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
    height: auto;
    transition: 0.5s;
    justify-content: center;
    align-items: center;
}
.card-image{
    display: flex;
    justify-content: center;
    align-items: center;
}
::-webkit-scrollbar {
    width: 6px !important
}

::-webkit-scrollbar {
    width: 6px !important
}

::-webkit-scrollbar-track {
    background: #f3f3f3;
}

::-webkit-scrollbar-thumb {
    background: #2c3e50;
    border-radius: 3rem;
}
.card:hover{
    transform: translateY(-10px);
}

@media (max-width: 768px) {
    .container {
        position: flex;
        justify-content: left;
        align-items: start;
        gap: 35px;
        left: 0px;
    }

    .limitador {
        display: flex;
        overflow: hidden;
        overflow-x: scroll;
        margin: 0px 30px 60px;
        height: 140px;
    }

    .card {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        width: 80px;
        height: auto;
    }

    .card-image {
        width: 60px;
        height: 60px;
        border-radius: 3rem;
    }

    .card span {
        display: flex;
        text-align: center;
    }
}
</style>
