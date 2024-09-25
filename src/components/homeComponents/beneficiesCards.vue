<template>
<div class="container">
    <div class="tittle">
        <h2>Por que investir em energia solar?</h2>
        <p>Entenda os beneficios da segunda forma de energia mais abundante do Brasil</p>
    </div>
    <div class="cards">
        <div class="card">
            <reciveDolarIcon/>
            <span>Economia</span>
            <p>Os painéis solares são cada dia mais eficientes e menos custosos, a longo prazo se torna uma opção econômica e vantajosa.</p>
        </div>
        <div class="card">
            <natureIcon/>
            <span>Não Emite Poluentes</span>
            <p> A energia solar é uma energia limpa. A poluição gerada pela fabricação dos equipamentos necessários para a construção dos painéis solares é controlada.</p>
        </div>
        <div class="card">
            <toolsIcon/>
            <span>Baixa Necessidade de Manutenção</span>
            <p> Os produtos utilizados na geração de energia são bastante resistentes e praticamente não necessitam de manutenção.</p>
        </div>
        <div class="card">
            <trajectoryIcon/>
            <span>Ideal Para Áreas de Difícil Acesso</span>
            <p>A energia solar é excelente em lugares afastados e de difícil acesso, pois sua instalação em pequena escala raramente precisam de manutenção.</p>
        </div>
        <div class="card">
            <upDolarIcon/>
            <span>Valoriza seu imóvel</span>
            <p> A energia solar valoriza sua propriedade, tornando-a mais atraente no mercado.</p>
        </div>
        <div class="card">
            <houseIcon/>
            <span>Ocupa Pouco Espaço</span>
            <p>A energia solar não necessita de um grande espaço para ser produzida.</p>
        </div>
    </div>
</div>
</template>

<script setup>
import { natureIcon, reciveDolarIcon, houseIcon, toolsIcon, upDolarIcon, trajectoryIcon } from '../icons';
</script>

<style scoped>
.container{
    margin: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.tittle h2{
    font-size: 24px;
}
.tittle p{
    width: 490px;
}
.cards{
    margin: 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 45px;
    width: 1000px;
    justify-content: center;
}
.card{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 230px;
    border: 1px solid #A1A1A1;
    border-radius: 25px;
    padding: 30px 30px 0px 30px;
    box-shadow: 4px 4px 2px 0px rgba(0, 0, 0, 0.25);
}
.card span{
    margin: 20px 0px;
    font-size: 12px;
    font-weight:600;
}
.card p{
    font-size: 10px;
}
</style>