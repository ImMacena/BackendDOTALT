const mongoose = require("mongoose");

const UserSchema = require("./UserSchema");
const { ThemeSchema } = require("./ThemeSchema");

const ClassSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    students: {
      type: [UserSchema],
      require: false,
    },
    themes: {
      type: [ThemeSchema],
      require: false,
    },
  },
  { timestamps: true }
);

const Class = mongoose.model("Class", ClassSchema);

module.exports = {
  Class,
  ClassSchema,
};
