import mongoose from 'mongoose';


const Schema = mongoose.Schema;


const Pet = new Schema({

    name: {
        type: String,
        required: 'Pet name is required'
    },
    age: {
        type: Number,
        required: 'Pet age is required'
    },
    breed: {
        type: String,
        required: 'Pet breed is required'
    },
    petType: {
        type: Schema.Types.ObjectId,
        ref: 'PetType',
        required: 'Pet type is required'
    },
    shelter: {
      type: Schema.Types.ObjectId,
      ref: 'Shelter',
      required: 'Shelter is required'
    },
    description: {
        type: String,
    },

    photo: {
        type: String,
        required: 'Pet photo is required'
    },

    reservedBy: {
        type: Schema.Types.ObjectId,
        default: null
    },

    likes: [{type: Schema.Types.ObjectId, ref: 'User'}]

});

Pet.method('isLiked', function (id) {
    if (this.likes.includes(id)) {
        return true;
    }

    return false;
});


const petModel = mongoose.model('Pet', Pet);


export default petModel;
