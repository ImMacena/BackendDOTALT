const mongoose = require("mongoose");

const UserSchema = require("./UserSchema");

const ClassSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    teacher: {
      tpye: [UserSchema],
      require: true,
    },
    students: [
      {
        student: String,
        email: String,
      },
    ],
  },
  { timestamps: true }
);

const Class = mongoose.model("Class", ClassSchema);

module.exports = {
  Class,
  ClassSchema,
};
