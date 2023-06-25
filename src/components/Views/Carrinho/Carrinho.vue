<template>
  <div style="width: 90vw">
    <h3>Carrinho</h3>
    <br /><br />
    <div class="endereco-entrega">
      <div>ENTREGAR PARA:</div>
      <div>JOÃO GOULART</div>
    </div>

    <br />
    <div v-if="!carrinhoDados">
      <h2>Carrinho vazio :(</h2>
    </div>
    <div v-else>
      <div v-for="(item, index) in carrinhoDados" :key="index">
        <ProdutoCarrinho
          :_id="item._id"
          :id="item.id"
          :nome="item.nome"
          :preco="item.preco"
          :cor="item.cor"
          :tamanho="item.tamanho"
          :imagem="item.imagem"
          :quantidadeProduto="item.quantidade"
          :estoqueProduto="item.estoqueProduto"
          @novoCarrinho="receberNovoCarrinho"
        />
      </div>
    </div>

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
        <div>R$ {{ priceTotal }}</div>
      </div>
      <div class="nome-preco">
        <div>DESCONTOS</div>
        <div>R$ {{ descontoPrice }}</div>
      </div>
      <div class="nome-preco">
        <div>CUPOM</div>
        <div>R$ {{ cupomPrice }}</div>
      </div>
    </div>
    <!-- TOTAL CONTAINER -->
    <div class="container-compras">
      <div class="total-container">
        <div class="total">
          <div class="total-cartao">
            <div style="margin-left: -38px">6x de R$ {{ (priceTotal / 6) }}</div>
            <div>no cartão de crédito*</div>
          </div>
          <div style="margin-top: -8px" class="total-preco">
            <div
              style="
                color: grey;
                margin-left: -28px;
                font-weight: 400;
                font-size: 14px;
              "
            >
              Total:
            </div>
            R$ {{ priceTotal }}
          </div>
        </div>
        <div class="container-finalizarCompra">
          <router-link
            style="text-decoration: none; color: inherit"
            to="/informacoes"
          >
            <a
              href="#"
              style="color: inherit; text-decoration: none"
              @click="fecharCarrinho(0)"
              ><div style="color: #fff; background-color: #000">
                FINALIZAR COMPRA
              </div></a
            >
          </router-link>
          <a
            href="#"
            style="color: inherit; text-decoration: none"
            @click="fecharCarrinho(0)"
            ><div style="margin-top: 7px">CONTINUAR COMPRANDO</div></a
          >
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
import axios from "axios";

export default {
  name: "Carrinho",
  props: {
    carrinhoDados: Object,
    priceTotal: Number,
  },
  components: {
    ProdutoCarrinho,
    Rodape,
  },

  data() {
    return {
      showComponentRodape: true,
      serverUrl: process.env.VUE_APP_SERVER_URL,
      carrinho: {},
      precoTotal: this.cupomPrice,
      cupomPrice: 0,
      subTotalPrice: 0,
      descontoPrice: 0,
      
    };
  },

  methods: {
    calcularPrecoTotal() {
      this.precoTotal = "";
      console.log(this.carrinhoDados.length);
      for (let index = 0; index < this.carrinhoDados.length; index++) {
        this.precoTotal =
          this.precoTotal + parseFloat(this.carrinhoDados[index].preco);
      }
      return this.precoTotal;
    },
    receberNovoCarrinho(dados) {
      this.$emit("novoCarrinho", dados);
    },
    fecharCarrinho(fechar) {
      this.$emit("fecharCarrinho", fechar);
    },
  },
  mounted() {
    
    this.precoTotal = this.subTotalPrice - this.descontoPrice - this.cupomPrice;
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
  padding-inline: 3px;
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
.container-compras {
  position: sticky;
  bottom: 0;
  background-color: #fff;
}

.container-finalizarCompra {
  /* display: flex; */
  justify-content: space-around;
  text-align: center;
  font-size: 14.4px;
  margin-top: 17px;
  margin-bottom: 10px;
}

.container-finalizarCompra div {
  border: 1px grey solid;
  padding: 4px;
  cursor: pointer;
  padding-inline: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
