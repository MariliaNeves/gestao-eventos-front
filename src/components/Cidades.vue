<template>
  <div id="app"> 
    <ul class="div-table">
      <div class="div-table-col header"> id </div>
      <div class="div-table-col header"> Cidade </div>
      <div class="div-table-col header"> Estado </div>
      <li class="div-table-row" v-for="item in cidadeList" :key="item.nome">
        <div class="div-table-col"> {{ item.id }}</div>
        <div class="div-table-col"> {{ item.nome }}</div>
        <div class="div-table-col">{{ item.estado }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cidadeList: [],
    };
  },
   mounted: function () {
    this.reverseMessage();
  },
  methods: {
    async reverseMessage() {
      const gestao = "http://127.0.0.1:8000/cidade/";
      const response = await fetch(gestao);
      this.cidadeList = await response.json();
    },
  },
};

 
</script>

<style>


.div-table {
  display: table;         
  width: auto;         
  background-color: #eee;         
  border: 1px solid #666666;         
  border-spacing: 5px; /* cellspacing:poor IE support for  this */
  padding-left: 0px;
}

.header {
  font-weight: bold;
}

.div-table-row {
  display: table-row;
  width: auto;
  clear: both;
}
.div-table-col {
  float: left; /* fix for  buggy browsers */
  display: table-column;         
  width: 200px;         
  background-color: #ccc;  
}

</style>
