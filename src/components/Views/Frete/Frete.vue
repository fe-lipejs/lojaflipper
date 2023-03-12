<template>
  <br />
  <br />
  <br />
  <br />
  <div class="dds-cont">
    <div class="dds-cont-sub">
      <div>
        <div style="color: #605d5d; margin-bottom:15px">Contato:</div>
        <div style="font-size: 18px">emailteste@teste.com</div>
      </div>
      <div style="text-decoration: underline; font-weight: 900">alterar</div>
    </div>
    <div  style="margin-top:15px; margin-bottom:15px" class="dds-linha"></div>
    <div class="dds-cont-sub">
      <div>
        <div class="dds-cont-sub-1">Contato:</div>
        <div>emailteste@teste.com</div>
      </div>

      <div style="">alterar</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
@media (max-width: 700px) {
  .dds-cont {
    
    width: 90vw;
  }
  .dds-linha {
    width: 85vw;
  }
}
@media (min-width: 700px) {
  .dds-cont {
    width: 680px;
  }
   .dds-linha {
    width: 640px;
  }
}
.dds-cont {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #d7d7d7;
  border-radius: 10px;
  /* As duas propriedas abaixo, alinha no centro
  de acordo com este contexto acima */
  justify-content: center;
  margin: 0 auto;

}

.dds-cont-sub {
  display: flex;
  justify-content: space-between;
}
.dds-cont-sub-1{
    margin-bottom: 10px;
}
.dds-cont-sub-1 div{
    margin-bottom: 30px;
}
.dds-linha {
  
  height: 1px;
  background-color: #d7d7d7;

  /* border-bottom: 1px solid #d7d7d7; */
  margin: 0 auto;
}
</style>