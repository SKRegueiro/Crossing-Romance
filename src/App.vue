<template>
  <div id="app">
    <CardStack :cards="stack"></CardStack>
  </div>
</template>

<script>
import CardStack from "./components/CardStack";
export default {
  data: function() {
    return {
      stack: [
        { name: "Sergio" },
        { name: "Andrea" },
        { name: "Alberto" },
        { name: "Dani" }
      ]
    };
  },
  components: {
    CardStack
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
