<script setup>
</script>
<template>
        <div class="container-propagandas">
            <div class="propagandas">
                <ul>
                    <li>Você ganha frete grátis a partir de R$500</li>
                    <li>Você ganha frete grátis a partir de R$500</li>
                    <li> Você ganha frete grátis a partir de R$500</li>
                </ul>
            </div>
        </div>
</template>
<style scoped>

li{
    list-style: none;
    min-width: 100vw;
}
.propagandas{
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;
}
.propagandas ul{
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 40px;
 animation: 15s infinite slide linear;
}
.container-propagandas{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#29375B;
    color:white;
    height: 46px;
    width: 100vw;
}

@keyframes slide {
    from{
        transform: translateX(0)
    }
    to{
        transform: translateX(-100vw);
    }

}
</style>
