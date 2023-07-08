<template>
  <div>
    <br />
    <!-- PRODUTO ESPECIFICAÇÕES-->
    <div id="prod-espe">
      <div id="prod-name">
        {{ this.produto.nomeProduto }}
      </div>

      <!-- CLASSIFICAÇÃO CLIENTES -->
      <div id="rate">
        <div id="rate-note">7,5</div>
        <div id="rate-star">
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
    <!-- PRODUTO IMAGEM -->
    <div class="slider-content">
      <div class="slider-container">
        <transition name="slide">
          <img class="imagemProduto" ref="mudarImagem" :src="imageSrc" alt="" />
          <!-- class="slide-enter slide-leave-to" -->
        </transition>
      </div>
      <br />
      <div>
        <button @click="mudarImagem(-1)">Anterior</button>
        <button @click="mudarImagem(+1)">Próximo</button>
      </div>
      <div>
        <div class="prod-pagi">
          <div v-for="(index, value) in imagesUrl.length" :key="value">
            <div
              class="prod-pagi-dots"
              :class="{ 'selected-dot ': value === currentImage }"
            ></div>
          </div>
        </div>
      </div>

      <!-- VISUALIÇÃO DO PRODUTO -->
      <!-- <div id="prod-container">
      <div class="prod-img prod-img-color-0"> -->
      <!--   <div class="prod-arrow-container prod-arrow-container-left">
          <div id="prod-arrow">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13L7 7L1 1"
                stroke="#868686"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div class="prod-arrow-container">
          <div id="prod-arrow">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13L7 7L1 1"
                stroke="#868686"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div> -->
      <!-- </div>
      <div class="prod-img prod-img-color-1"></div>
      <div class="prod-img prod-img-color-2"></div> -->
    </div>

    {{ id_produto }}
    <!-- PREÇO -->
    <div id="preco-container">
      <div id="preco-container-valor">
        R$ {{ this.produto.precoPromocional }},00
      </div>
      <div id="preco-container-parcelas">
        ou 7x de R$ {{ this.produto.preco / 7 }} no cartão de crédito*
      </div>
    </div>

    <!-- COR -->

    <div id="cor-container">
      <div id="cor-container-texto">
        <div>Cor:</div>
        <div>{{ corSelecionada }}</div>
      </div>
      <div id="cor-container-cores">
        <div v-for="(value, index) in cores" :key="value">
          <!-- se o index for igual a selectedItemCor a classe do elemento receberá 'cor-selected' -->
          <div
            :class="{ 'cor-selected ': index === selectedItemCor }"
            :style="`background-color: ${produtoEstoque[value].hex}`"
            @click="captarNomeCor(value, index)"
          ></div>
        </div>
      </div>
      <br />
      <span style="color: red">{{
        corSelecionada ? "" : "Selecione uma cor"
      }}</span>
    </div>
    <br /><br />
    <!-- TAMANHO -->
    <div id="tamanho-container">
      <div id="tamanho-container-texto">
        Tamanho: <span style="font-weight: 600">{{ tamanhoSelecionado }}</span>
      </div>
      <br />
      <div id="tamanho-container-tamanhos">
        <ul v-for="(value, index) in tamanhosProduto" :key="value">
          <div
            @click="selecionarTamanhos(index, value.tamanho, value.quantidade)"
            :class="{ 'tamanho-selected ': index === selectedItemTamanho }"
          >
            {{ value.tamanho }}
          </div>
        </ul>
      </div>
      
      <span style="color: red">{{ estoqueProdutoInformacao }}</span>
    </div>

    <!-- FRETE -->
    <div id="frete-container">
      <div id="inserir-container" >
        <div>INSERIR CEP</div>
        <input v-model="cep" maxlength="8" type="number" name="" id="" />
      </div>
      <div  @click="informarCep(cep)" id="frete-button" ref="content">CALCULAR FRETE</div><br>
    </div>
    <div style="color:red;padding-bottom: 2px; margin-top: -10px; margin-left: 3px;border-bottom: 1px solid #e3e3e3; ">{{cepInformacao}}</div>
    
    <!-- DESCRIÇÃO -->
    <div id="desc-container">
      <div>DESCRIÇÃO DO PRODUTO</div>
      <div>
        {{ this.produto.descricao }}
      </div>
    </div>

    <!-- BOTÃO COMPRAR -->
    <a
      style="color: inherit; text-decoration: none"
      @click="adicionarNoCarrinho"
    >
      <div
        id="button-comprar"
        class="buttonMovendo"
        :class="{ buttonParado: buttonParado }"
      >
        <div>COMPRAR</div>
      </div>
    </a>
  </div>
