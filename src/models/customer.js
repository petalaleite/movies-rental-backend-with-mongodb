const { Schema, model } = require('mongoose');

const Customer = model('Customer', new Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  premiumAccount: {
    type: Boolean,
    default: false,
  },
  address: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 255
  },
  phone: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
}));

module.exports = Customer;