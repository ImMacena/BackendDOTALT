const mongoose = require("mongoose");

const { ClassSchema } = require("./ClassSchema");
const { TaskSchema } = require("./TaskSchema");

const InstitutionSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  docs: [
    {
      type: String,
      doc: String,
      require: true,
    },
  ],
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true,
  },
  class: {
    type: [ClassSchema],
    require: false,
  },
});

const Institution = mongoose.model("Institution", InstitutionSchema);

module.exports = {
  Institution,
  InstitutionSchema,
};
