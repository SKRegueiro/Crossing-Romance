<template>
  <div>
    <Nav></Nav>
    <CardStack :stack="stack"></CardStack>
  </div>
</template>

<script>
import Nav from "./Nav";
import CardStack from "./CardStack";
export default {
  data: function() {
    return {
      stack: [
        {
          name: "Sergio",
          link:
            "https://pbs.twimg.com/media/EYTdvZEVAAA5POX?format=jpg&name=large"
        },
        {
          name: "Andrea",
          link:
            "https://vignette.wikia.nocookie.net/animalcrossing/images/6/6b/ReddNL.png/revision/latest?cb=20200425083709"
        },
        {
          name: "Alberto",
          link:
            "https://i2.wp.com/www.thumbsticks.com/wp-content/uploads/2020/04/animal-crossing-kk-slider-song-list.jpg?w=1280&ssl=1"
        },
        {
          name: "Dani",
          link:
            "https://vignette.wikia.nocookie.net/animalcrossing/images/0/01/Newhorizonsisabelle.png/revision/latest/scale-to-width-down/527?cb=20200224191140"
        }
      ]
    };
  },
  components: {
    Nav,
    CardStack
  }
};
</script>

<style>
</style>