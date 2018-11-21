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
  description: {
    type: String,
  },

  photo: {
    type: String,

  },
  likes: [{ type: Schema.Types.ObjectId, ref: 'Story' }]

});

const petModel = mongoose.model('Pet', Pet);


export default petModel;
