import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
    },
    isShelter: {
        type: Boolean,
        default: false
    },
    shelter: {
        type: Schema.Types.ObjectId,
        ref: 'Shelter'
    }
});


usersSchema.pre('save', function (next) { // we need to use function keyword to use this
    const user = this;
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) {
            console.log(err);
            return next(err);
        }
        user.password = hash;
        next();
    });
});

const userModel = mongoose.model('User', usersSchema);

export default userModel;
