const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  src: {
    type: String,
    require: true,
  },
  size: {
    type: Number,
    require: true,
  },
});

const File = mongoose.model("File", FileSchema);

module.exports = {
  File,
  FileSchema,
};
