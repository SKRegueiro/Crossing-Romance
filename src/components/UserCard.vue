<template>
  <div>
    <div
      class="card"
      :class="{isCurrent: isCurrent}"
      :style="{ transform: transformString }"
      ref="interactElement"
    >
      <h3>{{name}}</h3>
    </div>
  </div>
</template>

<script>
import interact from "interact.js";
export default {
  name: "UserCard",
  data() {
    return {
      interactPosition: {
        x: 0,
        y: 0
      }
    };
  },
  computed: {
    transformString() {
      const { x, y } = this.interactPosition;
      return `translate3D(${x}px, ${y}px, 0`;
    }
  },
  props: {
    name,
    card: {
      type: Object,
      required: true
    },
    isCurrent: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    interactSetPosition(coordinates) {
      const { x = 0, y = 0 } = coordinates;
      this.interactPosition = { x, y };
    },
    reserCardPosition() {
      this.interactSetPosition({ x: 0, y: 0 });
    }
  },
  mounted() {
    const element = this.$refs.interactElement;
    interact(element).draggable({
      onmove: event => {
        const x = this.interactPosition.x + event.dx;
        const y = this.interactPosition.y + event.dy;
        this.interactPosition({ x, y });
      },
      onend: () => {
        this.reserCardPosition();
      }
    });
  },
  beforeDestroy() {
    interact(this.$refs.interactElement).unset();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  border: 1px solid black;
  margin: 0 auto;
  background-color: aqua;
  width: 300px;
  height: 420px;
  border-radius: 5%;
}
</style>
