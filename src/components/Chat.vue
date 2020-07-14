<template>
  <div class="chatContainer">
    <nav class="navbar">
      <button class="btn" @click="$emit('back')">Back</button>
      <p class="h5 text-center">{{targetUser.name}}</p>
    </nav>
    <div class="messages">
      <ul ref="ul">
        <li
          v-for="(message, index) in convesation"
          :class="sendedOrRecieved(message.recipient_email)"
          :key="index"
        >{{message.content}}</li>
      </ul>
    </div>

    <form class="input-group" action v-on:submit.prevent="send(typedMessage)">
      <input
        class="form-control col-8"
        v-model="typedMessage"
        placeholder="Say something"
        autocomplete="off"
      />
      <button class="btn btn-outline-secondary col-4">Send</button>
    </form>
  </div>
</template>



<script>
export default {
  data() {
    return {
      isConnected: false,
      convesation: [],
      typedMessage: ""
    };
  },

  methods: {
    send(message) {
      message = message.trim();
      if (message != "") {
        const msgObject = {
          content: message,
          recipient_email: this.targetUser.email,
          date: new Date().toDateString() + new Date().toTimeString()
        };
        this.convesation.push(msgObject);
        this.$socket.emit("send", msgObject);
        this.$refs.ul.lastChild.scrollIntoView();
        this.typedMessage = "";
        console.log(this.convesation);
      }
    },

    sendedOrRecieved(recipient_email) {
      return recipient_email == this.targetUser.email ? "sent" : "recieved";
    }
  },

  sockets: {
    connected: function() {},
    new_msg(data) {
      this.convesation.push(data);
    }
  },

  props: {
    targetUser: {
      type: Object,
      required: true
    }
  },

  created() {
    this.$http
      .post("chat/getChat", { recipientEmail: this.targetUser.email })
      .then(result => {
        result.body.forEach(message => {
          this.convesation.push(message);
        });
      })
      .catch(err => console.log(err))
      .finally(() => {
        this.$refs.ul.lastChild.scrollIntoView();
      });
  }
};
</script>



<style  scoped>
.chatContainer {
  position: relative;
  height: 100%;

  overflow-y: hidden;
}
.messages {
  position: absolute;
  height: 80%;
  width: 100%;
  list-style-position: inside;
  overflow-y: scroll;
  margin: 10px 0px;
}
::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
.input-group {
  position: absolute;
  width: 100%;
  left: 0px;
  bottom: 0px;
  margin: 0px 0px;
  margin-top: 100px;
}

.sent {
  padding: 1px;
  color: peru;
  background: content-box;
  border-radius: 5px;
  background-color: navajowhite;
  text-align: right;
}

.recieved {
  padding: 1px;
  color: burlywood;
  background: content-box;
  border-radius: 5px;
  background-color: navajowhite;
  text-align: left;
}
</style>