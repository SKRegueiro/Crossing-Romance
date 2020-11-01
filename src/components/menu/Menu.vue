 <template>
  <div class="menu">
    <nav v-if="nav" class="navbar d-flex justify-content-center">
      <a class="navBtn" @click="changeComponent('Matches')">
        <i class="fas fa-heart fa-lg active"></i>
      </a>
      <a class="navBtn" href="#" @click="changeComponent('Chat')">
        <i class="fas fa-comment fa-lg"></i>
      </a>
      <a class="navBtn" href="#" @click="changeComponent('Profile')">
        <i class="fas fa-user fa-lg"></i>
      </a>
    </nav>
    <div class="menuContainer">
      <component
        @chat="chat"
        @back="changeComponent('Matches')"
        :targetUser="selectedUser"
        :is="currentComponent"
      ></component>
    </div>
  </div>
</template>

<script>
import Chat from "./Chat";
import Matches from "./MatchList";
import Profile from "./Profile";

export default {
  data: function () {
    return {
      users: true,
      currentComponent: "Matches",
      nav: true,
      chatVisible: false,
    };
  },
  methods: {
    chat(user) {
      this.changeComponent("Chat");
      this.selectedUser = user;
    },
    changeComponent(component) {
      this.currentComponent = component;
    },
    getLastMessage(index) {
      // not working
      http
        .post("chat/lastMessage", {
          recipientEmail: this.matches[index].email,
        })
        .then((result) => {
          this.matches[index].lastMessage = result.body[0].content;
        });
    },
  },
  components: {
    Chat,
    Matches,
    Profile,
  },
};
</script>

<style scoped>
.menu {
  position: flex;
  float: right;
  height: 100%;
  width: 30%;
  /* box-shadow: 4px 10px 79px -25px rgba(0, 0, 0, 0.69); */

  background: #f5d96a;
  border-radius: 35px;
}

.menuContainer {
  height: 85%;
  width: 95%;
  margin: 10px;
  margin-top: 30px;
  border-radius: 25px;
  background-color: #fcf9f0;
}

.navbar {
  height: 5%;
  width: 100%;
  margin: 10px;
  background-color: transparent;
}
.navBtn {
  width: 3em;
  height: 3em;
  background-color: #fffdf7;
  border-radius: 50%;
  position: relative;
  margin: -5px -5px 5px -5px;
}

i {
  position: absolute;
  color: #f5edd7;
  top: 38%;
  left: 29%;
}
.active {
  width: 4em;
  height: 4em;
  color: burlywood;
}
.icon {
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>