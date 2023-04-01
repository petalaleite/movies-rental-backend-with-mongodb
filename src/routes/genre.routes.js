const express = require('express')
const { createGenre, getAllGenres, getGenreById } = require('../controllers/genreControllers')
const genreRouter = express.Router()

genreRouter.post('/', createGenre)
genreRouter.get('/', getAllGenres)
genreRouter.get('/:id', getGenreById)

module.exports = genreRouter