<template>
  <div class="wrapper">
    <Menu v-if="menu" @loadMain="changeComponent">
      <!-- Pass the menu subcomponents dinamically via slots, controlling all components from Home.vue -->
      <!-- <slot></slot> -->
    </Menu>
    <div class="main">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script>
import CardStack from "./deck/CardStack";
import Http from "../helpers/http";
import Menu from "./menu/Menu";

export default {
  data: function () {
    return { currentUser: {}, currentComponent: "CardStack", menu: true };
  },
  components: {
    CardStack,
    Menu,
  },
  methods: {
    changeComponent(component) {
      console.log(component);
    },
    joinSocket() {
      http
        .get("users/current")
        .then((result) =>
          this.$socket.emit("join", { senderEmail: result.body[0].email })
        )
        .catch((err) => console.log(err));
    },
    getCurrentUser() {
      http
        .get("users/current")
        .then((result) => {
          this.currentUser = result.body[0];
        })
        .catch((err) => {
          console.log(err);
          if (err.status == 403) {
            this.$router.push("/login");
          }
        });
    },
  },
  created() {
    this.getCurrentUser();
    this.joinSocket();
  },
};
</script>

<style scoped>
.wrapper {
  background-image: url("https://www.toptal.com/designers/subtlepatterns/patterns/seigaiha.png");
  padding: 20px;
}
.disclaimer {
  position: absolute;
  z-index: 1000;
}
.main {
  background-color: #f0e5cd98;
  border-radius: 25px;
  align-content: center;
  position: flex;
  width: 69%;
  height: 100%;
}

/* Inspiration for the ticket design:
https://dribbble.com/shots/10488910-Animal-Crossing-New-Horizons-Boarding-Pass
https://www.reddit.com/r/ac_newhorizons/comments/f9la0p/took_my_turn_creating_a_getaway_package_boarding/

Dodo Airlines logo:
https://www.reddit.com/r/ac_newhorizons/comments/f8gq5c/it_seems_a_lot_of_the_dodo_airlines_logos_weve/

Leaf background:
https://www.deviantart.com/jotaauvei/art/Nook-Inc-Wallpaper-Collection-827180686

ACNH logo:
https://www.acnewleaf.de/2019/06/14/alle-infos-zu-ac-new-horizons/
 */
</style>