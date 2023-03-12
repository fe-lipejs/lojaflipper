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

    <div id="login">
      <router-link to="/carrinho">
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
      </router-link>
    </div>

    <div ref="menuMobile" class="mobile-menu-container">
      <div v-on:click="abrirMenuMobile" class="mobile-menu-fechar">
        <svg
          width="26"
          height="26"
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
      </div>

      <a href="/"> <div class="mobile-menu-item">INÍCIO</div></a>
      <a href="/categoria"><div class="mobile-menu-item">MASCULINO</div></a>
      <a href="/categoria"> <div class="mobile-menu-item">FEMININO</div></a>
      <a href="/login"> <div class="mobile-menu-item">LOGIN</div></a>
    </div>
  </div>
</template>
<style scoped>
.mobile-menu-container {
  position: fixed;
  margin-top: -20px;
  background-color: white;
  width: 100%;
  height: 200%;
  text-align: left;
  transform: translateX(-100%);
  transition: ease-in-out 0.5s;
  z-index: 100;
}
.mobile-menu-item {
  margin: 20px;
  margin-bottom: 40px;
  font-size: 25px;
  color: grey;
  font-weight: 400;
  border-bottom: 1px solid #f1f1f1;
}
.mobile-menu-fechar {
  margin: 20px;
  margin-bottom: 60px;
  font-size: 25px;
  color: grey;
  font-weight: 400;
}
#navbar {
  position: fixed;
  z-index: 1;
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
  font-size: 17px;
  font-weight: 500;
}
</style>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      nome: "Página Inicial",
      menuMobileLigado: false,
    };
  },
  methods: {
    abrirMenuMobile(e) {
      if (this.menuMobileLigado == false) {
        this.menuMobileLigado = true;
        console.log(this.menuMobileLigado);
        this.$refs.menuMobile.style.transform = "translateX(00%)";
      } else if (this.menuMobileLigado == true) {
        this.menuMobileLigado = false;
        console.log(this.menuMobileLigado);

        this.$refs.menuMobile.style.transform = "translateX(-100%)";
      }
    },
  },
};
</script>