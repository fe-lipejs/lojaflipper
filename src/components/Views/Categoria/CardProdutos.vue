<template>
  <a href="/produto">
    <div id="produto-container">
      <div id="produto-img"></div>
      <div id="produto-nome">Moto G52</div>
      <div id="preco-container">
        <div id="preco-old">R$ 199,90</div>
        <div id="preco-new">R$ 139,90</div>
      </div>
      <div id="preco-parcelas">6X de R$23,32*</div>
    </div>
  </a>
  <!-- <div id="produtos-divisao"></div> -->
</template>
<script>
export default {
  props:{
        height: String,
        width: String,
    },
}
</script>
<style scoped>
a{
  text-decoration: none;
  color: #000;
}
#produto-container {
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#produto-img {
  background-color: #e5e5e5;
  height: 300px;
  width: 250px;
}

#preco-container {
  display: flex;
  margin: 10px;
  align-items: center;
}
#produto-nome {
  margin-top: 20px;
  /* font-weight: 900; */
  font-size: 20px;
  align-items: center;
}

#preco-old {
  text-decoration-line: line-through;
  color: grey;
  text-decoration-color: grey;
}
#preco-new {
  margin-left: 5px;
  font-weight: 900;
  font-size: 18px;
  color: black;
}
#preco-parcelas {
  color: grey;
}

#produtos-divisao {
  margin-top: 60px;
  height: 7px;
  background-color: #f1f1f1;
}
</style>