import express from 'express';
import sheltersController from '../controllers/shelters.controller';

const router = express.Router();

router.route('/')
    .get(sheltersController.getAll)
    .post(sheltersController.addShelter);

router.route('/:shelterId')
    .get(sheltersController.getShelter)
    .put(sheltersController.updateShelter)
    .delete(sheltersController.deleteShelter);

export default router;
