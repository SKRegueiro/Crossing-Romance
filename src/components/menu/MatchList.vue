<template>
  <div>
    <ul>
      <li
        class="btn userItem"
        v-for="(user, index) in matches"
        :key="index"
        @click="$emit('chat', user)"
      >
        <img class="userPicture" :src="user.link" />
        <h4 class="name">{{ user.name }}</h4>

        <h6 class="name island">{{ user.island_name }}</h6>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return { selectedUser: {}, matches: [] };
  },
  methods: {
    getUsers(userIds) {
      for (const user of userIds) {
        http
          .post("users/getUser", { id: user.shown_user_id })
          .then((result) => this.matches.push(result.body[0]))
          .catch((err) => console.log(err));
      }
    },
  },

  created() {
    http
      .get("users/matches")
      .then((result) => {
        this.getUsers(result.body);
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.userItem {
  padding: 3px;
  margin: 5px;
  border-radius: 20px;
  border: 3px solid transparent;
  width: 96%;
}
.name {
  margin: 5px;
}
.island {
}

.userPicture {
  margin-left: 40px;
  float: left;
  border-radius: 50%;
  height: 4em;
}

.userItem:hover {
  color: #f7f3e6;
  background-size: 150% 100%;
  border-color: #f5d96aea;
  background-image: repeating-linear-gradient(
    45deg,
    #f5d96aea,
    #f5d96aea 30px,
    rgba(235, 190, 93, 0.9) 30px,
    rgba(235, 190, 93, 0.9) 50px
  );
  -webkit-animation: progress 2s linear infinite;
  -moz-animation: progress 2s linear infinite;
  -ms-animation: progress 2s linear infinite;
  animation: progress 2s linear infinite;
}

@-webkit-keyframes progress {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -75px 0px;
  }
}
@-moz-keyframes progress {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -75px 0px;
  }
}
@-ms-keyframes progress {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -75px 0px;
  }
}
@keyframes progress {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -70px 0px;
  }
}
</style>