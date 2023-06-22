<template >
  <!-- <h2>Felipe View</h2> -->

  <div class="menu">
    <div style="margin-left: 10px" class="login-button">login</div>
    <div style="margin-right: 10px" class="ham-icon">
      <svg
        width="24"
        height="26"
        viewBox="0 0 24 26"
        fill="#2f7e89"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#2f7e89"
          d="M3 13.229H21"
          stroke="#2f7e89"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3 6.85571H21"
          stroke="#2f7e89"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3 19.6021H21"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke="#2f7e89"
        />
      </svg>
    </div>
  </div>
  <div class="circle0-container">
    <div class="circle0"></div>
  </div>
  <div class="photo-container">
    <div class="photo">
      <img src="./../../../assets/profile.png" alt="" />
    </div>
    <br /><br />
    <div>
      <svg
        width="86"
        height="25"
        viewBox="0 0 86 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <rect x="64" y="1" width="22" height="22" fill="url(#pattern0)" />
        <rect y="1" width="24" height="24" rx="12" fill="white" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 24C18.0751 24 23 19.0751 23 13C23 6.92487 18.0751 2 12 2C5.92487 2 1 6.92487 1 13C1 19.0751 5.92487 24 12 24ZM4.64406 12.4408C4.54886 12.4766 4.48206 12.5731 4.48206 12.6749C4.48206 12.7766 4.54886 12.8731 4.64406 12.9088L7.63106 13.9998L13.7851 10.8218C13.8498 10.7897 13.9346 10.8117 13.9755 10.8714C14.0164 10.931 14.0064 11.018 13.9531 11.0668L9.81121 14.7818L14.4521 18.5188C14.5187 18.5672 14.6087 18.5794 14.6859 18.5507C14.763 18.522 14.8231 18.454 14.8421 18.3738L17.3001 8.03585C17.3213 7.94739 17.2904 7.84986 17.2221 7.78978C17.1538 7.72971 17.0531 7.7115 16.9681 7.74385L4.64406 12.4408Z"
          fill="black"
        />
        <path
          d="M48.7777 2.69641H38.7777C36.0163 2.69641 33.7777 4.93499 33.7777 7.69641V17.6964C33.7777 20.4578 36.0163 22.6964 38.7777 22.6964H48.7777C51.5391 22.6964 53.7777 20.4578 53.7777 17.6964V7.69641C53.7777 4.93499 51.5391 2.69641 48.7777 2.69641Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M47.7777 12.0665C47.9011 12.8987 47.7589 13.7487 47.3714 14.4955C46.9839 15.2423 46.3708 15.8479 45.6193 16.2261C44.8678 16.6044 44.0161 16.7361 43.1854 16.6024C42.3548 16.4687 41.5874 16.0766 40.9925 15.4816C40.3976 14.8867 40.0054 14.1193 39.8717 13.2887C39.7381 12.458 39.8697 11.6064 40.248 10.8548C40.6262 10.1033 41.2318 9.49021 41.9786 9.10271C42.7254 8.71521 43.5754 8.57306 44.4077 8.69647C45.2566 8.82235 46.0425 9.21793 46.6494 9.82477C47.2562 10.4316 47.6518 11.2175 47.7777 12.0665Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M49.2777 7.19641H49.2877"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlink:href="#image0_110_39" transform="scale(0.00111111)" />
          </pattern>
        </defs>
      </svg>
    </div>
  </div>
  <div class="circle-container">
    <div
      :style="{ left: positionXcircle + 'px', top: positionYcircle + 'px' }"
      class="circle scrollable"
      @scroll="handleScroll"
    ></div>
  </div>
  <div class="texto-flutuante" ref="textoFlutuante">
    {{ texto }}
  </div>
  <div class="texto-saudacao-container animated">
    <div style="margin-top: 25px"></div>
    <div>
      me chamo Felipe, programador, design gráfico e dono da Raffros.com
    </div>

    <div @click="desativarAnimacaoCircle()">contato</div>

    <br />
  </div>

  <div class="spotify animated" style="margin-top: 90px">
    <iframe
      title="Spotify Embed: Recommendation Playlist"
      :src="`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`"
      width="100%"
      height="100%"
      style="min-height: 360px"
      frameborder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>
  <!--  <div class="form-contato">
    <div class="form-contato-container">
      <h2>Contato</h2>
      <input  type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </div>
  </div> -->
  <div class="form">
    <div>Por favor, indique mais músicas :)</div>
    <input @click="formAnimacao(1)" type="text" />
    <input type="text" />
    <button class="form-submit" type="button">enviar</button>
  </div>
  <div class="circle2-container">
    <div
      :style="{ left: positionXcircle2 + 'px', top: positionYcircle2 + 'px' }"
      class="circle2 scrollablel"
      @scroll="handleScroll"
    ></div>
  </div>
  <div class="background"></div>
  <div ref="blur" class="blur">
    <div class="form">
      <div>Por favor, indique mais músicas :)</div>
      <input @click="formAnimacao(1)" type="text" />
      <input type="text" />
      <button class="form-submit" type="button">enviar</button>
    </div>
  </div>
