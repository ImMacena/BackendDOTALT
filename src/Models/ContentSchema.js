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
    teacher: {
      type: String,
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
