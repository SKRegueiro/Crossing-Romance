<template>
  <div class="card">
    <h3>Sign up and start meeting new people!</h3>
    <button @click="signIn('/google')" class="btn">Sign in with Google</button>
    <span class>or</span>
    <button @click="signIn('/facebook')" class="btn">Sign in with Facebook</button>
    <span class>or</span>
    <button @click="signIn('/twitter')" class="btn">Sign in with Twitter</button>
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      baseUrl: "http://localhost:3000/auth"
    };
  },
  methods: {
    signIn(provider) {
      window.open(this.baseUrl + provider, "_self");
    }
  }
};
</script>

<style scoped>
.card {
  padding: 36px 10px;
  height: 500px;
  width: 100%;
  max-width: 800px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
span {
  text-align: center;
}
input {
  border-radius: 5px;
  margin: 5px;
}
.btn {
  border: 2px solid black;
}
</style>