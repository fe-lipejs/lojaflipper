<template>
  <div id="navbar">
    <div v-on:click="abrirMenuMobile" id="ham-icon">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 12H21"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3 6H21"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3 18H21"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <div id="icon">
      <router-link to="/">
        <img src="@/assets/Logomarca.png" alt="" width="31" height="24.8" />
      </router-link>
    </div>

    <div @click="abrirCarrinho(1)" id="carrinho">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.50002 18.3333C7.96026 18.3333 8.33335 17.9602 8.33335 17.5C8.33335 17.0398 7.96026 16.6667 7.50002 16.6667C7.03978 16.6667 6.66669 17.0398 6.66669 17.5C6.66669 17.9602 7.03978 18.3333 7.50002 18.3333Z"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.6666 18.3333C17.1269 18.3333 17.5 17.9602 17.5 17.5C17.5 17.0398 17.1269 16.6667 16.6666 16.6667C16.2064 16.6667 15.8333 17.0398 15.8333 17.5C15.8333 17.9602 16.2064 18.3333 16.6666 18.3333Z"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M0.833313 0.833344H4.16665L6.39998 11.9917C6.47618 12.3753 6.6849 12.72 6.9896 12.9653C7.2943 13.2105 7.67556 13.3408 8.06665 13.3333H16.1666C16.5577 13.3408 16.939 13.2105 17.2437 12.9653C17.5484 12.72 17.7571 12.3753 17.8333 11.9917L19.1666 5.00001H4.99998"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <div ref="menuMobile" class="mobile-menu-container">
      <div v-on:click="abrirMenuMobile" class="mobile-menu-fechar">
        <!-- <span style="color: #fff">fechar</span> -->
        <svg
          class="fecharButton"
          width="15"
          height="56"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23 3L3 23M3 3L23 23"
            stroke="#353535"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div id="icon">
          <router-link to="/">
            <img
              src="@/assets/Logomarca.png"
              alt=""
              width="40.3"
              height="31.59"
            />
          </router-link>
        </div>
      </div>

      <!-- <router-link v-on:click="fecharMenuMobile" to="/">
        <div class="mobile-menu-item">INÍCIO</div></router-link
      > -->
      <router-link v-on:click="fecharMenuMobile" to="/categoria"
        ><div class="mobile-menu-item">MASCULINO</div></router-link
      >
      <router-link v-on:click="fecharMenuMobile" to="/categoria">
        <div class="mobile-menu-item">FEMININO</div></router-link
      >
      <router-link v-on:click="fecharMenuMobile" to="/login"
        ><div class="mobile-menu-item">LOGIN</div></router-link
      >
    </div>

    <div class="carrinho" ref="carrinho">
      <span @click="abrirCarrinho(0)">Fechar</span>
      <Carrinho
        :carrinhoDados="carrinho"
        :priceTotal="precoTotal"
        @novoCarrinho="receberNovoCarrinho"
      />
    </div>
  </div>
  <div class="cortinaFumaca" ref="cortinaFumaca"></div>
</template>
<style scoped>
.fecharButton {
  fill: red;
}

.carrinho {
  position: absolute;
  overflow-y:visible;
  top: 0px;
  right: 0;
  z-index: 4;
  width: 350px;
  height: 1000px;
  background: #fff;
  transform: translateX(110%);
  opacity: 1;
  box-shadow: -10px 0 20px -10px #2e2e2e;
  transition: all 0.5s ease-in-out;
}
.carrinho span {
  color: black;
  position: absolute;
  right: 0;
  font-size: 18px;
  cursor: pointer;
}
.cortinaFumaca {
  position: absolute;
  /* background:  rgba(0, 0, 0, 0.); ; */
  background: rgba(67, 66, 66, 0);
  backdrop-filter: blur(15px);
  display: block;
  width: 100%;
  height: 1000px;
  opacity: 0;
  z-index: -3;
  transition: all 1s ease-in-out;
}

