const mongoose = require("mongoose");

const { FileSchema } = require("./FileSchema");

const BackpackSchema = new mongoose.Schema(
  {
    student: {
      type: String,
      require: true,
    },
    storage: {
      type: [FileSchema],
      require: false,
    },
    capacity: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Backpack", BackpackSchema);
