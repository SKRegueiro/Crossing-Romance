<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense"> </ion-header>
      <CardStack></CardStack>
    </ion-content>
  </ion-page>
</template>

<script >
import { IonPage, IonHeader, IonContent } from "@ionic/vue";
import CardStack from "../components/deck/CardStack";

export default {
  name: "Tab1",
  components: {
    IonHeader,
    CardStack,
    IonContent,
    IonPage,
  },
};
</script>