const mongoose = require("mongoose");

const { ContentSchema } = require("./ContentSchema");

const ThemeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    teacher: {
      type: String,
      require: false,
    },
    content: {
      type: [ContentSchema],
      require: false,
    },
  },
  { timestamps: true }
);

const Theme = mongoose.model("Theme", ThemeSchema);

module.exports = {
  Theme,
  ThemeSchema,
};
