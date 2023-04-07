const { Genre } = require('../models/genre');
const Movie = require('../models/movie');

const getAll = async () => {
  const movies = await Movie.find({}).sort('name');
  return movies;
};

const create = async (genreId, title, numberInStock) => {
  const genre = await Genre.findById(genreId);
  if (!genre) return { status: 400, message: 'Invalid Genre' };
  const movie = await Movie.create({
    title,
    genre: {
      _id: genre._id,
      name: genre.name
    },
    numberInStock
  });
  return movie;
};

const update = async (id, movieBody) => {
  const { genreId, title, numberInStock } = movieBody;
  const genre = await Genre.findById(genreId);
  if (!genre) return { status: 400, message: 'Invalid Genre' };

  const movie = await Movie.findByIdAndUpdate(id, {
    title,
    genre: {
      _id: genre.id,
      name: genre.name
    },
    numberInStock
  });
  if (!movie) return { status: 404, message: 'The movie with the given ID was not found' };
  return movie;
};

const deleteMovie = async (id) => {
  const movie = await Movie.findByIdAndRemove(id);
  if (!movie) return { status: 404, message: 'The movie with the given ID was not found' };
  return movie;
};

const getById = async (id) => {
  const movie = await Movie.findById(id);
  if (!movie) return { status: 404, message: 'The movie with the given ID was not found' };
  return movie;
};

module.exports = { getAll, create, update, deleteMovie, getById };