<template>
  <!-- Parte de Cima -->
  <div id="categoria-title">ROUPAS MASCULINAS</div>
  <div id="results-container">
    <div>Resultado(27)</div>
    <div id="search-filter">
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
  <!-- BODY -->
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
</template>

<style scoped>
#cards-produtos{
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
import CardProdutos from "@/components/Views/Categoria/CardProdutos.vue";
import Paginacao from "@/components/Views/Categoria/PaginacaoPadrao.vue";
export default {
  name: 'Categoria',
  components: {
    CardProdutos,
    Paginacao,
  },
};
</script>