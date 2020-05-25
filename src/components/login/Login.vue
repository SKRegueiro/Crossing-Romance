<template>
  <div class="card">
    <button @click="signInGoogle" class="btn btn-primary">Sign in with Google</button>
    <span class>or</span>
    <button @click="signInFacebook" class="btn btn-primary">Sign in with Facebook</button>
    <span class>or</span>
    <button @click="signInTwitter" class="btn btn-primary">Sign in with Twitter</button>

    <a href="#">Forgot password?</a>
    <a href="#">No account? Create one</a>
  </div>
</template>
    
<script>
export default {
  methods: {
    signInGoogle() {
      window.open("http://localhost:3000/auth/google");
    },
    signInFacebook() {
      window.open("http://localhost:3000/auth/facebook");
    },
    signInTwitter() {
      window.open("http://localhost:3000/auth/twitter");
    }
  }
};
</script>

<style scoped>
.card {
  padding: 36px 10px;
  width: 100%;
  max-width: 400px;
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
</style>