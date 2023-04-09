const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    minLength: 5,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    maxLength: 1024,
  },
  role: {
    type: String,
    required: true,
    enum: ['intern', 'admin', 'standard'],
  },
});

const User = model('User', userSchema);

module.exports = User;