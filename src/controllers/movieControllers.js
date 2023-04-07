const { movieServices } = require('../services')
const statusCodes = require('../Utils/StatusCodes')

const getAllMovies = async (_req, res) => {
  const movies = await movieServices.getAll()
  res.status(statusCodes.OK).send(movies)
}

const createMovie = async (req, res) => {
  const { title, genreId, numberInStock } = req.body
  const movie = await movieServices.create(genreId, title, numberInStock)
  res.status(statusCodes.CREATED).send(movie)
}

const updateMovie = async (req, res) => {
  const { id } = req.params
  const movie = await movieServices.update(id, req.body)
  res.status(200).send(movie)
}

module.exports = { getAllMovies, createMovie, updateMovie }