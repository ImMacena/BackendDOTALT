const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    src: {
      type: String,
      require: true,
    },
    size: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const Content = mongoose.model("Content", ContentSchema);

module.exports = {
  Content,
  ContentSchema,
};
