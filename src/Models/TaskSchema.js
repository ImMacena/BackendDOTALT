const mongoose = require("mongoose");

const { ClassSchema } = require("./ClassSchema");

const TaskSchema = new mongoose.Schema({
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
  Class: {
    type: String,
    require: true,
  },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = {
  Task,
  TaskSchema,
};
