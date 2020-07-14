 <template>
  <div class="menu">
    <div v-if="users">
      <ul v-for="(user, index) in matches" :key="index">
        <li class="btn" @click="chat(user)">{{user.name}}</li>
      </ul>
    </div>
    <Chat @back="switchComponents" :targetUser="selectedUser" v-if="chatVisible"></Chat>
  </div>
</template>

<script>
import Chat from "./Chat";
export default {
  data: function() {
    return { users: true, selectedUser: {}, chatVisible: false, matches: [] };
  },
  methods: {
    getUsers(userIds) {
      for (const user of userIds) {
        this.$http
          .post("users/getUser", { id: user.shown_user_id })
          .then(result => {
            this.matches.push(result.body[0]);
          })
          .catch(err => console.log(err));
      }
    },
    chat(user) {
      this.switchComponents();
      this.selectedUser = user;
    },
    switchComponents() {
      this.users = !this.users;
      this.chatVisible = !this.chatVisible;
      console.log(this.users, this.chatVisible);
    }
  },
  components: {
    Chat
  },
  created() {
    this.$http
      .get("users/matches")
      .then(result => {
        this.getUsers(result.body);
      })
      .catch(err => console.log(err));
  }
};
</script>

<style>
.menu {
  border: 1px solid black;
  display: block;
  float: right;
  height: 91vh;
  width: 25%;
}
</style>