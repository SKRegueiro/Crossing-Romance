<template>
  <div class="wrapper">
    <div class="card">
      <h2 class="card-title">Sign up and start crossing with new people!</h2>
      <div class="card-body">
        <button @click="signIn('/google')" class="btn">Sign in with Google</button>
        <span>or</span>
        <button @click="signIn('/facebook')" class="btn">Sign in with Facebook</button>
        <span>or</span>
        <button @click="signIn('/twitter')" class="btn">Sign in with Twitter</button>
      </div>
      <!-- <img src="..//../assets/characters/airlines-scene-2x.png" alt /> -->
    </div>
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


// Needs an icon/character/apptitle to look more alive
<style scoped>
.wrapper {
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.4) 100%
    ),
    url("../../assets/acbackground/newhorizons_wallpaper_Isabelle.png");
}
.card {
  opacity: 1;
  background: #f7f3e6;
  padding: 60px;
  height: fit-content;
  width: fit-content;
  border: 0px;
  position: relative;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 30px;
  box-shadow: -1px 15px 30px -12px #384e53;
}
span {
  text-align: center;
  color: #384e53;
}
img {
  height: 200px;
  width: 200px;
}

.card-title {
  color: #384e53;
}
.btn {
  background-color: #48a9a6;
  font-size: large;
  color: #f7f3e6;
  border: 2px solid transparent;
}

.btn:hover {
  color: #f7f3e6;
  background-size: 150% 100%;
  border-color: #48a9a6;
  background-image: repeating-linear-gradient(
    45deg,
    #48a9a6,
    #48a9a6 30px,
    #3f87a6 30px,
    #3f87a6 50px
  );
  -webkit-animation: progress 2s linear infinite;
  -moz-animation: progress 2s linear infinite;
  -ms-animation: progress 2s linear infinite;
  animation: progress 2s linear infinite;
}

@-webkit-keyframes progress {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -75px 0px;
  }
}
@-moz-keyframes progress {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -75px 0px;
  }
}
@-ms-keyframes progress {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -75px 0px;
  }
}
@keyframes progress {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -70px 0px;
  }
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>