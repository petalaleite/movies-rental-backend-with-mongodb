const express = require('express')
const { getAllMovies, createMovie, updateMovie, deleteMovie } = require('../controllers/movieControllers')
const movieRoutes = express.Router()

movieRoutes.get('/', getAllMovies)
movieRoutes.post('/', createMovie)
movieRoutes.put('/:id', updateMovie)
movieRoutes.delete('/:id', deleteMovie)

module.exports = movieRoutes