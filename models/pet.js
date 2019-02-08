const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const petSchema = new Schema({
  name: { type: String, unique: true },
  description: String,
  owner: { type: ObjectId, ref: 'User' }, // duda
  date: String,
  image: String,
  days: Number,
  adopter: { type: ObjectId, ref: 'User' },
  review: [],

}, {
  timestamps: true,
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
