<template>
  <div>
    <Nav></Nav>
    <Login v-if="true"></Login>
    <Registration v-if="false"></Registration>
    <CardStack v-if="false"></CardStack>
  </div>
</template>

<script>
import Nav from "./Nav";
import CardStack from "./CardStack";
import Registration from "./login/Registration";
import Login from "./login/Login";

export default {
  data: function() {
    return {};
  },

  methods: {},

  components: {
    Nav,
    CardStack,
    Registration,
    Login
  }
};
</script>

<style>
</style>