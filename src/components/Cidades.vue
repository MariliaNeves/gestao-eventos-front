<template>
  <div id="app">    
    <ul>
      <li v-for="item in cidadeList" :key="item.nome">
        {{ item.id }}
        {{ item.nome }}
        {{ item.estado }}
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
