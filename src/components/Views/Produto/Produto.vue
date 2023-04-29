<template>
  <div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br />
    <div class="slider-content">
      <div>
        <transition name="slide">
          <img
            class="imagemProduto"
            ref="mudarImagem"
            :src="require(`@/assets/${imageSrc}`)"
            alt=""
          />
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
          <div v-for="index,value in images.length" :key="value">
            <div  class="prod-pagi-dots" :class="{ 'selected-dot ': value === currentImage }"
></div>
          </div>
        </div>
      </div>
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
    -->
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
    </div>
    <br /><br />
    <!-- TAMANHO -->
    <div id="tamanho-container">
      <div id="tamanho-container-texto">Tamanho:</div>
      <div id="tamanho-container-tamanhos">
        <div>P</div>
        <div>M</div>
        <div>G</div>
        <div>GG</div>
      </div>
    </div>

    <!-- FRETE -->
    <div id="frete-container">
      <div id="inserir-container">
        <div>INSERIR CEP</div>
        <input maxlength="8" type="text" name="" id="" />
      </div>
      <div id="frete-button" ref="content">CALCULAR FRETE</div>
    </div>
    <!-- DESCRIÇÃO -->
    <div id="desc-container">
      <div>DESCRIÇÃO DO PRODUTO</div>
      <div>
        Após reorganização interna para melhor refletir o estilo dos nossos
        clientes, ficamos felizes em anunciar que a Preston Field foi
        incorporada pela Marfinno, que agora também contará com um segmento
        especial ("Marfinno Social"). Nessa fase de transição, é possível que
        você receba produtos com o nome antigo da marca. Não se preocupe, os
        produtos permanecem os mesmos e todas as referências já estão em
        processo de atualização pelo nosso time. Agradecemos pela compreensão e
        estamos à disposição para esclarecer quaisquer dúvidas
      </div>
    </div>

    <!-- BOTÃO COMPRAR -->
    <router-link to="/informacoes"
      ><div
        id="button-comprar"
        class="buttonMovendo"
        :class="{ buttonParado: buttonParado }"
      >
        <div>COMPRAR</div>
      </div></router-link
    >
  </div>
</template>
<script>
import axios from "axios";
import $ from "jquery";

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
      corSelecionada: 0,
      //---------------------
      images: [
        "BLUE/b1.png",
        "BLUE/b2.png",
        "BLUE/b3.png",
        "BLUE/b4.png",
        "BLUE/b5.png",
      ],
      currentImage: 0,
    };
  },
  mounted() {
    /*   const objProdutoEstoque = Object.keys(this.produto.produtoEstoque).map((key) => {
      return key;
    }); */
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
        console.log();
      })
      .catch((error) => {
        console.log("O ERRO FOI ESTE: " + error);
      });
  },
  computed: {
    imageSrc() {
      return this.images[this.currentImage];
    },
  },
  methods: {
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
        }, 310);
      } else {
        this.$refs.mudarImagem.classList.add("slide-direita");
        setTimeout(() => {
          this.$nextTick(() => {
            const divElement = this.$refs.mudarImagem;
            // faça algo com divElement
            this.$refs.mudarImagem.classList.remove("slide-direita");
            divElement.classList.add("slide-opacidade");
          });
        }, 310);
      }
      setTimeout(() => {
        this.$nextTick(() => {
          const divElement2 = this.$refs.mudarImagem;
          divElement2.classList.remove("slide-opacidade");
        });
      });
      //----------------FIM ANIMAÇÃO----------------------------

      setTimeout(() => {
        this.currentImage += direcao;

        if (this.currentImage < 0) {
          this.currentImage = this.images.length - 1;
        } else if (this.currentImage >= this.images.length) {
          this.currentImage = 0;
        }

        $(`#imageDot${this.currentImage}`).addClass("selected-dot");
      
      }, 310);
    },

    //-------------------------------------------------------

    //ao clicar na cor aciona essa funcao:
    captarNomeCor(value, index) {
      if (index == this.selectedItemCor) {
        this.selectedItemCor = null;
        this.corSelecionada = null;
      } else {
        this.selectedItemCor = index;
        this.corSelecionada = value;
      }
    },
  },
};
</script>

<style scoped>
.imagemProduto {
  height: 300px;
  width: 370px;
}
.slider-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  background-color: #3bcba0;
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
#tamanho-container-tamanhos div:nth-child(3) {
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
  border-bottom: 1px solid #e3e3e3;
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