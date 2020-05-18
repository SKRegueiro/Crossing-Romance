<template>
  <div>
    <div class="outer">
      <UserCard
        v-for="(card, index) in stack"
        :key="index"
        :card="card"
        :index="index"
        :is-current="index === 0"
        @discardCard="discard()"
      ></UserCard>
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
      this.stack.shift();
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
  position: relative;
}
.inner {
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>