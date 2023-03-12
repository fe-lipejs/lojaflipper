<template>
<div id="box-container">
  <table id="element-container">
    <tr>
      <td>
        <div id="search-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#A3A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.5 17.5L13.875 13.875" stroke="#A3A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </td>

      <td><input type="text" placeholder="Pesquisar" id="search-input"></td>
    </tr>
  </table>
</div>
</template>

<style scoped>

#box-container{
  margin:auto;
  margin-top:10em;
  width: 90%;
  position:relative;
  height: 42px;
  background-color: #e3e3e3;
  border-radius: 10px;
}
@media (min-width: 640px)
{
#box-container{
   width: 550px;
  }
}
#search-input{
  background: none;
  border: none;
  height:100%;
  width:100%;
  padding:0px -5px;
  border-radius: 15px;
  font-family: Arial, Helvetica, sans-serif;
  
}
#search-input:focus{
  outline: none;
}
#box-container:active{
  background: white;
}
#element-container{
  width: 100%;
  height: 100%;
}
 #search-icon{
  margin-bottom: -4px;
  padding-left: 10px;
  margin-right: -10px;
  cursor: pointer;
}
</style>