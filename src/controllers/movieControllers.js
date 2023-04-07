const { movieServices } = require('../services');
const statusCodes = require('../Utils/StatusCodes');

const getAllMovies = async (_req, res) => {
  const movies = await movieServices.getAll();
  res.status(statusCodes.OK).send(movies);
};

const createMovie = async (req, res) => {
  const { title, genreId, numberInStock } = req.body;
  const movie = await movieServices.create(genreId, title, numberInStock);
  res.status(statusCodes.CREATED).send(movie);
};

const updateMovie = async (req, res) => {
  const { id } = req.params;
  const movie = await movieServices.update(id, req.body);
  res.status(statusCodes.OK).send(movie);
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;
  const movie = await movieServices.deleteMovie(id);
  res.status(statusCodes.OK).send(movie);
};

const getMovieById = async (req, res) => {
  const { id } = req.params;
  const movie = await movieServices.getById(id);
  res.status(statusCodes.OK).send(movie);
};

module.exports = { getAllMovies, createMovie, updateMovie, deleteMovie, getMovieById };