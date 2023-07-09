<template>
  <!-- Parte de Cima -->
  <div style="overflow-x: visible">
    <br /><br /><br />
    <div id="categoria-title">ROUPAS MASCULINAS</div>
    <div id="results-container">
      <div>Resultado(27)</div>
      <div @click="abrirFiltro(true)" id="search-filter">
        <div>Filtro</div>
        <div id="search-filter-icon">
          <svg
            id="search-filter-icon-svg"
            width="23"
            height="16"
            viewBox="0 0 23 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.84034 3.57143C5.84034 4.99159 4.75679 6.14286 3.42017 6.14286C2.08355 6.14286 1 4.99159 1 3.57143C1 2.15127 2.08355 1 3.42017 1C4.75679 1 5.84034 2.15127 5.84034 3.57143ZM5.84034 3.57143H21.9748M13.9076 12.1429C13.9076 13.563 12.824 14.7143 11.4874 14.7143C10.1508 14.7143 9.06722 13.563 9.06722 12.1429M13.9076 12.1429C13.9076 10.7227 12.824 9.57143 11.4874 9.57143C10.1508 9.57143 9.06722 10.7227 9.06722 12.1429M13.9076 12.1429H21.9748M9.06722 12.1429H1"
              stroke="#494444"
              stroke-width="1.71429"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
    <!-- Filtro -->

    <div ref="filtroContainer" class="filtro-container">
      <div ref="filtroContent" class="filtro-content">
        <h2 @click="abrirFiltro(false)">Filtro</h2>
        <br />
        <hr />
        <div class="color-content">
          <div style="display: flex; justify-content: space-between">
            <h4>Cores</h4>
            <img
              @click="mostrarOpcoesFiltro('cor')"
              class="seta-cor"
              src="../assets/seta.png"
              height="24"
              width="24"
            />
          </div>
          <div
            class="filtro-cor filtro-opcoes"
            v-for="cor in coresFiltro"
            :key="cor"
          >
            <input
              type="checkbox"
              id="meuCheckbox"
              name="meuCheckbox"
              value="{{cor}}"
            />
            <label for="meuCheckbox"> {{ cor }}</label>
          </div>
        </div>
        <hr />
        <div class="categorias-content">
          <div style="display: flex; justify-content: space-between">
            <h4>Categorias</h4>
            <img
              @click="mostrarOpcoesFiltro('categorias')"
              class="seta-categorias"
              src="../assets/seta.png"
              height="24"
              width="24"
            />
          </div>
          <div
            class="filtro-categorias filtro-opcoes"
            v-for="categoria in categoriasFiltro"
            :key="categoria"
          >
            <input
              type="checkbox"
              id="meuCheckbox"
              name="meuCheckbox"
              value="{{categoria}}"
            />
            <label for="meuCheckbox"> {{ categoria }}</label>
          </div>
        </div>
        <hr />
        <div class="tamanhos-content">
          <div style="display: flex; justify-content: space-between">
            <h4>Tamanhos</h4>
            <img
              @click="mostrarOpcoesFiltro('tamanhos')"
              class="seta-tamanhos"
              src="../assets/seta.png"
              height="24"
              width="24"
            />
          </div>
          <div
            class="filtro-tamanhos filtro-opcoes"
            v-for="tamanho in tamanhosFiltro"
            :key="tamanho"
          >
            <input
              type="checkbox"
              id="meuCheckbox"
              name="meuCheckbox"
              value="{{tamanho}}"
            />
            <label for="meuCheckbox"> {{ tamanho }}</label>
          </div>
        </div>
        <hr />

        <div @click="getFiltro()" class="filtro-submit">FILTRAR</div>
      </div>
    </div>
    <!-- Loading -->
    <div ref="blur" class="blur">
      <span>Raffros</span>
      <div class="loading"></div>
    </div>

    <!-- PRODUTOS CARDS -->
    <div id="cards-produtos">
      <CardProdutos />
      <CardProdutos />
      <CardProdutos />
      <CardProdutos />
      <CardProdutos />
      <CardProdutos />
    </div>
    <Paginacao />
    <br />
  </div>
</template>

