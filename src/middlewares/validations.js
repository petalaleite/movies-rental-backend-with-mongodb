const Joi = require('../Utils/validations');
const statusCodes = require('../Utils/StatusCodes');

const validateGenre = (req, res, next) => {
  const { body } = req;
  const { error } = Joi.genre.validate(body);

  if (error) return res.status(statusCodes.BAD_REQUEST).json({ message: error.message });
  next();
};

const validateMovie = (req, res, next) => {
  const { body } = req;
  const { error } = Joi.movie.validate(body);

  if (error) return res.status(statusCodes.BAD_REQUEST).json({ message: error.message });
  next();
};

module.exports = { validateGenre, validateMovie };