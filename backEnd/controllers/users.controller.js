import User from '../models/users.model';

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (e) {
        res.status(500).send(e);
    }
};

controller.addUser = async (req, res) => {
    const newUser = User({ email: req.body.email, firstName: req.body.firstName, lastName: req.body.lastName, password: req.body.password });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.status(400).send(e);
        } else {
            res.status(500).send(e);
        }
    }
};

controller.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.status(user ? 200 : 404).json(user);
    } catch (e) {
        res.status(500).send(e);
    }
};

controller.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true });
        res.status(200).json(updatedUser);
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.status(400).send(e);
        } else {
            res.status(500).send('Unexpected server error');
        }
    }
};

controller.deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndRemove({ _id: req.params.userId });
        if (!user) {
            res.status(404).send('User not found');
        } else {
            res.status(204).send('User was deleted');
        }
    } catch (e) {
        res.status(500).send('Unexpected server error');
    }
};

export default controller;

