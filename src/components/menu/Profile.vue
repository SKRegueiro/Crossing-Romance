<template>
  <div>
    <button class="btn" @click="logout">Log out</button>
  </div>
</template>

<script>
export default {
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
  }
};
</script>

<style>
</style>