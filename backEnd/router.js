import express from 'express';
import tasks from './routes/tasks.route';
import pets from './routes/pets.route';
import petTypes from './routes/petTypes.route';

const router = express.Router();
// Register all routes here
router.use('/tasks', tasks);
router.use('/pets', pets);
router.use('/petTypes', petTypes);

export default router;
