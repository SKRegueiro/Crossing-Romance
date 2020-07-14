<template>
  <Nav class="navbar navbar-dark bg-primary">
    <li class="btn btn-primary" @click="logout">Log out</li>
    <li @click="$emit('menu')" class="btn btn-primary">{{currentUser.name}}</li>
  </Nav>
</template>

<script>
export default {
  data: function() {
    return {
      currentUser: {}
    };
  },
  methods: {
    logout() {
      this.$http
        .post("logout")
        .then(result => console.log("result", result))
        .catch(err => {
          if (err.status == 301) {
            this.$router.push("/login");
          }
        });
    }
  },

  created() {
    this.$http
      .get("users/current")
      .then(result => {
        this.currentUser = result.body[0];
      })
      .catch(err => {
        if (err.status == 403) this.$router.push("/login");
      });
  }
};
</script>

<style>
nav {
  background-color: #8aced9;
}
</style>