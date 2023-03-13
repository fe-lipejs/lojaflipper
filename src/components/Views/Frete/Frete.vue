<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <!-- RESUMO DO FRETE -->
    <div class="dds-cont">
      <div class="dds-cont-sub">
        <div>
          <div style="color: #605d5d; margin-bottom: 15px">Contato:</div>
          <div style="font-size: 18px">emailteste@teste.com</div>
        </div>
        <div style="text-decoration: underline; font-weight: 900">alterar</div>
      </div>
      <div
        style="margin-top: 15px; margin-bottom: 15px"
        class="dds-linha"
      ></div>
      <div class="dds-cont-sub">
        <div>
          <div style="color: #605d5d; margin-bottom: 15px">Contato:</div>
          <div style="font-size: 18px">emailteste@teste.com</div>
        </div>
        <div style="text-decoration: underline; font-weight: 900">alterar</div>
      </div>
    </div>
    <div style="margin-top: 50px" class="frete-container">
      <div class="frete-cont">
        <div style="display: flex">
          <input
            class="frete-cont-radio"
            type="radio"
            name="opcoes"
            value="opcao3"
          />
          <div class="frete-cont-opcao">
            <div>Total Express</div>
            <div>7 dias úteis</div>
          </div>
        </div>
        <div class="frete-cont-preco">R$ 11,33</div>
      </div>
      <br />
      <div class="frete-cont">
        <div style="display: flex">
          <input
            class="frete-cont-radio"
            type="radio"
            name="opcoes"
            value="opcao3"
          />
          <div class="frete-cont-opcao">
            <div>Total Express</div>
            <div>7 dias úteis</div>
          </div>
        </div>
        <div class="frete-cont-preco">R$ 11,33</div>
      </div>
      <br />
      <div class="frete-cont">
        <div style="display: flex">
          <input
            class="frete-cont-radio"
            type="radio"
            name="opcoes"
            value="opcao3"
          />
          <div class="frete-cont-opcao">
            <div>Total Express</div>
            <div>7 dias úteis</div>
          </div>
        </div>
        <div class="frete-cont-preco">R$ 11,33</div>
      </div>
      <br />
    </div>
    <ButtonPadrao href="/" texto="Confirmar Pagamento"/>
  
  </div>
</template>

<script>
import ButtonPadrao from "@/components/ButtonPadrao.vue";

export default {
  components: {
    ButtonPadrao,
  },
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
  .frete-container {
    width: 90vw;
  }
}
@media (min-width: 700px) {
  .dds-cont {
    width: 680px;
  }
  .frete-container {
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
.dds-cont-sub-1 {
  margin-bottom: 10px;
}
.dds-cont-sub-1 div {
  margin-bottom: 30px;
}
.dds-linha {
  height: 1px;
  background-color: #d7d7d7;

  /* border-bottom: 1px solid #d7d7d7; */
  margin: 0 auto;
}
/* OPÇÃO DE FRETE */
.frete-container {
  padding: 10px;
  border: 1px solid #d7d7d7;
  border-radius: 10px;
  margin: 0 auto;
}
.frete-cont {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}

.frete-cont-opcao div:nth-child(2) {
  font-size: 13px;
  color: #979494;
  margin-top: 2px;
}
.frete-cont-preco {
  font-size: 15px;
  font-weight: 500;
  margin-top: 2px;
}
.frete-cont-radio {
  margin-top: -14px;
  margin-right: 15px;
}
input[type="radio"]:checked {
  background-color: #000;
}
</style>