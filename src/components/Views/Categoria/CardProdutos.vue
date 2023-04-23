<template>
  <a :href="`/produto/${id}`">
    <div id="produto-container">
      <div id="produto-img">
        <img :src="imgCapa" alt="" />
      </div>
      <div id="produto-nome">{{ titulo }}</div>
      <div id="preco-container">
        <div id="preco-old">R$ {{ preco }}</div>
        <div id="preco-new">R$ {{ precoPromocional }}</div>
      </div>
      <div id="preco-parcelas">6X de R$23,32*</div>
      
    </div>

  </a>
  <!-- <div id="produtos-divisao"></div> -->
</template>
<script>
import axios from "axios";
export default {
  props: {
    id: String,
    titulo: String,
    preco: Number,
    precoPromocional: Number,
    produtoEstoque: Object,
  },
  data() {
    return {
      imgCapa: "",
      serverUrl: process.env.VUE_APP_SERVER_URL,
      imageUrl: "",
    };
  },
  mounted() {
    //capta primeira key do array
    const objProdutoEstoque = Object.keys(this.produtoEstoque).map((key) => {
      return key;
    });

    const imgCapaServidor = this.produtoEstoque[objProdutoEstoque[0]].imagens.imgCapa;
    this.getImageUrl(imgCapaServidor);
  },
  methods: {
    getImageUrl(imgCapaServidor) {
      const urlCompleta = `${this.serverUrl}/produtos-imagemcapa/${encodeURIComponent(imgCapaServidor)}`;
      axios({
        url: urlCompleta,
        method: "GET",
        responseType: "blob",
      })
        .then((response) => {
          var fileUrl = window.URL.createObjectURL(new Blob([response.data]));
          this.imgCapa = fileUrl
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: #000;
}
#produto-container {
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#produto-img {
  background-color: #e5e5e5;
  height: 300px;
  width: 250px;
}
#produto-img img {
  height: 300px;
  width: 250px;
}
#preco-container {
  display: flex;
  margin: 10px;
  align-items: center;
}
#produto-nome {
  margin-top: 20px;
  /* font-weight: 900; */
  font-size: 20px;
  align-items: center;
}

#preco-old {
  text-decoration-line: line-through;
  color: grey;
  text-decoration-color: grey;
}
#preco-new {
  margin-left: 5px;
  font-weight: 900;
  font-size: 18px;
  color: black;
}
#preco-parcelas {
  color: grey;
}

#produtos-divisao {
  margin-top: 60px;
  height: 7px;
  background-color: #f1f1f1;
}
</style>