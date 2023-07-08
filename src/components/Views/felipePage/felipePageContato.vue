<template>
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
  <div class="background"></div>
  <div ref="blur" class="blur"></div>
  <div class="circle-container">
    <div
      :style="{ left: positionXcircle + 'px', top: positionYcircle + 'px' }"
      class="circle scrollable"
      @scroll="handleScroll"
    ></div>
  </div>
  <br /><br />
  <div class="form">
    <h1>Contato</h1>
    <br><br>
    <span style="color: #fff">nome</span>
    <input @click="formAnimacao(1)" type="text" />
    <br />
    <span style="color: #fff">telefone</span>

    <input type="text" />

    <!-- ------------------------------- -->
  
    <div class="dropdown">
        <span class="dropdown-title" >Tipo de Serviço</span>
      <div class="dropdown-toggle" @click="toggleDropdown">
        <span>{{
          selectedOption ? selectedOption.label : "Selecione uma opção"
        }}</span>
        
        <span class="dropdown-arrow"></span>
      </div>
      <div v-show="isDropdownOpen" class="dropdown-menu">
        <div
          v-for="option in options"
          :key="option.value"
          class="dropdown-item"
          @click="selectOption(option)"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
    <!------------------------------ -->

    <div class="upload-container">
      <label for="file-upload">Selecione os arquivos:</label>
      <input
        ref="fileInput"
        id="file-upload"
        type="file"
        multiple
        @change="handleFileSelect"
      />
      <div class="upload-button" @click="selectFiles">Selecionar</div>
    </div>

    <div class="file-list">
      <ul>
        <li v-for="file in fileList" :key="file.name">{{ file.name }}</li>
      </ul>
    </div>
    <button @click="confirmar()" class="form-submit" type="button">enviar</button>
  </div>
  <!-- ----------------- -->

  <h2>ij</h2>
</template>
<style scoped>
h1{
  color: white;
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
  transition: all 1s;
  opacity: 1;
  z-index: 5;
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
  background: linear-gradient(90.87deg, #2894d0 49.25%, #b168eb 105.7%), #212121;
  color: #fff;
  font-size: 16px;
  width: 280px;
  height: 40px;
  appearance: none;
  border: none;
  border-radius: 15px; /* Ajuste o valor conforme necessário */
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
  border: 1px #4c4c4cb3 solid;
  z-index: -1;
  transition: 2s; /* Define a transição suave */
  height: 300px;
  width: 300px;
  transform: translateX(50%);
}

/* -------------------- */
.upload-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
}

.upload-container label {
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  color: #cdcdcd;
}

.upload-container input[type="file"] {
  display: none;
}

.upload-container .upload-button {
  display: inline-block;
  padding: 10px 20px;
  background: linear-gradient(90.87deg, #2894d0 49.25%, #b168eb 105.7%), #212121;
  color: white;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}

.upload-container .upload-button:hover {
  background-color: #45a049;
}

.file-list {
  font-size: 16px;
}

.file-list ul {
  list-style-type: none;
  padding: 0;
}

.file-list li {
  margin-bottom: 5px;
}
/* SELECT OPCOES DE SERVIÇO */
.dropdown {
  position: relative;
  display: inline-block;
  /* height: 40px; */
}
.dropdown-title{
  position: relative;
  text-align: center;
  font-size: 16px;
  font-weight: 200;
  color: #fff;
  left: 35%;
  top: 20px;
}


.dropdown-toggle {
  display: flex;
  width: 280px;
  height: 40px;
  align-items: center;
  justify-content: center;
margin-top:3px ;
  cursor: pointer;
  /* padding: 8px 50px; */
  background-color: #fff;
  border-radius: 15px;
  position: relative;
}
.dropdown-toggle span {
  font-size: 14px;
  font-weight: 200;
  color: #000000;
}

.dropdown-arrow {
  position: absolute;
  top: 52%;
  right: 50px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #000000;
}

.dropdown-menu {
  width: 280px;
  position: absolute;
  /* top: calc(100% -20px); */
  top: 65px;
  left: 0;
  background-color: #fff;
  border-radius: 7px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 9999;
}
.dropdown-menu div {
   margin-top: 0px;
  margin-inline: 0;
  margin-bottom: 0px;
  font-size: 14px;
  font-weight: 200;
  color: #000000;
  
}
.dropdown-item {
  padding: 8px;
  cursor: pointer;
  
}

.dropdown-item:hover {
  background-color: #ececec;
}
.dropdown-item:active {
   color: #fff;
    background-color: rgb(32, 32, 32);
}
</style>

<script>
export default {
  data() {
    return {
      animacaoCircle: null,
      positionXcircle: -300,
      positionYcircle: 50,
      fileList: [],
      isDropdownOpen: false,
      options: [
        { value: "opcao1", label: "Cartazes" },
        { value: "opcao2", label: "Publicidade" },
        { value: "opcao3", label: "Web Design" },
      ],
      selectedOption: null,
    };
  },
  mounted() {
    this.ativarBlur();
    this.startMoving();
  },
  methods: {
    confirmar(){
      this.$router.push("/felipe/confirmar");
      console.log('ol');
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isDropdownOpen = false;
    },
    selectFiles() {
      this.$refs.fileInput.value = null; // Limpar o valor do campo de upload
      this.$refs.fileInput.click();
    },
    handleFileSelect(event) {
      const files = event.target.files;
      this.fileList = []; // Limpar a lista de arquivos selecionados anteriormente

      for (let i = 0; i < files.length; i++) {
        this.fileList.push(files[i]);
      }
    },
    ativarBlur() {
      setTimeout(() => {
        this.$refs.blur.style.opacity = "0";
        this.$refs.blur.style.zIndex = "-8";
      }, 500);
    },
    startMoving() {
      this.animacaoCircle = setInterval(() => {
        const minX = -300; // Posição mínima do scroll horizontal
        const maxX = window.innerWidth - 100; // Posição máxima do scroll horizontal
        const minY = window.scrollY - 200; // Posição mínima do scroll vertical
        const maxY = window.scrollY + 50; // Posição máxima do scroll vertical
        this.positionXcircle = Math.floor(Math.random() * (maxX - minX)) + minX;
        this.positionYcircle = Math.floor(Math.random() * (maxY - minY)) + minY;
      }, 2000); // Altere o intervalo de tempo conforme necessário (2 segundos no exemplo)
    },
  },
};
</script>