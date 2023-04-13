const { Schema, model } = require('mongoose');
const { genreSchema } = require('./genre');

const Movie = model('Movies', new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 255,
  },
  genre: {
    type: Array(genreSchema),
    required: true,
  },
  numberInStock: {
    type: Number,
    required: true,
    min: 0,
    max: 255,
  },
}));

module.exports = Movie;