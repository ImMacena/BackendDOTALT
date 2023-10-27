const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  class: String,
  message: [
    {
      user: {
        tpye: String,
        require: false,
      },
      content: {
        tpye: String,
        require: false,
      },
      postDate: {
        tpye: Date,
        require: false,
        default: Date.now,
      },
    },
  ],
});

module.exports = mongoose.model("Chat", ChatSchema);
