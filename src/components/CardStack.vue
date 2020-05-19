<template>
  <div class="outer">
    <UserCard
      class="inner"
      v-for="(card, index) in stack"
      :key="index"
      :card="card"
      :is-current="index === 0"
      @discardCard="discard"
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
    return {};
  },

  components: {
    UserCard
  },

  methods: {
    discard() {
      this.stack.pop();
    },

    like(event) {
      console.log("You liked " + event);
      this.discard();
    }
  },

  props: {
    stack: {
      type: Array,
      required: true
    }
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