import PetType from '../models/petTypes.model';


const controller = {};

controller.getAll = async (req, res) => {
  try {
    const petTypes = await PetType.find({}).populate('pets');
    res.json(petTypes);
  } catch (e) {
    res.status(500).send(e);
  }
};
controller.addPetType = async (req, res) => {
  const newPetType = new PetType({ name: req.body.name });
  try {
    const savedPetType = await newPetType.save();
    res.status(201).json(savedPetType);
  } catch (e) {
    if (e.name === 'ValidationError') {
      res.status(400).send(e);
    } else {
      res.status(500).send('Unexpected server error');
    }
  }
};

controller.getPetType = async (req, res) => {
  try {
    const petType = await PetType.findById(req.params.petTypeId).populate('pets');
    res.status(petType ? 200 : 404).json(petType);
  } catch (e) {
    res.status(500).send(e);
  }
};

controller.updatePetType = async (req, res) => {
  try {
    const updatedPetType = await PetType.findOneAndUpdate({ _id: req.params.petTypeId }, req.body, { new: true });
    res.status(200).json(updatedPetType);
  } catch (e) {
    if (e.name === 'ValidationError') {
      res.status(400).send(e);
    } else {
      res.status(500).send('Unexpected server error');
    }
  }
};

controller.deletePetType = async (req, res) => {
  try {
    const petType = await PetType.findOneAndRemove({ _id: req.params.petTypeId });
    if (!petType) {
      res.status(404).send('PetType not found');
    } else {
      res.status(204).send('PetType was deleted');
    }
  } catch (e) {
    res.status(500).send('Unexpected server error');
  }
};

export default controller;
