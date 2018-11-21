import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model('User', usersSchema);

usersSchema.pre('save', function (next) { // we need to use function keyword to use this
    const user = this;
    bcrypt.hash('password', 10, (err, hash) => {
        if (err) {
            console.log(err);
            return next(err);
        }
        user.password = hash;
        return next();
    });
});

// authenticate input against database
usersSchema.statics.authenticate = async (email, password, callback) => {
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            const err = new Error('User not found.');
            err.status = 401;
            return callback(err);
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if (!result) {
                return callback();
            }
            return callback(null, user);
        });
    } catch (e) {
        return callback(e);
    }
};

export default userModel;
