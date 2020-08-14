<template>
  <div id="app">
    <router-view class="appContent"></router-view>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style>
#app {
  position: relative;
  height: 100%;
  /* should be fink heavy */
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.appContent {
  position: relative;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}
</style>
