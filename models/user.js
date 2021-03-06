const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const userSchema = new Schema({
  username: { type: String, unique: true },
  password: { type: String, required: true },
  email: { type: String, unique: true },
  image: String,
  isOwner: Boolean,
  pet: ObjectId, // duda
  review: [],

}, {
  timestamps: true,
});

// userSchema.path('email').validate((email) => {
//   const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//   return emailRegex.test(email.text); // Assuming email has a text attribute
// }, 'The e-mail field cannot be empty.');

const User = mongoose.model('User', userSchema);

module.exports = User;