</template>
<script>
import axios from "axios";
import $ from "jquery";
import Cookies from "js-cookie";
import eventBus from "./../../event-bus";

export default {
  props: ["id_produto"],
  components: {},
  data() {
    return {
      serverUrl: process.env.VUE_APP_SERVER_URL,
      buttonParado: false,
      produto: {},
      produtoEstoque: {},
      cores: {},
      corIndex: 0,
      selectedItemCor: 0,
      corSelecionada: "",
      tamanhoSelecionado: "",
      tamanhosProduto: "",
      estoqueProduto: "",
      estoqueProdutoInformacao: "",
      selectedItemTamanho: 0,

      //---------------------
      imagess: [],
      imageDots: "",
      imagesUrl: [],
      images: [
        "BLUE/b1.webp",
        "BLUE/b2.webp",
        "BLUE/b3.webp",
        "BLUE/b4.webp",
        "BLUE/b5.webp",
      ],
      currentImage: 0,
      //---------------------
      cep:'',
      cepInformacao:''
    };
  },
  mounted() {
    //------------------------------------------------
    const id_produto = this.$route.params.id_produto;
    axios
      .get(`${this.serverUrl}/produtos/${id_produto}`)
      .then((response) => {
        this.produto = response.data;
        this.produtoEstoque = this.produto.produtoEstoque;

        const objCores = Object.keys(this.produtoEstoque).map((key) => {
          return key;
        });
        this.cores = objCores;
        this.corSelecionada = this.cores[0];
        this.exibirImagemProduto(this.corSelecionada);
      })
      .catch((error) => {
        console.log("O ERRO FOI ESTE: " + error);
      });
    this.imageDot = this.imagesUrl.length;
  },
  computed: {
    imageSrc() {
      return this.imagesUrl[this.currentImage];
    },
  },
  methods: {
    informarCep(numero) {
      if (Number.isInteger(numero) && !/[.,]/.test(numero)) {
         var numeroString = numero.toString(); // Converte o número para uma string
        var quantidadeDigitos = numeroString.length;

        if (quantidadeDigitos == 8) {
          axios
            .get(`https://viacep.com.br/ws/${numero}/json/`)
            .then((response) => {
              const data = response.data;
              if(data.erro == true){
                this.cepInformacao = ('CEP inválido');
              }else{
                alert("CEP salvo: \n"+data.logradouro+", "+data.bairro)
                console.log(data);
              }
            })
            .catch((error) => {
              console.log(error);
            });

        } else {
          this.cepInformacao = ("Informe os 8 números do CEP");
        }
      } else {
        this.cepInformacao = ("Digite apenas números");
      }
    },
    adicionarNoCarrinho() {
      //
      console.log(this.corSelecionada);
      console.log(this.tamanhoSelecionado);
      if (!this.corSelecionada && !this.tamanhoSelecionado) {
        console.log("Preencha os campos tamanho ou cor");
      } else {
        const dados = {
          id: this.$route.params.id_produto,
          nome: this.produto.nomeProduto,
          imagem: this.imagess[0],
          precoPromocional: this.produto.precoPromocional,
          preco: this.produto.preco,
          cor: this.corSelecionada,
          tamanho: this.tamanhoSelecionado,
          quantidade: 1,
          estoqueProduto: this.estoqueProduto,
        };
        // console.log("Adicionado no Carrinho");
        axios
          //.post(`${this.serverUrl}/carrinho/adicionar`, [dados], {})
          .post(`${this.serverUrl}/carrinho/adicionar`, [dados], {
            withCredentials: true,
          })
          .then((res) => {
            eventBus.$emit("novoCarrinhoAposComprar", res.data);
          })
          .catch((error) => {
            console.log("O ERRO FOI ESTE: " + error);
          });
      }
    },
    //-------Controle de exibição de imagens do produto------
    exibirImagemProduto(nomeCor) {
      this.tamanhosProduto = this.produtoEstoque[nomeCor].estoque;
      const imagensProduto = this.produtoEstoque[nomeCor].imagens;

      this.imagess.length = 0;
      this.imagess[0] = imagensProduto.imgCapa;
      this.imagess[1] = imagensProduto.img1;
      this.imagess[2] = imagensProduto.img2;
      this.imagess[3] = imagensProduto.img3;
      this.imagess[4] = imagensProduto.img4;

      this.currentImage = 0; // atualiza a nova posicao para imageDots

      for (let i = 0; i < this.imagess.length; i++) {
        if (this.imagess[i] === undefined || this.imagess[i] === null) {
          this.imagess.splice(i, 1); // remove elementos undefined ou nulos
          i--; // decrementa o índice para continuar no próximo elemento
        }
      }

      for (let index = 0; index < this.imagess.length; index++) {
        this.imagesUrl.length = 0;

        this.getImageUrl(this.imagess[index], index);
      }
    },
    //-------------------------------------------------------

    //---------------CONVENTER IMAGEM PRA URL----------------
    getImageUrl(img, index) {
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
          this.imagesUrl[index] = fileUrl;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //-------------------------------------------------------
    //------alterar imagem do produto ao clicar no botão-----
    mudarImagem(direcao) {
      //----------------ÍNICIO ANIMAÇÃO-----------------------
      if (direcao < 0) {
        this.$refs.mudarImagem.classList.add("slide-esquerda");
        setTimeout(() => {
          this.$nextTick(() => {
            const divElement = this.$refs.mudarImagem;
            // faça algo com divElement
            this.$refs.mudarImagem.classList.remove("slide-esquerda");
            divElement.classList.add("slide-opacidade");
          });
        }, 380);
      } else {
        this.$refs.mudarImagem.classList.add("slide-direita");
        setTimeout(() => {
          this.$nextTick(() => {
            const divElement = this.$refs.mudarImagem;
            // faça algo com divElement
            this.$refs.mudarImagem.classList.remove("slide-direita");
            divElement.classList.add("slide-opacidade");
          });
        }, 380);
      }
      setTimeout(() => {
        this.$nextTick(() => {
          const divElement2 = this.$refs.mudarImagem;
          divElement2.classList.remove("slide-opacidade");
        });
      }, 30);
      //----------------FIM ANIMAÇÃO----------------------------

      setTimeout(() => {
        this.currentImage += direcao;

        if (this.currentImage < 0) {
          this.currentImage = this.imagesUrl.length - 1;
        } else if (this.currentImage >= this.imagesUrl.length) {
          this.currentImage = 0;
        }
        $(`#imageDot${this.currentImage}`).addClass("selected-dot");
      }, 310);
    },
    //-------------------------------------------------------
    selecionarTamanhos(index, nome, estoque) {
      this.selectedItemTamanho = index; //apenas para mudar a cor do elemento quando for selecionado
      this.tamanhoSelecionado = nome;
      this.estoqueProduto = parseInt(estoque);

      if (this.estoqueProduto <= 0) {
        this.estoqueProdutoInformacao = "Produto Indisponível";
      } else {
        this.estoqueProdutoInformacao = "";
      }

      console.log(this.estoqueProduto);
    },
    //ao clicar na cor aciona essa funcao:
    captarNomeCor(value, index) {
      if (index == this.selectedItemCor) {
        this.selectedItemCor = null;
        this.corSelecionada = null;
      } else {
        this.selectedItemCor = index;
        this.corSelecionada = value;
        this.exibirImagemProduto(this.corSelecionada);
      }
    },
  },
};
</script>

<style scoped>
.imagemProduto {
  height: 55vh;
  width: 100vw;
}
.slider-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.slider-container {
  background-color: #ebebeb;
}
.displayNone {
  display: none;
}

.slide-esquerda {
  transform: translateX(-10%);
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

.slide-direita {
  transform: translateX(10%);
  opacity: 0;
  transition: all 0.3s ease-in-out;
}
.slide-opacidade {
  transform: translateX(00%);
  opacity: 1;
  /* transition: all 0.2s ease-in-out; */
}

.transition-image {
}

#prod-espe {
  margin: 10px;
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}
#prod-name {
  font-weight: 700;
  font-size: 20px;
  width: 70%;
}
#rate div {
  margin: 5px;
}
#rate-note {
  font-weight: 600;
  color: rgb(161, 158, 158);
}

