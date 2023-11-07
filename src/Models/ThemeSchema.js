const mongoose = require("mongoose");

const ThemeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    teacher: {
      type: [UserSchema],
      require: false,
    },
    content: {
      type: [contentSchema],
      require: false,
    },
  },
  { timestamps: true }
);

const Theme = mongoose.model("Theme", ThemeSchema);

module.exports = { Theme, ThemeSchema };
