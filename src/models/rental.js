const { Schema, model } = require('mongoose');
const { genreSchema } = require('./genre');

const Rental = model('Rental', new Schema({
  customer: {
    type: new Schema({
      firstName: {
        type: String,
        required: true,
        minLength: 2,
      },
      lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
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
      },
    })
  },
  movie: {
    type: new Schema({
      title: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 255
      },
    })
  },
  dateOut: {
    type: Date,
    required: true,
    default: Date.now
  },
  dateReturned: {
    type: Date,
    required: false,
  },
  rentalFee: {
    type: Number,
    min: 1
  }
}));

module.exports = Rental;