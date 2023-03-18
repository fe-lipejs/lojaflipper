<template>
  <div>
    <br /><br /><br />
    <h3>Carrinho</h3>
    <div class="endereco-entrega">
      <div>ENTREGAR PARA:</div>
      <div>JOÃO GOULART</div>
    </div>
    <br />
    <ProdutoCarrinho />
    <ProdutoCarrinho />
    <ProdutoCarrinho />
    <ProdutoCarrinho />
    <ProdutoCarrinho />
    <!-- INSERIR CUPOM -->
    <div id="cupom-container">
      <div id="inserir-container">
        <div style="font-weight: 800; margin-bottom: 5px">
          CUPOM DE DESCONTO
        </div>
        <input
          placeholder="Insira o seu cupom"
          maxlength=""
          type="text"
          name=""
          id=""
        />
      </div>
      <div id="cupom-button">OK</div>
    </div>

    <!-- RESUMO DE COMPRA -->
    <div style="margin-top: 15px; margin-inline: 15px" class="resumo-container">
      <div class="nome-preco">
        <div>SUBTOTAL</div>
        <div>R$ 179,90</div>
      </div>
      <div class="nome-preco">
        <div>DESCONTOS</div>
        <div>R$ 19,90</div>
      </div>
      <div class="nome-preco">
        <div>CUPOM</div>
        <div>R$ 9,90</div>
      </div>
    </div>
    <!-- TOTAL CONTAINER -->
    <div class="total-container">
      <div class="total">
        <div class="total-cartao">
          <div>6x de R$ 29,85</div>
          <div>no cartão de crédito*</div>
        </div>
        <div class="total-preco">R$ 179,90</div>
      </div>
      <div class="btn-container">
        <div>CONTINUAR COMPRANDO</div>
        <div>
          <router-link to="/informacoes">
            <div style="text-decoration: none; color: #fff">FINALIZAR COMPRA</div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- NÃO EXIBIR O CARRINHO NESSA PÁGINA: -->
  </div>
</template>

<script>
import ProdutoCarrinho from "@/components/Views/Carrinho/ProdutoCarrinho.vue";
import Rodape from "../../Rodape.vue";
import $ from "jquery";
export default {
  name: "Carrinho",
  components: {
    ProdutoCarrinho,
    Rodape,
  },

  data() {
    return {
      showComponentRodape: true,
    };
  },
  mounted() {
    // console.log("estamos?: " + this.$route.path);

    if (this.$route.path === "/carrinho") {
      // this.$refs.rodape.style.display = "none"
      console.log("Rodapé desaparece");
      $("#rodape-container").css("display", "none");
      $("#rodape-container2").css("display", "none");
      // this.$refs.rodape.style.display = "none"
    } else {
      $("#rodape-container").css("display", "block");
      $("#rodape-container2").css("display", "block");
    }
  },
};
</script>

<style scoped>
#rodape-container {
  display: none;
}
.endereco-entrega {
  display: flex;
  padding: 7px;
  color: #fff;
  background-color: #000;
  font-size: 14px;
}
.endereco-entrega div:nth-child(1) {
  margin-left: 15px;
}
.endereco-entrega div:nth-child(2) {
  font-weight: 600;
  margin-left: 10px;
}
#cupom-container {
  margin-top: 30px;

  display: flex;
  height: 73px;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  align-items: center;
  justify-content: space-between;
  padding-inline: 20px;
  /* ------------ */
}
#inserir-container div {
  font-size: 14px;
  position: relative;
  color: black;
}
#inserir-container input {
  padding-top: 3px;
  width: 200px;
  font-size: 15px;
  border: none;
  border-bottom: 1px solid grey;
}
#inserir-container input:focus {
  outline: none;
}
#cupom-button {
  display: flex;
  font-size: 13px;
  color: #fff;
  background-color: #000;
  height: 42px;
  align-items: center;
  padding-inline: 50px;
  cursor: pointer;
}

/* RESUMO DA COMPRA */
.resumo-container {
  margin-bottom: 150px;
}
.nome-preco {
  display: flex;
  justify-content: space-between;
  margin: 10px;
}
.nome-preco div:nth-child(1) {
  color: #464545;
}
.nome-preco div:nth-child(2) {
  font-weight: 900;
}

/* TOTAL CONTAINER */
.total-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 05px;
  box-shadow: 0px -10px 10px -1px rgba(0, 0, 0, 0.15);
  margin-top: 30px;
  background-color: #fff;
}
.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 7px;
  padding-bottom: 5px;
}
.total-cartao div {
  color: #484848;
}
.total-cartao div:nth-child(2) {
  font-size: 13px;
}
.total-preco {
  font-weight: 900;
  font-size: 20px;
}
.btn-container {
  display: flex;
  justify-content: space-around;
}
.btn-container div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48vw;
  height: 14vw;
  font-size: 14px;
  cursor: pointer;
}
.btn-container div:nth-child(1) {
  border: 1px solid #000;
}
.btn-container div:nth-child(2) {
  color: #fff;
  background-color: #000;
  border: 1px solid #000;
}
</style>
