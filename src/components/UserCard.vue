<template>
  <vue-swing
    @throwoutleft="$emit('discardCard')"
    @throwoutright="$emit('like', card.name)"
    :config="config"
  >
    <div
      class="card shadow p-3 mb-5 bg-white rounded"
      :style="{ backgroundImage: `url(${card.link})` }"
    >
      <div class="card-top"></div>
      <div class="card-body">
        <h5 class="card-title">{{card.name}}</h5>
        <p
          class="card-text"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat praesentium nesciunt</p>
      </div>
    </div>
  </vue-swing>
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 300px;
  height: 420px;
  background-repeat: no-repeat;
  background-position: center;
  padding: 1px;
  overflow: hidden;
}
.card-top {
  height: 80%;
  width: 80%;
}
.card-body {
  text-align: left;
}

h5 {
  font-weight: bold;
  color: #ffffff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-size: 1.8rem;
}
p {
  color: #ffffff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
}
</style>
