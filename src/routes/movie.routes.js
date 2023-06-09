const express = require('express');
const {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  getMovieById,
} = require('../controllers/movieControllers');
const { validateID } = require('../middlewares/idValidation');

const movieRoutes = express.Router();

movieRoutes.get('/', getAllMovies);
movieRoutes.post('/', createMovie);
movieRoutes.put('/:id', validateID, updateMovie);
movieRoutes.delete('/:id', validateID, deleteMovie);
movieRoutes.get('/:id', validateID, getMovieById);

module.exports = movieRoutes;