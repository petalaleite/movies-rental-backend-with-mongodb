const express = require('express')
const { getAllMovies } = require('../controllers/movieControllers')
const movieRoutes = express.Router()

movieRoutes.get('/', getAllMovies)

module.exports = movieRoutes