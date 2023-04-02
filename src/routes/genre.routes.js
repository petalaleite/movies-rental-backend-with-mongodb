const express = require('express')
const { createGenre, getAllGenres, getGenreById, updateGenre, removeGenre } = require('../controllers/genreControllers')
const genreRouter = express.Router()

genreRouter.post('/', createGenre)
genreRouter.get('/', getAllGenres)
genreRouter.get('/:id', getGenreById)
genreRouter.put('/:id', updateGenre)
genreRouter.delete('/:id', removeGenre)

module.exports = genreRouter