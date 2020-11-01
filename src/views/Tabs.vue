<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/cards">
          <ion-icon class="rotated" :icon="albums" />
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/chat">
          <ion-icon :icon="chatbubbles" />
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/profile">
          <ion-icon :icon="personCircle" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script  >
import { IonTabBar, IonTabButton, IonTabs, IonIcon } from "@ionic/vue";
import { personCircle, chatbubbles, albums } from "ionicons/icons";

export default {
  name: "Tabs",
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon },
  setup() {
    return {
      personCircle,
      chatbubbles,
      albums,
    };
  },
};
</script>
<style scoped>
.rotated {
  transform: rotate(90deg);
}
</style>