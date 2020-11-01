<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <CardStack></CardStack>
    </ion-content>
  </ion-page>
</template>

<script >
import CardStack from "../components/deck/CardStack";

export default {
  name: "Cards",
  components: {
    CardStack,
  },
};
</script>