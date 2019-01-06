import Shelter from '../models/shelters.model';


const controller = {};

controller.getAll = async (req, res) => {
    try {
        const shelters = await Shelter.find({}).populate('pets');
        res.json(shelters);
    } catch (e) {
        res.status(500).send(e);
    }
};
controller.addShelter = async (req, res) => {
    const newShelter = new Shelter({ name: req.body.name });
    try {
        const savedShelter = await newShelter.save();
        res.status(201).json(savedShelter);
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.status(400).send(e);
        } else {
            res.status(500).send('Unexpected server error');
        }
    }
};

controller.getShelter = async (req, res) => {
    try {
        const shelter = await Shelter.findById(req.params.shelterId).populate('pets');
        res.status(shelter ? 200 : 404).json(shelter);
    } catch (e) {
        res.status(500).send(e);
    }
};

controller.updateShelter = async (req, res) => {
    try {
        const updatedShelter = await Shelter.findOneAndUpdate({ _id: req.params.shelterId }, req.body, { new: true });
        res.status(200).json(updatedShelter);
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.status(400).send(e);
        } else {
            res.status(500).send('Unexpected server error');
        }
    }
};

controller.deleteShelter = async (req, res) => {
    try {
        const shelter = await Shelter.findOneAndRemove({ _id: req.params.shelterId });
        if (!shelter) {
            res.status(404).send('Shelter not found');
        } else {
            res.status(204).send('Shelter was deleted');
        }
    } catch (e) {
        res.status(500).send('Unexpected server error');
    }
};

export default controller;
