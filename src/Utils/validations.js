const Joi = require('joi');

const genre = Joi.object({
  name: Joi.string().min(2).required(),
});

const movie = Joi.object({
  title: Joi.string().min(2).max(255).required(),
  genreId: Joi.string().required(),
  numberInStock: Joi.number().min(0).required(),
});

const user = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  role: Joi.string().required(),
});

module.exports = { genre, movie, user };