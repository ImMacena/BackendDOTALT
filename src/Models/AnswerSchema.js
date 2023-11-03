const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema(
  {
    student: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    mention: {
      type: Number,
      require: true,
    },
  },
  { timeseries: true }
);

const Answer = mongoose.model("Answer", AnswerSchema);

module.exports = {
  Answer,
  AnswerSchema,
};
