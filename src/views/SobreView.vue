<script setup>
import PadraoPropagandas from "@/components/header/propagandas/PadraoPropagandas.vue";
import PadraoCaminho from "@/components/header/caminho/PadraoCaminho.vue";
import sobrenosImgComp from "@/components/sobrenos/sobrenosImgComp.vue";
import { whiteEmailIcon, whitePhoneIcon, whiteMarkIcon, blackFacebookIcon, blackInstagramIcon, twitterIcon } from "@/components/icons";
</script>
<template> 
    <PadraoPropagandas />
    <PadraoCaminho />
    <h1 class="page-tittle">Sobre nós</h1>
    <div class="page-bunner">
        <sobrenosImgComp/>
        <div class="bunner-info">
            <h2>Quem somos?</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate inventore earum optio quam, sunt eius quod tempora! Quia nemo fugiat officiis, exercitationem aliquid laboriosam eligendi ratione possimus, consectetur architecto aperiam?</p>
            <h2>Quais nossos objetivos?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi eaque aperiam nobis dolor quisquam sunt repudiandae culpa non accusantium ullam earum maxime, recusandae eveniet. A pariatur rem quasi fugiat?</p>
        </div>
    </div>
    <div class="contact">
        <div class="contact-show-info">
            <div class="contact-tittle">
                <h2>Entre em contato</h2>
                <p>Se você tiver alguma dúvida, sugestão ou comentário, pode nos enviar uma mensagem. Sua opinião é muito importante.</p>        
            </div>
            <div>
                <ul class="contact-list">
                    <li>
                        <span class="icon-background"><whitePhoneIcon/></span>
                        <div>
                            <h3 class="list-tittle">Telefone</h3>
                            <p class="contact-info">(47) 98765-6789</p>
                        </div>
                    </li>
                    <li>
                        <span class="icon-background"><whiteEmailIcon/></span>
                        <div>
                            <h3 class="list-tittle">Email</h3>
                            <p class="contact-info">oorunplacassolare@gmail.com</p>
                        </div>
                    </li>
                    <li>
                        <span class="icon-background"><whiteMarkIcon/></span>
                        <div>
                            <h3 class="list-tittle">Localização</h3>
                            <p class="contact-info">Joinville, Santa Catarina, Brasil</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="social-media">
                <div class="social-tittle">Redes Sociais</div>
                <div class="social-icons">
                    <blackFacebookIcon/>
                    <blackInstagramIcon/>
                    <twitterIcon/>
                </div>
            </div>
        </div>
        <div class="submit-form">
            <form>
                <div class="phone-name">
                    <div class="phone-input">
                        <label for="telefone">Telefone:</label>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" maxlength="12" placeholder="Telefone">
                    </div>
                    <div class="name-input">
                        <label for="name">Nome:</label>
                        <input type="text" id="name" placeholder="Nome">
                    </div>
                </div>
                <div class="email-input">
                    <label for="email">Email:</label>
                    <input type="text" id="email" placeholder="Email">
                </div>
                <div class="feedback-input">
                    <label for="feedback">Feedback:</label>
                    <textarea cols="5" rows="5">Feedback!</textarea>
                </div>
                <div class="button-area">
                    <input type="submit" class="submit-button">
                </div>
            </form>
        </div>
    </div>

</template>
<style scoped>
.button-area{
    display: flex;
    justify-content: center;
}
form input.submit-button{
    text-indent: 0px;
    width: 200px;
    height: 50px;
    background-color: #29375B;
    color: white;
    font-weight: 600;
    text-align: center;
}
.feedback-input textarea{
    height: 150px;
    border: 1px solid #D9D9D9;
    border-radius: 50px;
    max-width: 100%;
    min-width: 100%;
    min-height: 150px;
    max-height: 200px;
    text-indent: 20px;
    padding: 20px;
    scrollbar-width: thin;          /* "auto" or "thin" */
    scrollbar-color: rgba(64, 64, 64, 0) rgb(255, 255, 255,0);
}

.submit-form form{
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 530px;
    height: 510px;
    border: 1px solid #D9D9D9;
    border-radius: 50px;
    padding: 20px 45px;
}
.submit-form input{
    height: 45px;
    border: 1px solid #D9D9D9;
    border-radius: 3rem;
    text-indent: 30px;
    padding: 0px 10px;
}
.submit-form label{
    margin-left: 20px;
}
.phone-name{
    display: flex;
    justify-content: space-between;
}
.phone-name input{
    width: 200px;
}
.phone-input, .name-input, .email-input, .feedback-input{
    display: flex;
    flex-direction: column;
}
.contact-tittle{
    display: flex;
    flex-direction: column;
    gap: 25px;
}
.contact-tittle h2{
    font-size: 24px
}
.social-media,.contact-list{
    width: 300px;
}
.contact-show-info{
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 450px;
}
.social-media{
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    border-top: 1px solid #D9D9D9;
    padding-top: 20px;
}
.social-icons{
    display: flex;
    gap: 20px;
}
.contact-list{
    display: flex;
    flex-direction: column;
    gap: 25px;
}
.contact-list li{
    display: flex;
    align-items: center;
    gap: 15px;
}
.icon-background{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    border-radius: 3rem;
    background-color: #29375B;
}
.contact-info{
    font-size: 14px;
}
.contact{
    margin: 100px 0px;
    display: flex;
    justify-content: space-around;
}
.bunner-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 450px;
    gap: 20px;
}
.page-tittle{
    font-weight: 700;
    font-size: 24px;
    display: flex;
    justify-content: center;
    padding-top: 60px;
}

.bunner-info h2{
    font-size: 24px;
    color: rgba(41, 55, 91, 0.56);
}

.page-bunner{
    padding-top: 60px;
    display: flex;
    justify-content: center;
    gap: 50px;
}

</style>