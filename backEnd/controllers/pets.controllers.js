import Pet from '../models/pets.model';


const controller = {};

controller.getAll = async (req, res) => {
  try {
    const pets = await Pet.find({}).populate('petType');
    res.json(pets);
  } catch (e) {
    res.status(500).send(e);
  }
};
controller.addPet = async (req, res) => {
  const newPet = new Pet({ name: req.body.name, age: req.body.age, breed: req.body.breed, petType: req.body.petType });
  try {
    const savedPet = await newPet.save();
    res.status(201).json(savedPet);
  } catch (e) {
    if (e.name === 'ValidationError') {
      res.status(400).send(e);
    } else {
      res.status(500).send('Unexpected server error');
    }
  }
};

controller.getPet = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.petId).populate('petType shelter');
    res.status(pet ? 200 : 404).json(pet);
  } catch (e) {
    res.status(500).send(e);
  }
};

controller.updatePet = async (req, res) => {
  try {
    const updatedPet = await Pet.findOneAndUpdate({ _id: req.params.petId }, req.body, { new: true });
    res.status(200).json(updatedPet);
  } catch (e) {
    if (e.name === 'ValidationError') {
      res.status(400).send(e);
    } else {
      res.status(500).send('Unexpected server error');
    }
  }
};

controller.deletePet = async (req, res) => {
  try {
    const pet = await Pet.findOneAndRemove({ _id: req.params.petId });
    if (!pet) {
      res.status(404).send('Pet not found');
    } else {
      res.status(204).send('Pet was deleted');
    }
  } catch (e) {
    res.status(500).send('Unexpected server error');
  }
};

export default controller;
