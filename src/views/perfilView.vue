<template>
    <div class="propaganda">Você ganha frete grátis a partir de R$500</div>
    <div class="rota">Home ><span class="active">Perfil</span></div>
    <div class="container">
        <div class="span-nav">
            <div class="foto">FOTO</div>
            <div class="links">
                <ul>
                    <li class="active"><userIcon/> Meus dados</li>
                    <li><markerPinIcon/> Meus enderecos</li>
                    <li><packageIcon/> Meus pedidos</li>
                    <li><walletIcon/> Meus cupons</li>
                </ul>
            </div>
        </div>
        <div class="perfil-info">
            <div><h1>Meus Dados</h1></div>
            <div class="inputs">
                <div class="input-div">
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome">
                </div>
                <div class="input-div">
                    <label for="sobrenome">Sobrenome:</label>
                    <input type="text" id="sobrenome">
                </div>
                <div class="input-div">
                    <label for="email">Email:</label>
                    <input type="text" class="email" id="email">
                </div>
                <div class="input-div">
                    <label for="telefone">Telefone:</label>
                    <input type="text" id="telefone">
                </div>
                <div class="input-div">
                    <label for="wahtsapp">Whatsapp:</label>
                    <input type="text" id="wahtsapp">
                </div>
                <div class="input-div">
                    <label for="alterarsenha">Alterar Senha:</label>
                    <input type="text" id="alterarsenha">
                </div>
                <div class="input-div">
                    <label for="confirmarsenha">Confirme Senha:</label>
                    <input type="text" id="confirmarsenha">
                </div>
            </div>
            <div class="button">
                <button>Salvar alteracoes</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { walletIcon, userIcon, packageIcon, markerPinIcon } from '@/components/icons';
</script>

<style scoped>
.propaganda{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 0px 20px 0px;
    width: 100vw;
    height: 45px;
    background-color: #29375B;
    color: white;
    font-size: 12px;
}
.rota{
    display: flex;
    align-items: center;
    width: 100vw;
    height: 60px;
    padding-left: 90px;
    background-color: #ECECEC;
}
.active{
    padding-left: 5px;
    font-weight: 600;
}
.container{
    display: flex;
    gap: 80px;
    justify-content: center;
    padding: 50px 80px 120px 80px
}
.span-nav{
    width: 250px;
    padding: 30px;
    border: 1px solid #ECECEC;
    border-radius: 25px;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.span-nav .foto{
    width: 130px;
    height: 130px;
    border-radius: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #AFE67E;
    margin-bottom: 90px;
}
.span-nav .links{
    padding-bottom: 40px;
}
.span-nav ul{
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
}
.span-nav ul li{
    display: flex;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid #ECECEC;
    padding: 0px 0px 15px 0px;
}
.perfil-info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 720px;
}
.perfil-info h1{
    font-size: 24px;
}
.perfil-info input{
    width: 350px;
    height: 40px;
    border: 1px solid #D9D9D9;
    border-radius: 50px;
    padding: 0px 45px;
    color: #545454;
}

.perfil-info input.email{
    width: 720px;
}
.inputs{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
.input-div{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.button{
    display: flex;
    justify-content: center;
}
.button button{
    width: 280px;
    height: 50px;
    background-color: #29375B;
    color: white;
    border: 1px solid transparent;
    border-radius: 50px;
}
</style>