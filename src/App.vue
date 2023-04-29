<template>
  <div>
    <head>
      <link
        href="http://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
        type="text/css"
      />
    </head>
    <NavBar />
    <body>
      <router-view />
    </body>
       <Rodape v-if="showComponentRodape" />
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  zoom: 1;

}
body {
  font-family: "Roboto", sans-serif;
}
</style>
<script>
import NavBar from "./components/NavBar.vue";
import Rodape from "./components/Rodape.vue";
export default {
  name: "App",
  components: {
    NavBar,
    Rodape,
  },
  data() {
    return {
      showComponentRodape: true,
    };
  },
  
  mounted() {
    
    if (this.$route.name === "Carrinho") {
      this.showComponentRodape = false;
    }else{
        this.showComponentRodape = true
    }
  },
  
};
</script>
