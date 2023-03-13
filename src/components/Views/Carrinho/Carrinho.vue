<template>
  <div>
    <br /><br /><br />
    <h3>Carrinho</h3>
    <ProdutoCarrinho/>
    <ProdutoCarrinho/>
  </div>
</template>

<script>
import ProdutoCarrinho from "@/components/Views/Carrinho/ProdutoCarrinho.vue"
export default {
  name: "Carrinho",
  components:{
    ProdutoCarrinho
  },

  data() {
    return {
      nome: "Carrinho",
    };
  },
};
</script>