.mobile-menu-container {
  position: fixed;
  margin-top: -20px;
  background-color: rgba(0, 0, 0, 0.75);
  background: linear-gradient(-90deg, #00000099 5%, black 95%);
  backdrop-filter: blur(3px);
  width: 100%;
  height: 200%;
  text-align: left;
  transform: translateX(-100%);
  opacity: 0;
  transition: all 0.45s ease-in-out;
  z-index: 100;
}
.mobile-menu-item {
  margin: 20px;
  margin-bottom: 10px;
  font-size: 18px;
  color: #c9c9c9;
  font-weight: 200;
  /* border-bottom: 1px solid #6d6d6d; */
}
.mobile-menu-fechar {
  margin: 20px;
  margin-bottom: 20px;
  font-size: 15px;
  color: grey;
  font-weight: 400;
}
#navbar {
  position: fixed;
  z-index: 5;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: black;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}

#navbar div a {
  padding-inline: 1vh;
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}
</style>

<script>
import Carrinho from "@/components/Views/Carrinho/Carrinho.vue";
import axios from "axios";
//import BScroll from 'better-scroll';


export default {
  name: "NavBar",
  data() {
    return {
      nome: "Página Inicial",
      menuMobileLigado: false,
      carrinho: {},
      precoTotal: 0,
      serverUrl: process.env.VUE_APP_SERVER_URL,
    };
  },
 
  components: {
    Carrinho,
  },
  methods: {
    handleScroll(event) {
      event.preventDefault();
      window.scrollTo(0, 0);
    },
    disableScroll() {
      document.body.style.overflow = "hidden";
    },
    enableScroll() {
      document.body.style.overflow = "auto";
    },

    receberNovoCarrinho(carrinhoAtualizado) {
      this.carrinho = carrinhoAtualizado.data[0];
      this.precoTotal = carrinhoAtualizado.data[1];
    },
    async abrirCarrinho(interruptor) {
      //GRÁFICOS E DESIGNS
      if (interruptor == 0) {
        this.$refs.cortinaFumaca.style.opacity = "0";
        this.$refs.cortinaFumaca.style.zIndex = "-2";
        this.$refs.carrinho.style.opacity = "0";
        this.$refs.carrinho.style.transform = "translateX(100%)";
        this.enableScroll();


      } else {
        this.$refs.carrinho.style.opacity = "1";
        this.$refs.cortinaFumaca.style.opacity = "1";
        this.$refs.cortinaFumaca.style.zIndex = "2";
        this.$refs.carrinho.style.transform = "translateX(00%)";
        this.disableScroll();

      }
      //Carrinho
      await axios
        .get(`${this.serverUrl}/carrinho/`)
        .then((response) => {
          const self = this;
          self.carrinho = response.data[0];
          self.precoTotal = response.data[1];
          console.log(this.precoTotal);
        })
        .catch((error) => {
          console.log("O ERRO FOI ESTE: " + error);
        });
    },

    abrirMenuMobile(e) {
      if (this.menuMobileLigado == false) {
        this.disableScroll();

        this.menuMobileLigado = true;
        this.$refs.menuMobile.style.transform = "translateX(00%)";
        setTimeout(() => {
          this.$nextTick(() => {
            this.$refs.menuMobile.style.opacity = "1";
          });
        }, 200);
      } else if (this.menuMobileLigado == true) {
        this.menuMobileLigado = false;
                this.enableScroll();

        this.$refs.menuMobile.style.transform = "translateX(-100%)";
        setTimeout(() => {
          this.$nextTick(() => {
            this.$refs.menuMobile.style.opacity = "0";
          });
        }, 200);
      }
    },
    fecharMenuMobile() {
      this.enableScroll();

      this.menuMobileLigado = false;
      this.$refs.menuMobile.style.transform = "translateX(-100%)";
      this.$refs.menuMobile.style.opacity = "0";
    },
  },
};
</script>