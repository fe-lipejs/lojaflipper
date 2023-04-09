<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
    "
  >
    <br /><br /><br />

    <div
      style="
        margin-top: -10px;
        margin-bottom: 50px;
        padding: 30px;
        background-color: blueviolet;
      "
    >
      <h1 style="color: #fff">Cadastro de Produtos</h1>
    </div>
    <br />
    <!-- <div class="container">
      <div class="wrapper">
        <div class="image">
          <img :src="imageSrc" alt="" @click="openFileDialog" />
        </div>
        <div class="content">
          <div class="icon">
            <img
              src="../../../../assets/uploadIcon.png"
              alt=""
              @click="openFileDialog"
            />
          </div>
          <div id="cancel-btn">
            <img
              src="../../../../assets/closeIcon.png"
              alt=""
              @click="closeFile"
            />
            <div class="file-name">{{ imageName }}</div>
          </div>
          <input id="default-btn" type="file" hidden @change="uploadFile" />
        </div>
      </div>
    </div> -->
    <br />
    <div id="container-selects">
      <div id="categorias">
        <label for="categorias">Escolha a categoria:</label><br />
        <!-- Eu não sei o porquê definir o envio do valor para a variavel presente 
     em produtos atraves do métodos: subcategoria(), de fato o v-model aqui não está enviando nenhum valor -->
        <select
          v-model="produto[0].categoria_"
          ref="categoria"
          @input="subCategoria"
          id="categoria"
          name="categoria_"
        >
          <option v-for="(value, key) in categorias" :key="key">
            {{ key }}
          </option>
        </select>
      </div>
      <br />
      <div id="subcategorias">
        <label for="subcategorias">Escolha a sub-categoria:</label><br />
        <select
          v-model="produto[0].subcategoria"
          id="subcategorias"
          name="subcategorias"
        >
          <option v-for="value in subCategoriaNames" :key="value">
            {{ value }}
          </option>
        </select>
      </div>
    </div>

    <br />
    <div id="linhas-divisoras"></div>

    <!-- --------------------------------------------- -->
    <h3>Informações</h3>
    <br />
    <div id="informacoes-container">
      <div id="informacoes">
        <input
          v-model="produto[0].nome"
          type="text"
          name="nome"
          id=""
          placeholder="Nome do produto"
          required
        />
        <input
          v-model="produto[0].sku"
          type="text"
          name="sku"
          id=""
          placeholder="SKU do produto"
          required
        />
        <input
          v-model="produto[0].preco"
          type="text"
          name="preco"
          id=""
          placeholder="Preço"
          required
        />
        <input
          type="text"
          name="precoPromocional"
          v-model="produto[0].precoPromocional"
          id=""
          placeholder="Preço promocional"
          required
        />
        <textarea
          v-model="produto[0].descricao"
          name="informacoes"
          id=""
          cols="30"
          placeholder="Informações do Produto"
          rows="10"
        ></textarea>
      </div>
      <br />
    </div>
    <div id="linhas-divisoras"></div>
    <!-- --------------------------------------------------- -->
    <h4>Estoque</h4>
    <br />
    <!-- <div id="estoque">
      <button>Adicionar variações</button>
    </div> -->
    <br />
    <div id="formulárioEstoque">
      <br />

      <!-- Ao clicar cria um novo array que futuramente irá ser convertido em form -->
      <button
        @click="
          formEstoque.push({
            cor: '',
            hex: '',
            variacoes: [{}],
          })
        "
      >
        Adicionar variação
      </button>
      <br /><br />
      <!-- Faz um form para cada array que foi adicionado acima -->
      <div
        id="estoque-container"
        v-for="(formEstoque, index) in formEstoque"
        :key="index"
      >
        <form :name="'estoqueForm' + (index + 1)" action="" method="post">
          <div style="font-weight: 900">{{ index + 1 }}</div>
          <div id="subcontainer1estoqueForm">
            <input
              type="text"
              placeholder="Cor"
              v-model="formEstoque.cor"
              id=""
            />
            <br />

            <input
              type="text"
              placeholder="Hex"
              v-model="formEstoque.hex"
              id=""
            />
            <div
              class="cor-desmonstracao"
              :style="{ backgroundColor: formEstoque.hex }"
            ></div>
            <!--   -->
            <img
              src="../../../../assets/trashIcon.png"
              style="cursor: pointer"
              @click="excluirFormEstoque(index)"
              height="19"
              width="19"
              alt=""
            />
          </div>
          <br />
          <div id="imagensContainer">
          <span>Imagem Capa</span>
          <!-- ------------IMAGEM CAPA--------------------- -->
          <div class="container">
            <div class="wrapper">
              <div class="image">
                <img :src="formEstoque.imgCapa" alt="" @click="funcaoAtivarInputFileImageCorrespondente(index)" /><!-- @click="openFileDialog"  -->
              </div>
              <div class="content">
                <div class="icon">
                  <img
                    src="../../../../assets/uploadIcon.png"
                    alt=""
                    @click="funcaoAtivarInputFileImageCorrespondente(index)"
                  />
                </div>
                <div id="cancel-btn">
                  <img
                    src="../../../../assets/closeIcon.png"
                    alt=""
                    @click="apagarImagem(index)"
                  />
                  <div class="file-name">{{ }}</div>
                </div>
                <input
                  hidden
                  name="imgCapa"
                  accept="image/*"
                  :id="'default-btn'+index"
                  type="file"
                  @change="uploadImagemCapa"
                  v-on:change="captarIndexImagem(index)"
                />
                {{index}}
              </div>
            </div>
          </div>

          <!-- --------------END IMAGEM CAPA--------------- -->
          <!-- ------------IMAGEM 1--------------------- -->
          <div class="container">
            <div class="wrapper">
              <div class="image">
                <img :src="formEstoque.imgCapa" alt="" @click="funcaoAtivarInputFileImageCorrespondente(index)" /><!-- @click="openFileDialog"  -->
              </div>
              <div class="content">
                <div class="icon">
                  <img
                    src="../../../../assets/uploadIcon.png"
                    alt=""
                    @click="funcaoAtivarInputFileImageCorrespondente(index)"
                  />
                </div>
                <div id="cancel-btn">
                  <img
                    src="../../../../assets/closeIcon.png"
                    alt=""
                    @click="apagarImagem(index)"
                  />
                  <div class="file-name">{{ }}</div>
                </div>
                <input
                  hidden
                  name="imgCapa"
                  accept="image/*"
                  :id="'default-btn'+index"
                  type="file"
                  @change="uploadImagemCapa"
                  v-on:change="captarIndexImagem(index)"
                />
                {{index}}
              </div>
            </div>
          </div>

          <!-- --------------END IMAGEM 1--------------- -->
          </div>
          <br />
          <span>Imagem 1</span>
          <input
            placeholder="Imagem Capa"
            type="file"
            name="img1"
            accept="image/*"
            @change="uploadImagemCapa"
            v-on:change="captarIndexImagem(index)"
          />
          <br />
          <span>Imagem 2</span>
          <input
            placeholder="Imagem Capa"
            type="file"
            name="img2"
            accept="image/*"
            @change="uploadImagemCapa"
            v-on:change="captarIndexImagem(index)"
          />
          <br />
          <span>Imagem 3</span>
          <input
            placeholder="Imagem Capa"
            type="file"
            name="img3"
            accept="image/*"
            @change="uploadImagemCapa"
            v-on:change="captarIndexImagem(index)"
          />
          <br />
          <span>Imagem 4</span>
          <input
            placeholder="Imagem Capa"
            type="file"
            name="img4"
            accept="image/*"
            @change="uploadImagemCapa"
            v-on:change="captarIndexImagem(index)"
          />
          <!-- "'background-color: ${formEstoque.hex}'" -->
          <!-- "{ backgroundColor: minhaCor } -->

          <br />
          <img :src="formEstoque.imgCapa" alt="" width="30" height="30" />
          <img :src="formEstoque.img1" alt="" width="30" height="30" />
          <img :src="formEstoque.img2" alt="" width="30" height="30" />
          <img :src="formEstoque.img3" alt="" width="30" height="30" />
          <img :src="formEstoque.img4" alt="" width="30" height="30" />
          <!-- Cria o o form do estoque do respectivo form acima -->
          <div
            style="cursor: pointer"
            @click="formEstoque.variacoes.push({ tamanho: '', estoque: '' })"
          >
            Adicionar Estoque
          </div>

          <div
            v-for="(variacoes, vIndex) in formEstoque.variacoes"
            :key="vIndex"
          >
            <form
              :name="'estoqueFormVariacoes' + (vIndex + 1)"
              action=""
              method="post"
            >
              {{ vIndex + 1 }}
              <input
                type="text"
                placeholder="tamanho"
                v-model="formEstoque.variacoes[vIndex].tamanho"
                id=""
              />
              <input
                id=""
                type="text"
                placeholder="estoque"
                v-model="formEstoque.variacoes[vIndex].estoque"
              />
            </form>
            <div
              style="cursor: pointer"
              @click="excluirFormEstoqueVariacoes(index, vIndex)"
            >
              Excluir
            </div>
          </div>
        </form>
        <br />
        <button @click="excluirFormEstoque(index)">Excluir</button>
      </div>
    </div>
    <div id="linhas-divisoras"></div>
    <button @click="uploadBancoDados(), exibirConsole()">
      Salvar Informações
    </button>
    <br />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      categorias: [],
      subCategoriaNames: [],
      indexParaSalvarImagem: "",
      teste: "",
      imageName: "Nenhuma imagem escolhinda ainda!",
      imageSrc: "",

      //-----

      produto: [
        {
          categoria_: "",
          subcategoria: "",
          nome: "",
          sku: "",
          preco: "",
          precoPromocional: "",
          descricao: "",
        },
      ],
      formEstoque: [
        {
          indexForm: "",
          cor: "",
          hex: "",
          imgCapa: "",
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          variacoes: [],
        },
      ],

      /* 
      
      */
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/categorias")
      .then((response) => {
        this.categorias = response.data.categorias;
      })
      .catch((error) => {
        console.log("O ERRO FOI ESTE: " + error);
      });
  },
  methods: {
    funcaoAtivarInputFileImageCorrespondente(index) {
      // Simula um clique no input para abrir a janela de seleção de arquivo
      document.getElementById("default-btn"+index).click();
    },
    uploadFile(event) {
      console.log("estou dentro de uploadFile")
      const file = event.target.files[0];
      if (file) {
        const leitor = new FileReader();
        leitor.readAsDataURL(file);
        leitor.onload = () => {
          this.imageSrc = leitor.result;
          this.imageName = file.name;
        };
      }
      console.log(file.name);
    },
    apagarImagem(index) {
      this.formEstoque[index].imgCapa= "";
      this.imageName = "Nenhuma imagem escolhinda ainda!";
    },

    exibirConsole() {
      console.log(this.produto);
      console.log(this.formEstoque);
      console.log(this.teste);
    },
    subCategoria() {
      const categoriaName = this.$refs.categoria.value;
      this.produto[0].categoria_ = this.$refs.categoria.value;
      this.subCategoriaNames = JSON.parse(
        JSON.stringify(this.categorias[categoriaName])
      );
    },
    /*Formulário Estoque:*/
    excluirFormEstoque(index) {
      this.formEstoque.splice(index, 1);
    },
    excluirFormEstoqueVariacoes(index, vIndex) {
      this.formEstoque[index].variacoes.splice(vIndex, 1);
    },
    // para lidar com o upload de imagens, capta o index do formulário respectivo aonde está a imagem:
    captarIndexImagem(index) {
      console.log("estou aqui no captarIndexImagem, no index: "+index);
      this.indexParaSalvarImagem = index;
    },
    uploadImagemCapa(event) {
      console.log("estou aqui na função uploadImagemCapa");
      const imgTipo = event.target.name; // para reconhecer se é imgCapa ou img1,img2...
      const file = event.target.files[0];
      const leitor = new FileReader();
      leitor.readAsDataURL(file);
      leitor.onload = () => {
        this.formEstoque[this.indexParaSalvarImagem][imgTipo] = leitor.result;
      };
    },
    onFileSelectedMultiple(event) {
      const files = event.target.files;
      const imgMultiplas = [];
      for (let i = 0; i < files.length; i++) {
        imgMultiplas.push(URL.createObjectURL(files[i]));
      }
      this.formEstoque.variacoes[this.vIndex].imgMultiplas = imgMultiplas;
    },
    uploadBancoDados() {
      axios
        .post("http://localhost:3000/produtos", [
          this.produto,
          this.formEstoque,
        ])
        .then((response) => {
          console.log("Resposta servidor: ", response.data);
        })
        .catch((error) => {
          console.log("O ERRO FOI ESTE: " + error);
        });
    },
  },
};
</script>
<style scoped>
img {
}
.container {
  height: 100px;
  width: 100px;
  margin-bottom: 70px;
}
.container .wrapper {
  position: relative;
  height: 100px;
  width: 100%;
  border-radius: 10px;
  background: #fff;
  border: 1px solid #2d2d2d;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content .icon img {
  position: absolute;
  bottom: -60px;
  right: 40px;
  padding: 8px 0;
  height: 20px;
  width: 20px;
  cursor: pointer;
}

