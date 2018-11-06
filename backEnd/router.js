import express from 'express';
import tasks from './routes/tasks.route';

const router = express.Router();
// Register all routes here
router.use('/tasks', tasks);

export default router;
