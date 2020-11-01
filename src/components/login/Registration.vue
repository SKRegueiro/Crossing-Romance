<template>
  <div class="card">
    <form class="form-group" action="get">
      <div class="row">
        <div class="col-6">
          <label>Name</label>
          <input
            class="form-control"
            type="text"
            name="name"
            v-model.lazy.trim="userInfo.name"
          />
        </div>
        <div class="col-6">
          <label for>First Name</label>
          <input
            class="form-control"
            type="text"
            name="firstName"
            v-model.lazy.trim="userInfo.firstName"
          />
        </div>
      </div>
      <div class="row mt-3">
        <label class="col-3">Gender:</label>

        <input
          type="radio"
          class="form-check"
          v-model="userInfo.gender"
          value="m"
        />
        <label class="form-check-label ml">Male</label>

        <input
          type="radio"
          class="form-check ml-3"
          v-model="userInfo.gender"
          value="f"
        />
        <label class="form-check-label">Female</label>
        <br />
      </div>
      <label class="form-control-label">Console Name</label>
      <input
        type="text"
        name="consoleName"
        class="form-control"
        v-model.lazy="userInfo.consoleName"
      />
      <label for>Island Name</label>
      <input
        type="text"
        name="islandName"
        class="form-control"
        v-model.lazy="userInfo.islandName"
      />

      <label class="form-control-label">Native fruit</label>
      <select name="fruit" class="form-control" v-model="userInfo.fruit">
        <option selected disabled>Select fruit</option>
        <option value="orange">Orange</option>
        <option value="pear">Pear</option>
        <option value="apple">Apple</option>
        <option value="peach">Peach</option>
        <option value="cherry">Cherry</option>
      </select>

      <label for>Email</label>
      <input
        class="form-control"
        type="email"
        name="email"
        v-model.lazy="userInfo.email"
      />

      <label for>Password</label>
      <input
        class="form-control"
        type="password"
        name="password"
        v-model.lazy="userInfo.password"
      />
      <label for>Repeat password</label>
      <input class="form-control" type="password" name="repeatPassword" />

      <button class="btn btn-primary mt-3" @click.prevent="submit()">
        submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        name: "",
        firstName: "",
        gender: "",
        consoleName: "",
        email: "",
        islandName: "",
        fruit: "",
        password: "",
      },
    };
  },

  methods: {
    submit() {
      http
        .post("registerProfile", this.userInfo)
        .then((response) => {
          if (response.ok) alert("Success!");
          else alert("Something went wrong!");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.card {
  padding: 40px 15px;
  width: 100%;
  max-width: 600px;
  max-height: fit-content;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>