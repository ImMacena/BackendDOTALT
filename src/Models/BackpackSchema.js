const mongoose = require("mongoose");

const UserSchema = require("./UserSchema");

const BackpackSchema = new mongoose.Schema(
  {
    student: {
      type: [UserSchema],
      require: true,
    },
    storage: [
      {
        title: {
          type: String,
          require: false,
        },
        src: {
          type: String,
          size: Double,
          require: false,
        },
      },
    ],
    capacity: {
      type: Decimal128,
      require: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Backpack", BackpackSchema);
