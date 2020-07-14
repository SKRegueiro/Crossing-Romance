<template>
  <div>
    <AppNav @menu="menu = !menu"></AppNav>
    <Menu v-if="menu"></Menu>
    <CardStack v-if="true"></CardStack>
  </div>
</template>

<script>
import CardStack from "./CardStack";
import AppNav from "./Nav";
import Menu from "./Menu";

export default {
  data: function() {
    return { menu: false };
  },
  components: {
    AppNav,
    CardStack,
    Menu
  },
  created() {
    this.$http
      .get("users/current")
      .then(result =>
        this.$socket.emit("join", { senderEmail: result.body[0].email })
      )
      .catch(err => console.log(err));
  }
};
</script>

<style>
</style>