</template>

<style scoped>
.form-contato {
  background-color: pink;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 120px;
  width: ;
  /* backdrop-filter: ; */
}
.form-contato-container {
  background: linear-gradient(45deg, #2bc6ff, #c91fe7);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
}
.form-contato-container h2 {
  color: #d7d7d7;
}
.form-contato-container input {
  box-sizing: border-box;
  border-style: solid #000;
  border-width: 7px;
  outline: none;
  margin: 10px;
  width: 300px;
  appearance: none;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  /* Ajuste o valor conforme necessário */
  height: 40px; /* Ajuste o valor conforme necessário */
  border-radius: 15px; /* Ajuste o valor conforme necessário */
}
.scrollable {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.background {
  position: fixed;
  background: linear-gradient(300.31deg, #000000 52.05%, #0c191be3 92.76%);
  height: 100%;
  width: 100%;
  top: 0;
  z-index: -5;
}
.blur {
  position: fixed;
  backdrop-filter: blur(50px);
  background-color: #000000c3;
  height: 100%;
  width: 100%;
  top: 0;
  transition: opacity 0.8s ease;
  opacity: 0;
  z-index: -8;
}
.menu {
  display: flex;
  background-color: #131313;
  width: 100%;
  height: 55px;
  align-items: center;
  justify-content: space-between;
}
.login-button {
  display: flex;
  align-items: center; /* Alinha verticalmente no centro */
  justify-content: center; /* Alinha horizontalmente no centro */
  color: #dadada;
  /* background-color: #000; */
  outline: 1px #2f7e89 solid;
  border-radius: 10px;
  width: 80px;
  height: 32px;
}
.photo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.photo {
  margin-top: 100px;
  /* background-color: #484848; */
  width: 160px;
  height: 160px;
  border-radius: 100%;
  outline: 1px solid #404040;
  border: 10px solid rgba(0, 0, 0, 0);
  /* padding: 5px; */
  /* border: 1px solid white; */
}
.texto-flutuante {
  font-family: "Ubuntu", sans-serif;
  margin-top: 30px;
  font-size: 60px;
  color: #fff;
  font-weight: bolder;
  text-align: center;
  opacity: 0;
  transition: all 800ms;
}
.texto-saudacao-container div {
  text-align: center;
  margin: 30px;
  color: #d6d6d6;
}
.texto-saudacao-container div:nth-child(1) {
  font-size: 60px;
  font-weight: bolder;
}
.texto-saudacao-container div:nth-child(2) {
  font-size: 14px;
  font-weight: 100;
  font-weight: bolder;
}

.texto-saudacao-container div:nth-child(3) {
  display: flex;
  align-items: center; /* Alinha verticalmente no centro */
  justify-content: center; /* Alinha horizontalmente no centro */
  color: #ffffffd6;
  background-color: #1fd0e7;
  border-radius: 10px;
  width: 120px;
  height: 42px;
  margin: 0 auto;
  font-weight: 300;

  background: linear-gradient(90.87deg, #2894d0 49.25%, #b168eb 105.7%), #212121;
}
.texto-saudacao-container.animated div {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s, transform 1s;
}

.texto-saudacao-container.animated.visible div {
  opacity: 1;
  transform: translateY(0);
}
.spotify {
  margin-inline: 10px;
}
.spotify.animated div {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s, transform 1s;
}

.spotify.animated.visible div {
  opacity: 1;
  transform: translateY(0);
}

.circle0-container {
  position: absolute;
  overflow-x: hidden;
  height: 120vh;
  width: 100vw;
  padding-bottom: 40px;
  padding-top: 100px;
  top: -550px;
  z-index: -2;
}
.circle0 {
  position: absolute;
  border-radius: 100%;
  margin-top: 250px;
  border: 1px #858585b3 solid;
  z-index: -1;
  transition: 2s; /* Define a transição suave */
  height: 500px;
  width: 500px;
  right: 10px;
  transform: translateX(50%);
}
.circle-container {
  position: absolute;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 100vh;
  padding-top: 100px;
  top: 30px;
  width: 100%;
  z-index: -2;
}
.circle {
  position: absolute;
  overflow-x: hidden;
  overflow-y: hidden;
  border-radius: 100%;
  margin-top: 250px;
  border: 1px #272727b3 solid;
  z-index: -1;
  transition: 2s; /* Define a transição suave */
  height: 300px;
  width: 300px;
  transform: translateX(50%);

  /* background-color: #b196ae; */
}
.circle2-container {
  position: absolute;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 100vh;
  padding-top: 100px;
  top: 800px;
  width: 100%;
  z-index: -2;
}
.circle2 {
  position: absolute;
  border-radius: 100%;
  margin-top: 250px;
  /* border: 1px rgba(255, 255, 255, 0.7) solid; */
  z-index: -1;
  transition: 2s; /* Define a transição suave */
  height: 700px;
  width: 700px;
  transform: translateX(0%);

  background: linear-gradient(#853aff, #3ac1ff);
}

.form {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form div {
  color: #fff;
  font-size: 17px;
  font-weight: 800;
  margin: 30px;
}
.form input {
  margin: 10px;
  appearance: none;
  border: none;
  padding-left: 30px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  width: 250px;
  height: 40px; /* Ajuste o valor conforme necessário */
  border-radius: 15px; /* Ajuste o valor conforme necessário */
}
input:focus {
  outline: none;
}
.form-submit {
  background: linear-gradient(100.14deg, #161617 -8.16%, #212424 100.04%);
  color: #e9e9e9;
  font-size: 16px;
  width: 280px;
  height: 40px;
  appearance: none;
  border: none;
  border-radius: 15px; /* Ajuste o valor conforme necessário */
}
</style>

<script>
export default {
  data() {
    return {
      playlistId: "7jwFOVOJCMaAoqE3twVb3c",
      positionXcircle: 0,
      positionYcircle: 0,
      positionXcircle2: 70,
      positionYcircle2: -400,
      index: 0,
      texto: "Raffros",
      nomes: ["Dedicação", "Qualidade", "Serviço"],
      indexFormAnimacao: 0,
      animacaoCircle: null,
      animacaoExibirNomes: null,
    };
  },
  mounted() {
    this.startMoving();
    this.exibirNomes();
  },

  methods: {
    desativarAnimacaoCircle() {
      clearInterval(this.animacaoCircle);
      clearTimeout(this.animacaoExibirNomes);

      // this.$router.push("/felipe/contato");
    },
    ativarBlur() {
      this.$refs.blur.style.opacity = "1";
      this.$refs.blur.style.zIndex = "5";
    },
    exibirNomes() {
      let index = 0;

      setTimeout(() => {
        this.$refs.textoFlutuante.style.opacity = "1";
      }, 500);
      this.animacaoExibirNomes = setInterval(() => {
        this.texto = this.nomes.length;
        if (this.$refs.textoFlutuante) {
          this.$refs.textoFlutuante.style.opacity = "1";
          if (index < this.nomes.length) {
            this.texto = this.nomes[index];
            index++;
          }
          if (index >= this.nomes.length) {
            index = 0;
            this.$refs.textoFlutuante.style.opacity = "0";
          }
        }
      }, 2000);
      setTimeout(() => {
        this.$refs.textoFlutuante.style.opacity = "1";
        this.texto = "Raffros.com";
      }, 500);
    },
    handleScroll(event) {
      event.currentTarget.scrollLeft = 0;
    },
    startMoving() {
      const container = document.querySelector(".texto-saudacao-container");
      const container2 = document.querySelector(".spotify");

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      });

      observer.observe(container);
      observer.observe(container2);
      //--------------------------------------------------

      this.animacaoCircle = setInterval(() => {
        const minX = window.innerWidth - 300; // Posição mínima do scroll horizontal
        const maxX = window.innerWidth - 500; // Posição máxima do scroll horizontal
        const minY = window.innerHeight - 400; // Posição mínima do scroll vertical
        const maxY = window.innerHeight - 700; // Posição máxima do scroll vertical
        this.positionXcircle = Math.floor(Math.random() * (maxX - minX)) + minX;
        this.positionYcircle = Math.floor(Math.random() * (maxY - minY)) + minY;
      }, 2000); // Altere o intervalo de tempo conforme necessário (2 segundos no exemplo)
    },
    formAnimacao(i) {
      this.positionXcircle2 = 0;
      this.positionYcircle2 = 0;

      this.indexFormAnimacao += i;
      let positioncircle2 = [
        { left: -400, top: 100 },
        { left: 100, top: -400 },
        { left: 120, top: 100 },
      ];
      if (this.indexFormAnimacao >= positioncircle2.length) {
        this.indexFormAnimacao = 0;
      }
      console.log(this.indexFormAnimacao);

      this.positionXcircle2 = positioncircle2[this.indexFormAnimacao].top;
      this.positionYcircle2 = positioncircle2[this.indexFormAnimacao].left;
    },
  },
};
</script>