

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
}
.p-left{
    background-color: #5292D0;
    width: 25px;
    height: 25px;
    top: 275px;
}
.p-right{
    background-color: #406996;
    width: 34px;
    height: 34px;
    right: 0;
    top: 145px;
}
</style>