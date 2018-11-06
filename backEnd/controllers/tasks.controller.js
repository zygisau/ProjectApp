import Task from '../models/tasks.model';

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (e) {
    res.status(500).send(e);
  }
};

controller.addTask = async (req, res) => {
  const newTask = new Task({ name: req.body.name, description: req.body.description });
  try {
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (e) {
    if (e.name === 'ValidationError') {
      res.status(400).send(e);
    } else {
      res.status(500).send('Unexpected server error');
    }
  }
};

controller.getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    res.status(task ? 200 : 404).json(task);
  } catch (e) {
    res.status(500).send(e);
  }
};

controller.updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true });
    res.status(200).json(updatedTask);
  } catch (e) {
    if (e.name === 'ValidationError') {
      res.status(400).send(e);
    } else {
      res.status(500).send('Unexpected server error');
    }
  }
};

controller.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndRemove({ _id: req.params.taskId });
    if (!task) {
      res.status(404).send('Task not found');
    } else {
      res.status(204).send('Task was deleted');
    }
  } catch (e) {
    res.status(500).send('Unexpected server error');
  }
};

export default controller;

