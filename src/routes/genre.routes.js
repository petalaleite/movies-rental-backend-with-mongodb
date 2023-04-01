const express = require('express')
const { createGenre, getAllGenres } = require('../controllers/genreControllers')
const genreRouter = express.Router()

genreRouter.post('/', createGenre)
genreRouter.get('/', getAllGenres)

module.exports = genreRouter