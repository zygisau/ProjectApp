import express from 'express';
import petTypesController from '../controllers/petTypes.controller';

const router = express.Router();

router.route('/')
  .get(petTypesController.getAll)
  .post(petTypesController.addPetType);

router.route('/:petTypeId')
  .get(petTypesController.getPetType)
  .put(petTypesController.updatePetType)
  .delete(petTypesController.deletePetType);

export default router;
