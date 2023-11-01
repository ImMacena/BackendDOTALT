const mongoose = require("mongoose");

const UserSchema = require("./UserSchema");

const ClassSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    teacher: {
      type: [UserSchema],
      require: false,
    },
    students: {
      type: [UserSchema],
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