.wrapper .image {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrapper .image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.wrapper #cancel-btn {
  position: absolute;
  left: 82px;
  top: 4px;
  font-size: 12px;
  cursor: pointer;
}
.wrapper #cancel-btn img {
  height: 12px;
  width: 12px;
}
.wrapper .file-name {
  position: absolute;
  bottom: -110px;
  right: 0px;
  width: 80px;
  padding: 8px 0;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 150px; /* valor que cabe os 15 caracteres aproximadamente */
}
/* ----------------------------------- */
#linhas-divisoras {
  background-color: #f1f1f1;
  width: 100%;
  height: 7px;
  margin-top: 25px;
  margin-bottom: 25px;
}
.cor-desmonstracao {
  height: 30px;
  width: 30px;
  border-radius: 100px;
}
#container-selects label {
  font-weight: 900;
}
#container-selects {
  display: flex;
  flex-direction: column;
  /* margin-left: 10px; */
}
select {
  font-size: 16px;
  padding: 10px;
  border: 1px solid #968d8d;
  border-radius: 5px;
  margin: 10px 0;
  width: 300px;
  -webkit-appearance: none; /* removendo a seta padrão do navegador para navegadores baseados em WebKit */
  -moz-appearance: none; /* removendo a seta padrão do navegador para navegadores baseados em Gecko */
  appearance: none; /* removendo a seta padrão do navegador para outros navegadores */
  background-image: url("../../../../assets/SetaDoSelect.png"); /* adicionando uma imagem de seta personalizada */
  background-repeat: no-repeat;
  background-position: right 10px center; /* movendo a seta 10 pixels para a esquerda */
  background-size: 10px;
  padding-right: 20px; /* adicionando margem à direita da seta */
}
select::-ms-expand {
  display: none;
}
select option {
  font-size: 16px;
  padding: 10px;
  margin-top: 10px;
  background-color: #fff;
  color: #000;
  border: none;
  box-shadow: none;
}

