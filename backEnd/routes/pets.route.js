import express from 'express';
import petsController from '../controllers/pets.controllers';

const router = express.Router();

router.route('/')
  .get(petsController.getAll)
  .post(petsController.addPet);

router.route('/:petId')
  .get(petsController.getPet)
  .put(petsController.updatePet)
  .delete(petsController.deletePet);

router.post('/:petId/like', petsController.likePet);

export default router;
