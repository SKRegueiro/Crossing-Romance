<template>
  <div class="card">
    <button class="btn btn-primary">Sign in with google</button>
    <span class>or</span>
    <input class="input" type="email" name="email" placeholder="Email" />
    <input class="input" type="password" name="password" placeholder="Password" />
    <a href="#">Forgot password?</a>
    <a href="#">No account? Create one</a>
  </div>
</template>
    
<script>
export default {};
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