#informacoes-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline: 40px;
  width: 283px;
}
#informacoes input[type="text"] {
  margin: 5px;
  justify-content: center;
  align-items: center;
}
input[name="sku"] {
  display: flex;
  float: right;
  width: 100px;
  justify-content: center;
  align-items: center;
}
input[name="preco"],
input[name="precoPromocional"] {
  /* display: flex; */
  /* flex-direction: column; */
  width: 138px;
  /* justify-content: center;
  align-items: center; */
}
input[name="precoPromocional"] {
  float: right;
}

input[type="text"] {
  border: 1px solid #968d8d;
  font-size: 14px;
  border-radius: 5px;
  padding: 10px;
}

textarea {
  margin: 5px;
  font-size: 14px;
  padding: 10px;
  border: 1px solid #968d8d;
  border-radius: 5px;
  width: 308px;
}

#estoque-container {
  width: 370px;
}
#estoque-container input[type="text"] {
  width: 50px;
}

#subcontainer1estoqueForm {
  display: flex;
  align-items: center;
}

#subcontainer1estoqueForm > * {
  margin: 2px auto;
}
.cor-desmonstracao {
  border: 2px solid #fff;
  outline: 1px solid rgb(144, 144, 144);
  height: 25px;
  width: 25px;
}
</style>