<template>
  <vue-swing
    @throwoutleft="$emit('dislike', card.id)"
    @throwoutright="$emit('like', card.id)"
    :config="config"
  >
    <div class="card shadow bg-white rounded" :style="{ backgroundImage: `url(${card.link})` }">
      <div class="card-top"></div>
      <div class="cardBody">
        <div class="row">
          <h5 class="card-title col-6">{{card.name}}</h5>
          <i></i>
        </div>
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

<style scoped>
.card {
  border: 1px solid black;
  width: 300px;
  height: 420px;
  background-repeat: no-repeat;
  background-position: 50% 74.0741%;
  background-size: auto 111.266%;

  overflow: hidden;
}
.card-top {
  height: 70%;
  border: 1px solid black;
}
.cardBody {
  border: 1px solid black;
  text-align: left;
  padding: 4px;
}

h5 {
  font-weight: bolder;
  color: #ffffff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-size: 1.8rem;
}
p {
  color: #ffffff;
  font-weight: bold;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
}
.orange {
  position: absolute;
  height: 50px;
  width: 50px;
  background-position: 50% 74.0741%;
  background-image: url("../assets/orange.png");
}
</style>
