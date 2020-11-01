<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <Profile />
    </ion-content>
  </ion-page>
</template>

<script  >
import Profile from "../components/menu/Profile";
export default {
  name: "Profile",
  components: {
    Profile,
  },
};
</script>