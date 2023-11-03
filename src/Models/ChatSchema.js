const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema(
  {
    class: String,
    message: [
      {
        user: {
          tpye: String,
          require: true,
        },
        content: {
          tpye: String,
          require: true,
        },
        fixed: {
          type: Boolean,
          require: false,
        },
        postDate: {
          tpye: Date,
          require: true,
          default: Date.now,
        },
      },
    ],
  },
  { timeseries: true }
);

module.exports = mongoose.model("Chat", ChatSchema);
