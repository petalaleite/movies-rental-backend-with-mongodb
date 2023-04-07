const express = require('express')
const { getAllMovies, createMovie } = require('../controllers/movieControllers')
const movieRoutes = express.Router()

movieRoutes.get('/', getAllMovies)
movieRoutes.post('/', createMovie)

module.exports = movieRoutes