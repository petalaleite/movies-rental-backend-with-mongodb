const express = require('express');
const {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  getMovieById
} = require('../controllers/movieControllers');

const movieRoutes = express.Router();

movieRoutes.get('/', getAllMovies);
movieRoutes.post('/', createMovie);
movieRoutes.put('/:id', updateMovie);
movieRoutes.delete('/:id', deleteMovie);
movieRoutes.get('/:id', getMovieById);

module.exports = movieRoutes;