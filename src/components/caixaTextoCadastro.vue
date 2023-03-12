<template>
  <div>
    <input :class="classInputName" type="text" :placeholder="placeholder"/>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    placeholder: String,
    classInputName: String
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
div{
    margin: 5px;
    margin-bottom: 17px;
}
div input:focus {
    outline: none;
    text-indent: 7px;
}
div input {
  /* box-sizing: border-box; */
  text-indent: 7px;
  display: flex;
  width: 100%;
  height: 43px;
  border: 1px solid #968d8d;
  border-radius: 10px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #000;
}
</style>