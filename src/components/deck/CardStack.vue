<template>
  <div class="outer">
    <h4 v-if="stack.length === 0">Oops, looks like nobody is crossing</h4>
    <UserCard
      class="inner"
      v-for="(user, index) in stack"
      :key="index"
      :user="user"
      :is-current="index === 0"
      @dislike="dislike"
      @like="like"
    ></UserCard>
  </div>
</template>

<script>
import Http from "../../helpers/http";
import UserCard from "./UserCard";

export default {
  data: function () {
    return { stack: [] };
  },

  components: {
    UserCard,
  },

  methods: {
    discard() {
      this.stack.pop();
      if (this.stack.length < 3) this.getUsers(9);
    },

    like(id) {
      this.storeSwipe("liked", id);
      this.likedBack(id);
      this.discard();
    },

    dislike(id) {
      this.storeSwipe("disliked", id);
      this.discard();
    },

    getUsers(number) {
      Http.post("users", { limit: number })
        .then((result) => {
          result.body.forEach((newUser) => {
            if (!this.stack.includes(newUser)) this.stack.unshift(newUser);
          });
          this.stack = this.stack.filter((item, pos) => {
            return this.stack.indexOf(item) == pos;
          });
        })
        .catch((err) => console.log(err));
    },

    storeSwipe(action, userId) {
      let idObject = {
        likedId: userId,
        action: action,
      };
      Http.post("users/like", idObject)
        .then(() => console.log("liked"))
        .catch((err) => console.log(err));
    },

    likedBack(userId) {
      Http.post("users/likesBack", { likedId: userId })
        .then((result) => {
          if (result.body[0] === undefined) console.log("no result yet");
          else if (result.body[0].action) this.notifyMatch();
        })
        .catch((err) => console.log(err));
    },

    notifyMatch() {
      alert("its a match!");
    },
  },

  beforeMount() {
    this.getUsers(10);
  },
};
</script>

<style scoped>
.outer {
  position: relative;
  width: auto;
  height: 100%;
  text-align: center;
  overflow: hidden;
}

h4 {
  position: relative;
}

.inner {
  position: absolute;
  top: 15%;
  left: 30%;
  padding: 3px;
}
</style>