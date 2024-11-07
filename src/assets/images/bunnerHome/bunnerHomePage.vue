

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
    animation: bolinha7 1s infinite linear;
}
.p-left{
    background-color: #5292D0;
    width: 25px;
    height: 25px;
    top: 275px;
    left: 0;
    animation: bolinha8 1s infinite linear;
}
.p-right{
    background-color: #406996;
    width: 34px;
    height: 34px;
    right: 0;
    top: 145px;
    animation: bolinha9 1s infinite linear;
}

/* ideia 3 */

@keyframes bolinha7{
    0%{left: 104px; top: 0px}
    25%{left: 100px; top: 4px;}
    50%{left: 105px; top: 0px;}
    75%{left: 100px; top: 7px;}
    100%{left: 104px; top: 0px;}
}
@keyframes bolinha8{
    0%{left: 0px; top: 275px;}
    25%{left: 4px; top: 279px}
    50%{left: 0px; top: 271px;}
    75%{left: 7px; top: 279px;}
    100%{left: 0px; top: 275px;}
} 
@keyframes bolinha9{
    0%{right: 0px; top: 145px;}
    25%{right: 4px; top: 149px;}
    50%{right: 1px; top: 145px}
    75%{right: 7px; top: 141px;}
    100%{right: 0px; top: 145px;}
}
</style>