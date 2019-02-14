const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const petSchema = new Schema({
  name: { type: String, unique: true },
  description: String,
  ownerName: String,
  ownerId: { type: ObjectId, ref: 'User' }, // duda
  startDay: String,
  endDay: String,
  image: String,
  adopterName: String,
  isAdopted: Boolean,
  isPending: {
    type: Boolean,
    default: null,
  },
  candidate: { type: ObjectId, ref: 'User' },
  adopter: { type: ObjectId, ref: 'User' },
  review: [],

}, {
  timestamps: true,
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
