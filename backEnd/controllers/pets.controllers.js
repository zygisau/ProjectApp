import Pet from '../models/pets.model';
import User from '../models/users.model';


const controller = {};

controller.getAll = async (req, res) => {
    try {

        let pets = [];
        console.log(req);
        const userModel = await User.findOne({ _id: req.user.sub });
        if (userModel._doc.isShelter) {
            pets = await Pet.find({})
                .populate('petType shelter');
        } else {
            const allPets = await Pet.find({ reservedBy: null })
                .populate('petType shelter');
            pets = allPets.map(function (pet) {
                const tempPet = pet.toObject();
                if (req.user !== undefined) {
                    tempPet.isLiked = tempPet.likes.some(function (item) {
                        return item == req.user.sub;
                    });
                }
                return tempPet;
            });
        }
        res.json(pets);
    } catch (e) {
        console.log(e);
        res.status(500)
            .send(e);
    }
};

controller.getLikedPets = async (req, res) => {
    try {
        const likedPets = await Pet.find({ likes: req.user.sub });
        const pets = likedPets.map(function (pet) {
            const tempPet = pet.toObject();
            tempPet.canReserve = pet.reservedBy === null;
            tempPet.reservedByUser = pet.reservedBy == req.user.sub;

            return tempPet;
        });
        res.json(pets);
    } catch (e) {
        res.status(500)
            .send(e);
    }
};

controller.getReservedPets = async (req, res) => {
    try {
        const reservedPets = await Pet.find({ reservedBy: { $ne: null } })
            .populate('reservedBy');

        res.json(reservedPets);
    } catch (e) {
        res.status(500)
            .send(e);
    }
};

controller.addPet = async (req, res) => {
    const newPet = new Pet(req.body);
    try {
        const savedPet = await newPet.save();
        res.status(201)
            .json(savedPet);
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.status(400)
                .send(e);
        } else {
            res.status(500)
                .send('Unexpected server error');
        }
    }
};

controller.reservePet = async (req, res) => {
    try {
        await Pet.findOneAndUpdate({ _id: req.params.petId }, { reservedBy: req.user.sub });
        res.status(201)
            .json({ success: true });
    } catch (e) {
        res.status(500)
            .send(e);
    }
};

controller.unreservePet = async (req, res) => {
    try {
        await Pet.findOneAndUpdate({ _id: req.params.petId, reservedBy: req.user.sub }, { reservedBy: null });
        res.status(201)
            .json({ success: true });
    } catch (e) {
        res.status(500)
            .send(e);
    }
};

controller.getPet = async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.petId)
            .populate('petType');
        res.status(pet ? 200 : 404)
            .json(pet);
    } catch (e) {
        res.status(500)
            .send(e);
    }
};

controller.updatePet = async (req, res) => {
    try {
        const updatedPet = await Pet.findOneAndUpdate({ _id: req.params.petId }, req.body, { new: true });
        res.status(200)
            .json(updatedPet);
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.status(400)
                .send(e);
        } else {
            res.status(500)
                .send('Unexpected server error');
        }
    }
};

controller.deletePet = async (req, res) => {
    try {
        const pet = await Pet.findOneAndRemove({ _id: req.params.petId });
        if (!pet) {
            res.status(404)
                .send('Pet not found');
        } else {
            res.status(204)
                .send('Pet was deleted');
        }
    } catch (e) {
        res.status(500)
            .send('Unexpected server error');
    }
};

controller.likePet = async (req, res) => {
    try {
        await Pet.findOneAndUpdate({ _id: req.params.petId }, { $addToSet: { likes: req.user.sub } }, { new: true });
        res.status(200)
            .json({ isLiked: true });
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.status(400)
                .send(e);
        } else {
            res.status(500)
                .send('Unexpected server error');
        }
    }
};

controller.unlikePet = async (req, res) => {
    try {
        await Pet.findOneAndUpdate({ _id: req.params.petId }, { $pull: { likes: req.user.sub } }, { new: true });
        res.status(200)
            .json({ isLiked: false });
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.status(400)
                .send(e);
        } else {
            res.status(500)
                .send('Unexpected server error');
        }
    }
};

export default controller;
