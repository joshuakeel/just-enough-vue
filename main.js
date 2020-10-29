const app = Vue.createApp({
  data() {
    return {
      currentUser: "Josh",
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
      this.chats.push({ user: this.currentUser, message });
      this.message = null;
    },
  },
});
