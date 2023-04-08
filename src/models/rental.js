const { Schema, model } = require('mongoose');

const Rental = model('Rental', new Schema({
  customer: {
    type: new Schema({
      fistName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 2
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
          genre: {
            type: genreSchema,
            required: true,
          },
          numberInStock: {
            type: Number,
            required: true,
            min: 0,
            max: 255
          }
        })
      }
    })
  }
}));

module.exports = Rental