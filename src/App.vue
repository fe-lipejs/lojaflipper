<template>
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
  <Rodape/>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: "Roboto", sans-serif;
}
</style>
<script>
import NavBar from "./components/NavBar.vue";
import Rodape from "./components/Rodape.vue"
export default {
  name: "App",
  components: {
    NavBar,
    Rodape,
  },
};
</script>
