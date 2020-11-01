<template>
  <div>
    <button class="btn" @click="logout">Log out</button>
  </div>
</template>

<script>
import http from "../../helpers/http";
export default {
  methods: {
    logout() {
      http
        .post("logout")
        .then((result) => console.log("result", result))
        .catch((err) => {
          if (err.status == 301) {
            this.$router.push("/login");
          }
        });
    },
  },
};
</script>

<style>
</style>