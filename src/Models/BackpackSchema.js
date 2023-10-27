const mongoose = require("mongoose");

const BackpackSchema = new mongoose.Schema({
  storage: [
    {
      title: {
        type: String,
        require: false,
      },
      src: {
        type: String,
        size: Decimal128,
        require: false,
      },
    },
  ],
  capacity: {
    type: Decimal128,
    require: false,
  },
});

module.exports = mongoose.model("Backpack", BackpackSchema);
