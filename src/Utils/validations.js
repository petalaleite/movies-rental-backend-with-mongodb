const Joi = require('joi');

const genre = Joi.object({
  name: Joi.string().min(2).required(),
});

const movie = Joi.object({
  title: Joi.string().min(2).max(255).required(),
  genreId: Joi.string().required(),
  numberInStock: Joi.number().min(0).required(),
});

module.exports = { genre, movie };