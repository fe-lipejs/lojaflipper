<template>
  <div>
    <div ref="container" class="container">
      <div style="display: flex">
        <div class="produtoImagem">
          <img height="100" width="94" :src="getImageUrl(imagem)" alt="" />
        </div>
        {{ estoqueProduto }}
        <div class="produtoInformacoes">
          <div>{{ nome }}</div>
          <div>{{ cor }}/{{ tamanho }}</div>
          <div>R$ {{ preco }}</div>
        </div>
      </div>

      <div class="alterarContainer">
        <div class="quantidadeContainer">
          <div v-on:click="quantidadeFuncao(-1)">-</div>
          <div>{{ quantidade }}</div>
          <div v-on:click="quantidadeFuncao(+1)">+</div>
        </div>
        <div
          @click="deletarItem(_id)"
          style="cursor: pointer; text-decoration: underline; color: grey"
        >
          remover
        </div>
        <button></button>
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

.produtoInformacoes,
.alterarContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.alterarContainer {
  height: 90px;
  align-items: center;
}
.produtoInformacoes {
  margin-left: 10px;
}
.produtoInformacoes div:nth-child(1) {
  font-weight: 600;
  font-size: 18px;
}
.produtoInformacoes div:nth-child(2) {
  color: grey;
}
.produtoInformacoes div:nth-child(3) {
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
import axios from "axios";

export default {
  data() {
    return {
      serverUrl: process.env.VUE_APP_SERVER_URL,

      quantidade: this.quantidadeProduto,
      estoque: this.estoqueProduto,
      imagemCapa: "",
    };
  },
  props: {
    _id: String,
    id: String,
    nome: String,
    preco: Number,
    cor: String,
    tamanho: String,
    imagem: String,
    quantidadeProduto: Number,
    estoqueProduto: Number,
  },
  mounted() {
    this.getImageUrl(this.imagem);
  },/* 
  computed: {
    imageUrl() {
      return this.getImageUrl(this.imagem);
    },
  }, */
  methods: {
    getImageUrl(img) {
      const urlCompleta = `${
        this.serverUrl
      }/produtos-imagemcapa/${encodeURIComponent(img)}`;
      axios({
        url: urlCompleta,
        method: "GET",
        responseType: "blob",
      })
        .then((response) => {
          var fileUrl = window.URL.createObjectURL(new Blob([response.data]));
          this.imagemCapa = fileUrl;
        })
        .catch((error) => {
          console.log(error);
        });
      return this.imagemCapa;
    },
    quantidadeFuncao(e) {
      this.quantidade = this.quantidade + e;
      if (this.quantidade < 1) {
        this.quantidade = 1;
      } else if (this.quantidade > this.estoque) {
        this.quantidade = this.estoque;
      }
    },
    deletarItem(_id) {
      axios
        .delete(`${this.serverUrl}/carrinho-delete/${_id}`)
        .then((response) => {
          //enviar a resposa como o novo carrinho para o elemento pai que vai para o elemento avó NavBar
          this.$emit("novoCarrinho", response);
          this.getImageUrl(this.imagem);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>