<template>
  <div>
    <a :href="href">
      <div class="buttonPadrao">
        <div>{{ texto }}</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    texto: String,
    href:String
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
a{
    text-decoration: none;
    color: #fff;
}
.buttonPadrao {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  height: 66px;
  background: #000000;
  border-radius: 10px;
}
.buttonPadrao div {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #ffffff;
}
</style>