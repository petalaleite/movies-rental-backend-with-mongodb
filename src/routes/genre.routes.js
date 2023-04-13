const express = require('express');
const {
  createGenre,
  getAllGenres,
  getGenreById,
  updateGenre,
  removeGenre,
} = require('../controllers/genreControllers');
const { validateID } = require('../middlewares/idValidation');

const genreRouter = express.Router();

genreRouter.post('/', createGenre);
genreRouter.get('/', getAllGenres);
genreRouter.get('/:id', validateID, getGenreById);
genreRouter.put('/:id', validateID, updateGenre);
genreRouter.delete('/:id', validateID, removeGenre);

module.exports = genreRouter;