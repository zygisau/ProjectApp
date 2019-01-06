import express from 'express';
import petsController from '../controllers/pets.controllers';

const router = express.Router();

router.route('/')
  .get(petsController.getAll)
  .post(petsController.addPet);

router.get('/likedList', petsController.getLikedPets);

router.route('/:petId')
  .get(petsController.getPet)
  .put(petsController.updatePet)
  .delete(petsController.deletePet);


router.post('/:petId/like', petsController.likePet);
router.post('/:petId/unlike', petsController.unlikePet);

export default router;
