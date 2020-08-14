<template>
  <div class="chatContainer">
    <nav class="navbar">
      <button class="btn" @click="$emit('back')">&#60;</button>
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
      <input class="input" v-model="typedMessage" placeholder="Say something" autocomplete="off" />
      <button class="sendBtn">
        <i class="fas fa-comment-dots"></i>
      </button>
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
.navbar {
  position: relative;
  background-color: #88dac1;
  border-radius: 25px 25px 0px 0px;
  width: 100%;
}
.chatContainer {
  position: relative;
  height: 100%;

  overflow-y: hidden;
}
.messages {
  padding: 5px;
  position: relative;
  height: 80%;
  width: 100%;
  list-style-position: inside;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}

.sent {
  padding: 2px;
  color: white;

  background: content-box;
  border-radius: 5px;
  background-color: #c0e9dc;
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

.input-group {
  margin-top: 10px;
  width: 90%;
  position: absolute;
  right: 10px;
  bottom: 5px;

  border-radius: 20px;
  text-align: left;
}

.input {
  border: none;
  border-radius: 20px;
  width: 85%;
  border: 3px solid transparent;
  padding: 8px;
}

textarea:focus,
input:focus {
  outline: none;
  border: 3px solid #f5d96ae8;
}

.sendBtn {
  right: 10px;
  background-color: #88dac1;
  width: 15%;
  border-radius: 50%;
  border: 1px solid transparent;
}

.sendBtn:active,
.sendBtn:focus {
  outline: none;
  border: none;
}
</style>