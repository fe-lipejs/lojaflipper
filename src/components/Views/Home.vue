<template>
  <div>
    <div id="submenu">
      <div>
        <h1>HOME</h1>
      </div>
      <SearchBox />
    </div>
    <!-- <div id="novidades"></div> -->
    <div id="destaques-semana">
      <span>DESTAQUES DA SEMANA</span>
    </div>
    <br />
    <!-- <DestaqueSemana /> -->
    <ul>
      <li v-for="produto in produtos" :key="produto._id">
        <CardProdutos
          :id="produto._id"
          :titulo="produto.nomeProduto"
          :preco="produto.preco"
          :precoPromocional="produto.precoPromocional"
          :produtoEstoque="produto.produtoEstoque"
        />
      </li>
      <button @click="paginaAnterior" :disabled="paginaAtual === 1">
        Anterior
      </button>
      <span> Página {{ paginaAtual }} de {{ totalPaginas }}</span>
      <button @click="proximaPagina" :disabled="paginaAtual === totalPaginas">
        Próxim
      </button>
    </ul>
  </div>
</template>


<style scoped>
#submenu {
  background-color: #32cec9;
  background: linear-gradient(180deg, #32cec9 80%, black);
  height: 30em;
}
h1 {
  text-align: center;
  color: #fff;
}

#novidades {
  height: 400px;
  background-color: #000;
}

#destaques-semana {
  position: relative;
  background-color: orange;
  width: 100%;
  height: 7vw;
}
#destaques-semana span {
  position: absolute;
  top: 30%;
  left: 35%;
  transform: translate(-50, -50);
  color: #fff;
  font-weight: bolder;
  font-size: 3vw;
}
</style>
<script>
import axios from "axios";
import CardProdutos from "@/components/Views/Categoria/CardProdutos.vue";
import SearchBox from "@/components/Searchbox.vue";
//import DestaqueSemana from "@/components/Views/Home_components/destaqueSemana.vue";
export default {
  data() {
    return {
      pesquisa: "",
      //PAGINAÇÃO
      produtos: [],
      nProdutos: "",
      paginaAtual: 1,
      totalPaginas: 12,
      limite: 3,
      deslocamento: 0,

      serverUrl: process.env.VUE_APP_SERVER_URL,
    };
  },

  components: {
    SearchBox,
    // DestaqueSemana,
    CardProdutos,
  },
  mounted() {
    this.exibirProdutos();
  },
  methods: {
    async exibirProdutos() {
      await axios
        .get(
          `${this.serverUrl}/produtos-home/${this.limite}/${this.deslocamento}`
        )
        .then((response) => {
          this.produtos = response.data.produtos;
          this.nProdutos = response.data.numeroResultados;
          this.totalPaginas = Math.ceil(this.nProdutos / this.limite);
        })
        .catch((error) => {
          console.log( error);
        });
    },

    proximaPagina() {
      this.deslocamento += this.limite;
      this.paginaAtual++;
      this.exibirProdutos();
    },
    paginaAnterior() {
      this.deslocamento -= this.limite;
      this.paginaAtual--;
      this.exibirProdutos();
    },
  },
};
</script>