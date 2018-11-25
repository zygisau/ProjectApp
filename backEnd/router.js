import express from 'express';
import tasks from './routes/tasks.route';
import pets from './routes/pets.route';
import petTypes from './routes/petTypes.route';
import users from './routes/users.route';
import usersController from './controllers/users.controller';

const router = express.Router();
// Register all routes here
router.use('/tasks', tasks);
router.use('/pets', pets);
router.use('/petTypes', petTypes);
router.use('/users', users);
router.post('/register', usersController.register);
router.post('/authenticate', usersController.authenticate);

export default router;

