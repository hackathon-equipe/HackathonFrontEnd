

<template>
    <div class="frame">
        <img src="./bunnerParte1.png" alt="">
        <img src="./bunnerParte2.png" alt="">
        <img src="./bunnerParte3.png" alt="">
        <img src="./bunnerParte4.png" alt="">
        <div class="square p-top"></div>
        <div class="square p-left"></div>
        <div class="square p-right"></div>
    </div>
</template>
<style scoped>

.frame{
    height: 500px;
    width: 560px;
    position: relative;
}
.frame img{
    position: absolute;
}
.frame :nth-child(1){
    top: 25px;
    left: 30px;
    
}
.frame :nth-child(2){
    top: 35px;
    left: 40px;

}
.frame :nth-child(3){
    top: 157px;
    left: 162px;
    
}
.frame :nth-child(4){
    top: 292px;
    left: 297px;
}
.square{
    border-radius: 3rem;
    position: absolute;
}
.p-top{
    background-color: #3A567D;
    width: 22px;
    height: 22px;
    left: 104px;
    animation: bolinha7 10s infinite ease;
}
.p-left{
    background-color: #5292D0;
    width: 25px;
    height: 25px;
    top: 275px;
    left: 0;
    animation: bolinha8 10s infinite ease;
}
.p-right{
    background-color: #406996;
    width: 34px;
    height: 34px;
    left: 0;
    top: 145px;
    animation: bolinha9 10s infinite ease;
}
@keyframes balancar1 {
    0%{
        top: 25px;
        left: 30px;
    }
    50%{
        top: 15px;
        left: 35px;
    }
    100%{
        top: 25px;
        left: 30px;
    }
}
@keyframes balancar2 {
    0%{
        top: 157px;
        left: 162px;
    }
    50%{
        top: 172px;
        left: 146px;
    }
    100%{
        top: 157px;
        left: 162px;
    }
}
@keyframes balancar3 {
    0%{
        top: 35px;
        left: 40px;
    }
    50%{
        top: 45px;
        left: 28px;
    }
    100%{
        top: 35px;
        left: 40px;
    }
}

/* ideia 1 */

@keyframes bolinha1{
    0%{left: 104px; top: 0px;}
    10%{left: 203px; top: 5px;}
    20%{left: 150px; top: 500px;}
    30%{left: 450px; top: 100px;}
    50%{left: 380px; top: 20px;}
    60%{left: 70px; top: 450px;}
    70%{left: 420px; top: 110px;}
    80%{left: 40px; top: 10px;}
    90%{left: 10px; top: 100px;}
    99%{left: 104px; top: 0px;}
}
@keyframes bolinha2{
    0%{right: 0px; top: 145px;}
    10%{right: 120px; top: 128px;}
    20%{right: 95px; top: 250px;}
    30%{right: 250px; top: 540px;}
    50%{right: 320px; top: 485px;}
    60%{right: 560px; top: 510px;}
    70%{right: 510px; top: 420px;}
    80%{right: 550px; top: 322px;}
    90%{right: 10px; top: 300px;}
    99%{right: 0px; top: 145px;}
} 
@keyframes bolinha3 {
    0%{left: 0px; top: 275px;}
    10%{left: 104px; top: 450px;}
    20%{left: 250px; top: 490px;}
    30%{left: 320px; top: 500px;}
    50%{left: 110px; top: 0px;}
    60%{left: 123px; top: 540px;}
    70%{left: 10px; top: 270px;}
    80%{left: 400px; top: 110px;}
    90%{left: 30px; top: 90px;}
    99%{left: 0px; top: 275px;}
}

/* ideia 2 */

@keyframes bolinha4{
    0%{
        left: 10px; top: 10px;
    }
    25%{
        left: 550px; top: 20px;
    }
    50%{
        left: 0px; top: 540px
    }
    75%{
        left: 550px; top: 530px;
    }
    99%{
        left: 10px; top: 10px
    }
}
@keyframes bolinha5{
    0%{right: 250px; top: 0px;}
    33%{
        right: 20px; top: 510px;
    }
    66%{
        right: 540px; top: 530px;
    }
    99%{
        right: 250px; top: 0px;
    }
} 
@keyframes bolinha6 {
    0%{
        right: 0px; top: 500px;
    }
    16%{
        right: 10px; top: 550px;
    }
    32%{
        right: 80px; top: 540px;
    }
    48%{
        right: 540px; top: 100px;
    }
    64%{
        right: 530px; top: 0px;
    }
    80%{
        right: 460px; top: 15px;
    }
    99%{
        right: 0px; top: 500px;
    }
}

/* ideia 3 */

@keyframes bolinha7{
    0%{left: 0px; top: 10px}
    25%{left: 10px; top: 540px;}
    50%{left: 540px; top: 530px;}
    75%{left: 530px; top: 0px;}
    100%{left: 10px; top: 10px;}
}
@keyframes bolinha8{
    0%{left: 10px; top: 540px;}
    25%{left: 540px; top: 530px}
    50%{left: 530px; top: 0px;}
    75%{left: 10px; top: 10px;}
    100%{left: 10px; top: 540px;}
} 
@keyframes bolinha9{
    0%{left: 540px; top: 530px;}
    25%{left: 530px; top: 0px;}
    50%{left: 10px; top: 0px}
    75%{left: 10px; top: 540px;}
    100%{left: 540px; top: 530px;}
}
</style>