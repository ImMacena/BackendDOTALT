const mongoose = require("mongoose");

const { AnswerSchema } = require("./AnswerSchema");

const TaskSchema = new mongoose.Schema(
  {
    teacher: {
      type: String,
      require: true,
    },
    question: {
      type: String,
      require: true,
    },
    postDate: {
      type: Date,
      require: true,
      default: Date.now,
    },
    expirationDate: {
      type: Date,
      require: true,
    },
    class: {
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
