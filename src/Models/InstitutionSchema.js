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
  class: {
    type: [ClassSchema],
    require: false,
  },
  task: {
    type: [TaskSchema],
    require: false,
  },
});

const Institution = mongoose.model("Institution", InstitutionSchema);

module.exports = {
  Institution,
  InstitutionSchema,
};
