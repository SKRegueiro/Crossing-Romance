<template>
  <div>
    <div class="outer">
      <UserCard
        v-for="(card, index) in cards"
        :name="card.name"
        :key="card"
        :is-current="index === 0"
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
  props: {
    cards: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.outer {
}
.inner {
  position: absolute;
}
</style>