import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
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
    const newUser = User({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    });
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

controller.authenticate = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            bcrypt.compare(req.body.password, user.password, (err, correct) => {
                if (correct) {
                    const token = jwt.sign({ sub: user.id }, 'secret'); // todo better secret
                    user = {
                        ...user,
                        token
                    };
                    res.status(201).json(user);
                } else {
                    res.status(400).json({ message: 'Username or password is incorrect' });
                }
            });
        } else {
            res.status(400).json({ message: 'Username or password is incorrect' });
        }
    } catch (e) {
        res.status(500).send('Unexpected server error');
    }
};

controller.register = async (req, res) => { // creates user and signs him in
    const newUser = User({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    });
    try {
        const savedUser = await newUser.save();
        const token = jwt.sign({ sub: savedUser.id }, 'secret'); // todo better secret
        const user = {
            ...savedUser,
            token
        };

        res.status(201).json(user);
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.status(400).send(e);
        } else {
            res.status(500).send(e);
        }
    }
};

export default controller;

