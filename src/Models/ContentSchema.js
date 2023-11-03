const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema(
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

const Content = mongoose.model("Content", contentSchema);

module.exports = {
  Content,
  contentSchema,
};
