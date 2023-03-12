<template>
  <div id="submenu">
    <div>
      <h1>HOME</h1>
    </div>
    <SearchBox />
  </div>
  <div id="novidades"></div>
  <div id="destaques-semana">
    <span>DESTAQUES DA SEMANA</span>
  </div>
  <br>
  <DestaqueSemana />

</template>
<style scoped>
#submenu {
  background-color: #32cec9;
  background: linear-gradient(180deg, #32cec9 80%, black);
  height: 30em;
}
h1{
  text-align: center;
  color: #fff;
}

#novidades{
  height: 400px;
  background-color: #000;}

#destaques-semana{
  position: relative;
  background-color: orange;
  width: 100%;
  height: 7vw;
}
#destaques-semana span{
  position: absolute;
  top: 30%;
  left: 35%;
  transform: translate(-50,-50);
  color: #fff;
  font-weight:bolder;
  font-size:3vw;
  
}

</style>
<script>
import SearchBox from "@/components/Searchbox.vue";
import DestaqueSemana from "@/components/Views/Home_components/destaqueSemana.vue";
export default {
  components: {
    SearchBox,
    DestaqueSemana,
  },
};
</script>