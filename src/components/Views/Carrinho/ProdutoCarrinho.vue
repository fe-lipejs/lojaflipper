<template>
  <div>
    <div class="container">
      <div style="display:flex" >
        <div class="produtoImagem"></div>
        <div class="produtoInformacoes">
          <div>Camisa Slim</div>
          <div>Azul Marinho/36</div>
          <div>R$179,90</div>
        </div>
      </div>

      <div class="alterarContainer">
        <div class="quantidadeContainer">
          <div v-on:click="quantidadeFuncao(-1)">-</div>
          <div>{{ quantidade }}</div>
          <div v-on:click="quantidadeFuncao(+1)">+</div>
        </div>
        <div style="cursor:pointer;text-decoration: underline; color: grey">remover</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 7px;
  align-items: center;
  background-color: #fbfbfbed;
}

.produtoInformacoes, .alterarContainer{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.alterarContainer{
  height: 90px;
  align-items: center;
}
.produtoInformacoes {
  margin-left: 10px;
}
.produtoInformacoes div:nth-child(1){
  font-weight: 600;
  font-size: 18px;
}
.produtoInformacoes div:nth-child(2){
  color: grey;
}
.produtoInformacoes div:nth-child(3){
    font-weight: 900;
}


.produtoImagem {
  height: 100px;
  width: 94px;
  background-color: #e7e7e7;
}
.quantidadeContainer {
  display: flex;
  justify-content: space-around;
  width: 70px;
  padding: 2px;
  border: 1px solid grey;
}
</style>

<script>
export default {
  data() {
    return {
      quantidade: 1,
      estoque: 7,
    };
  },
  methods: {
    quantidadeFuncao(e) {
      this.quantidade = this.quantidade + e;
      if (this.quantidade < 1) {
        this.quantidade = 1;
      } else if (this.quantidade > this.estoque) {
        this.quantidade = this.estoque;
      }
    },
  },
};
</script>