<style scoped>
/* Loading  */
.loading {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f318;
  border-left: 4px solid #ed147d;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
.blur {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(40px);
  /* background-color: #09aba0ee; */
  background-color: #000000ee;
  height: 100%;
  width: 100%;
  top: 0;
  transition: opacity 0.8s ease;
  opacity: 1;
  z-index: 5;
}
.blur span {
  position: absolute;
  top: 30vh;
  color: #ffffffdc;
  font-size: 50px;
  font-weight: 600;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* filtro */

.filtro-container {
  position: absolute;
  top: 110px;
  margin-top: -50px;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: -5;
}
.filtro-content {
  background-color: white;
  height: 90vh;
  transform: translateX(110%);
  opacity: 1;
  transition: 0.5s ease-in-out;
}
.filtro-container h2 {
  text-align: center;
}
.filtro-container div {
  margin: 15px;
}

.filtro-submit {
  margin-top: 10px;
  padding: 11px;
  text-align: center;
  font-size: 14px;
  background-color: #ed147d;
  color: #fff;
  border-radius: 7px;
  cursor: pointer;
}
.filtro-submit:active {
  background-color: #1e1e1e;
}

.filtro-content label {
  margin-left: 5px;
  color: #353535;
}

.filtro-opcoes {
  display: none;
}
.filtro-remover-opcao {
  display: block;
}
.seta-cor,
.seta-tamanhos,
.seta-categorias {
  transform: rotate(-90deg);
  transition: all 0.15s ease-in-out;
}
.seta-rotate {
  transform: rotate(0deg);
  transition: all 0.15s ease-in-out;
}
#colors {
  margin: 0;
  margin-top: 5px;
}

#cards-produtos {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}
#categoria-title {
  margin: 20px;
  font-weight: 800;
  font-size: 25px;
}
#results-container {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
}

#results-container div {
  margin: 20px;
  font-size: 18px;
  color: rgb(171, 171, 171);
}
#search-filter {
  background-color: white;
  padding-inline: 4px;
  /* position: absolute; */
  display: flex;
  border: 1px solid grey;
  cursor: pointer;
  align-items: center;
}
#search-filter div {
  margin: 5px;
  font-size: 18px;
}
#search-filter-icon-svg {
  width: 20px;
  height: 20px;
}
#search-filter svg {
  margin-top: 6px;
}
</style>

<script>
import CardProdutos from "@/components/CardProdutos.vue";
import Paginacao from "@/components/PaginacaoPadrao.vue";
import axios from "axios";

export default {
  name: "Categoria",
  components: {
    CardProdutos,
    Paginacao,
  },
  data() {
    return {
      serverUrl: process.env.VUE_APP_SERVER_URL,
      isOpenFiltro: false,
      coresFiltro: [],
      tamanhosFiltro: ["P", "M", "G", "GG"],
      categoriasFiltro: [],
    };
  },
  mounted() {
    this.ativarBlur();
  },
  methods: {
    mostrarOpcoesFiltro(doc) {
      const opcao = document.getElementsByClassName(`filtro-${doc}`);
      const seta = document.getElementsByClassName(`seta-${doc}`);

      if (seta[0].classList.contains("seta-rotate")) {
        seta[0].classList.remove("seta-rotate");
        for (let i = 0; i < opcao.length; i++) {
          opcao[i].classList.remove("filtro-remover-opcao");
        }
      } else {
        seta[0].classList.add("seta-rotate");
        for (let i = 0; i < opcao.length; i++) {
          opcao[i].classList.add("filtro-remover-opcao");
        }
      }
    },
    ativarBlur() {
      axios
        .get(`${this.serverUrl}/produtos-filtro`)
        .then((response) => {
          this.coresFiltro = response.data.coresUnicas;
          this.categoriasFiltro = response.data.subcategoriasArrays;
        })
        .catch((error) => {
          // Manipule os erros aqui
          console.error(error);
        });
      setTimeout(() => {
        this.$refs.blur.style.opacity = "0";
        setTimeout(() => {
          this.$refs.blur.style.zIndex = "-8";
        }, 1100);
      }, 1000);
    },
    abrirFiltro(isOpenFiltro) {
      if (isOpenFiltro == true) {
        this.$refs.filtroContent.style.transform = "translateX(0%)";
        this.$refs.filtroContent.style.opacity = "1";
        this.$refs.filtroContainer.style.zIndex = "1";
      } else {
        this.$refs.filtroContent.style.transform = "translateX(110%)";
        this.$refs.filtroContent.style.opacity = "0";
        setTimeout(() => {
          this.$refs.filtroContainer.style.zIndex = "-4";
        }, 600);
      }
    },
    getFiltro() {
      this.abrirFiltro(false);
      this.$refs.blur.style.zIndex = "5";
      this.$refs.blur.style.opacity = "1";

      setTimeout(() => {
        this.$refs.blur.style.opacity = "0";
        setTimeout(() => {
          this.$refs.blur.style.zIndex = "-8";
        }, 1100);
      }, 1000);
    },
  },
};
</script>


