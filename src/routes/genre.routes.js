const express = require('express')
const { createGenre, getAllGenres, getGenreById, updateGenre } = require('../controllers/genreControllers')
const genreRouter = express.Router()

genreRouter.post('/', createGenre)
genreRouter.get('/', getAllGenres)
genreRouter.get('/:id', getGenreById)
genreRouter.put('/:id', updateGenre)

module.exports = genreRouter