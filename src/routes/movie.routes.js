const express = require('express')
const { getAllMovies, createMovie, updateMovie } = require('../controllers/movieControllers')
const movieRoutes = express.Router()

movieRoutes.get('/', getAllMovies)
movieRoutes.post('/', createMovie)
movieRoutes.put('/:id', updateMovie)

module.exports = movieRoutes