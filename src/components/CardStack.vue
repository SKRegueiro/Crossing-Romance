<template>
  <div class="outer">
    <UserCard
      class="inner"
      v-for="(card, index) in stack"
      :key="index"
      :card="card"
      :is-current="index === 0"
      @dislike="discard"
      @like="like"
    ></UserCard>
    <div v-if="stack.length === 0">
      <h4>Oops, looks like nobody is crossing</h4>
    </div>
  </div>
</template>

<script>
import UserCard from "./UserCard";

export default {
  data: function() {
    return { stack: [], likedUser: [] };
  },

  components: {
    UserCard
  },

  methods: {
    discard(id) {
      this.storeLiked("disliked", id);
      this.stack.pop();
      this.getUsers(1);
    },

    like(id) {
      this.storeLiked("liked", id);
      this.discard();
      this.getUsers(1);
    },

    getUsers(number) {
      this.$http
        .post("users", { limit: number })
        .then(result => {
          result.body.forEach(user => {
            this.stack.push(user);
          });
        })
        .catch(err => console.log(err));
    },

    storeLiked(result, number) {
      let idObject = {
        currentId: 1,
        likedId: number,
        action: result
      };
      this.$http
        .post("users/like", idObject)
        .then(result => {
          console.log(result);
        })
        .catch(err => console.log(err));
    }
  },

  beforeMount() {
    this.getUsers(3);
  }
};
</script>

<style scoped>
.outer {
  width: 100%;
  height: 100%;
  max-height: 1000px;
  position: relative;
  text-align: center;
}

.inner {
  position: absolute;
  top: 20%;
  left: 20%;
  padding: 3px;
}
</style>