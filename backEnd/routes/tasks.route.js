import express from 'express';
import tasksController from '../controllers/tasks.controller';

const router = express.Router();

router.route('/')
  .get(tasksController.getAll)
  .post(tasksController.addTask);

router.route('/:taskId')
  .get(tasksController.getTask)
  .put(tasksController.updateTask)
  .delete(tasksController.deleteTask);

export default router;
