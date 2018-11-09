import mongoose from 'mongoose';


const Schema = mongoose.Schema;


const PetType = new Schema({

  name: {
    type: String,
    required: 'PetType name is required',
  },
  pets: [{ type: Schema.Types.ObjectId, ref: 'Pet' }]
});
const petTypesModel = mongoose.model('PetType', PetType);


export default petTypesModel;
