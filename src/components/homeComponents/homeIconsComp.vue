<script setup>
    import { dollarIcon, recycleIcon, downGraphicIcon } from '@/components/icons'
</script>
<template>
    <div class="home-icons">
        <div>
            <span>
                <dollarIcon />
            </span>
            <span>valoriza seu imovel</span>
        </div>
        <div class="line-icons">
            <span>
                <recycleIcon />
            </span>
            <span>energia limpa</span>
        </div>
        <div>
            <span>
                <downGraphicIcon />
            </span>
            <span>reducao de CO₂</span>
        </div>
    </div>
</template>

<style scope>
.home-icons {
    font-weight: 500;
    margin-top: 20px;
    display: flex;
}

.home-icons div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.home-icons .line-icons {
    border-left: 1px solid #406996;
    border-right: 1px solid #406996;
}

.home-icons span {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 3px 20px;
    height: 36px;
}

@media (max-width: 768px) {
    .home-icons{
        display: none;
    }
}
</style>