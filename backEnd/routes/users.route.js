import express from 'express';
import usersController from '../controllers/users.controller';

const router = express.Router();

router.route('/')
    .get(usersController.getAll)
    .post(usersController.addUser);

router.route('/:userId')
    .get(usersController.getUser)
    .put(usersController.updateUser)
    .delete(usersController.deleteUser);

export default router;
