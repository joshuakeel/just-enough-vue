app.component("chat", {
  props: {
    user: String,
  },
  template:
    /*html*/
    `<ol>
      <li v-for="chat in chats">
        <strong>{{ chat.user }}</strong>: {{ chat.message }}
      </li>
    </ol>

    <input v-model="message" type="text" />

    <button
      @click="sendMessage(message)"
      :disabled="!message"
      class="button"
    >
      Send Message
    </button>`,
  data() {
    return {
      message: null,
      chats: [
        { user: "Josh", message: "Hello, world! How are you today?" },
        {
          user: "Frank",
          message:
            "Hi Josh, do you have a minute? I have some questions about the TPS reports you submitted.",
        },
      ],
    };
  },
  methods: {
    sendMessage(message) {
      this.chats.push({ user: this.user, message });
      this.message = null;
    },
  },
});
