const Joi = require('joi');

const validateGenre = (genre) => {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
  });
  return schema.validate(genre);
};

const validateMovie = (movie) => {
  const schema = Joi.object({
    title: Joi.string().min(2).max(255).required(),
    genreId: Joi.string().required(),
    numberInStock: Joi.number().min(0).required(),
  });
  return schema.validate(movie);
};

const validateUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    role: Joi.string().required(),
  });
  return schema.validate(user);
};

const validateCustomer = (customer) => {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),
    premiumAccount: Joi.boolean().required(),
    address: Joi.string().min(10).max(255).required(),
    phone: Joi.string().required(),
  });
  return schema.validate(customer);
};

const validateRetail = (retail) => {
  const schema = Joi.object({
    customerId: Joi.string().required(),
    movieId: Joi.string().required(),
    rentalFee: Joi.number().min(1).required(),
  });
  return schema.validate(retail);
};

module.exports = { validateGenre, validateUser, validateMovie, validateCustomer, validateRetail };