import mongoose from 'mongoose';


const Schema = mongoose.Schema;


const Shelter = new Schema({

    name: {
        type: String,
        required: 'Shelter name is required',
    },
    location: {
      type: String,
      required: 'Shelter location is required'
    },
    pets: [{ type: Schema.Types.ObjectId, ref: 'Pet' }]
});
const SheltersModel = mongoose.model('Shelter', Shelter);


export default SheltersModel;