.prod-img {
  margin-top: 30px;
  height: 600px;
  width: 600px;
}
.prod-img-color-0 {
  background-color: #f1f1f1;
}
.prod-img-color-1 {
  background-color: red;
}
.prod-img-color-2 {
  background-color: blue;
}
#prod-container {
  position: relative;
  display: flex;
  justify-content: center;
}
.prod-pagi {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
.prod-pagi-dots {
  border-radius: 100%;
  height: 8px;
  width: 8px;
  margin: 3px;
  background-color: #dfdfdf;
  cursor: pointer;
}
.selected-dot {
  background-color: #202020;
}

.prod-arrow-container {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  background-color: rgba(61, 54, 54, 0.05);
  border-radius: 100%;
  transition: ease-in-out 2s;
  top: 43%;
  right: 0px;
  margin-left: 5px;
  cursor: pointer;
}
.prod-arrow-container-left {
  left: 0px;
  transform: rotate(180deg);
}
#prod-arrow {
  margin-top: 3px;
  margin-left: 3px;
}

/* BOTÃO COMRRAR */
#button-comprar {
  /* Em uma determinada parte da tela ele deirará de ser fixo */

  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  cursor: pointer;
}
#button-comprar div {
  font-weight: 550;
  font-size: 20px;
  color: #fff;
}
a {
  text-decoration: none;
  color: #fff;
}

