<template>
  <div>
    <vue-swing v-if="isCurrent" @throwout="$emit('discardCard')" :config="config">
      <div class="userCard">
        <h3>{{card.name}}</h3>
      </div>
    </vue-swing>
  </div>
</template>

<script>
import VueSwing from "vue-swing";
export default {
  name: "UserCard",

  data: function() {
    return {
      config: {
        minThrowOutDistance: 100,
        maxRotation: 50,
        allowedDirections: [VueSwing.Direction.LEFT, VueSwing.Direction.RIGHT]
      }
    };
  },

  components: { "vue-swing": VueSwing },

  methods: {},

  props: {
    card: {
      type: Object,
      required: true
    },
    isCurrent: {
      type: Boolean,
      required: true
    },
    index: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userCard {
  border: 1px solid black;
  margin: 0 auto;
  background-color: aqua;
  width: 300px;
  height: 420px;
  border-radius: 5%;
}
</style>
