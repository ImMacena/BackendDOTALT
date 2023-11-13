const mongoose = require("mongoose");

const { AnswerSchema } = require("./AnswerSchema");

const TaskSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      require: true,
    },
    postDate: {
      type: String,
      require: true,
    },
    expirationDate: {
      type: String,
      require: true,
    },
    answers: {
      type: [AnswerSchema],
      require: false,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", TaskSchema);

module.exports = {
  Task,
  TaskSchema,
};
