<template>
    <div class="paginacao-container">
        <div class="box">&lt;</div>
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box box-selected">3</div>
        <div class="box">...</div>
        <div class="box">7</div>
        <div class="box box-last">></div>
    </div>
</template>

<style scoped>
    .paginacao-container{
        margin-top: 30px;
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
    }
    .box{

        margin-right: 10px;
        height: 30px;
        width: 30px;
        border: 1px solid #989898;
        color: #989898;
        display: flex;
        align-items: center; /* Alinhar Vertical */
        justify-content: center; /* Alinhar Horizontal */
    }
    .box-last{
          margin-right: 0px;
    }
    .box-selected{
        border: 1px solid #000;
        color: #fff;
        background-color: #000;
    }
</style>