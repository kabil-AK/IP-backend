const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  age: { type: Number, default: null },
  dob: { type: String, default: '' },
  contact: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
