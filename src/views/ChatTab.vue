<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <Chat />
    </ion-content>
  </ion-page>
</template>

<script >
import Chat from "../components/menu/Chat";

export default {
  name: "Tab2",
  components: {
    Chat,
  },
};
</script>