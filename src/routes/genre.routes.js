const express = require('express')
const { createGenre } = require('../controllers/genreControllers')
const genreRouter = express.Router()

genreRouter.post('/', createGenre)

module.exports = genreRouter