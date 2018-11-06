import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tasksSchema = new Schema({
  name: {
    type: String,
    required: 'Task name is required'
  },
  createdDate: {
    type: Date,
    default: Date.now()
  },
  description: {
    type: String,
    required: 'Task description is required'
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const tasksModel = mongoose.model('Task', tasksSchema);

export default tasksModel;
