// Mongoose model: defines what a task looks like in MongoDB
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, trim: true }, // the task description
    done: { type: Boolean, default: false },            // completion status
  },
  { timestamps: true } // automatically adds createdAt and updatedAt
);

module.exports = mongoose.model('Task', taskSchema);