.buttonMovendo {
  position: fixed;
  background-color: #ed147d;
}
.buttonMovendo:active {
  background-color: #42deaf;
}
.buttonParado {
  margin-top: 70px;
  position: relative;
}
@font-face {
  font-family: "Berkshire Swash";
  src: url("~@/assets/fonts/BerkshireSwash-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
#preco-container-valor {
  font-family: "Berkshire Swash";
  font-size: 32px;
}
#preco-container div {
  margin: 10px;
}
/* Cores */
#cor-container-texto {
  display: flex;
  margin: 5px;
}
#cor-container-texto div {
  margin-top: 10px;
  margin-bottom: 10px;
}
#cor-container-texto div:nth-child(1) {
  color: grey;
}
#cor-container-texto div:nth-child(2) {
  font-weight: bolder;
  margin-left: 5px;
}

#cor-container-cores {
  display: flex;
  align-items: center;
}
#cor-container-cores div {
  height: 37px;
  width: 37px;
  border-radius: 100%;
  margin-right: 10px;
  border: 2px solid #dbdbdb;
  cursor: pointer;
}
.cor-selected {
  border: 2px solid #fff;
  outline: 2px solid black;
}
#cor-container-cores div:nth-child(2) {
  /* background-color: rgb(49, 85, 140); */
  border: 2px solid #fff;
  /* outline: 2px solid black; */
  height: 35px;
  width: 35px;
}
#cor-container-cores div:nth-child(3) {
  /* background-color: rgb(140, 49, 49); */
}
/* TAMANHO */
#tamanho-container-texto {
  margin-left: 10px;
}
#tamanho-container-tamanhos {
  display: flex;
  margin: 5px;
}
#tamanho-container-tamanhos div {
  margin-left: 10px;
  height: 42px;
  width: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px #989898 solid;
}
.tamanho-selected {
  background-color: #000;
  border: 2px #000 solid;
  color: #fff;
  font-weight: 500;
}
#tamanho-container-tamanhos div:nth-child() {
}
/* FRETE */

#frete-container {
  margin-top: 50px;
  display: flex;
  height: 73px;
  border-top: 1px solid #e3e3e3;
  
  align-items: center;
  justify-content: space-around;
}
#inserir-container div {
  font-size: 12px;
  position: relative;
}
#inserir-container input {
  padding-top: 3px;
  height: 25px;
  font-size: 15px;
  border: none;
  border-bottom: 1px solid grey;
}
#inserir-container input:focus {
  outline: none;
}
#frete-button {
  display: flex;
  font-size: 13px;
  color: #fff;
  background-color: #000;
  height: 42px;
  align-items: center;
  padding-inline: 30px;
  cursor: pointer;
}
/* DESCRIÇÃO */

#desc-container {
  margin-top: 50px;
}
#desc-container div {
  margin: 10px;
}
#desc-container div:nth-child(1) {
  font-size: 24px;
  font-weight: 600;
}
#desc-container div:nth-child(2) {
  color: #626262;
  margin-top: 20px;
  font-size: 20px;
}
</style>