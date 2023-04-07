const { movieServices } = require('../services')
const statusCodes = require('../Utils/StatusCodes')

const getAllMovies = async (_req, res) => {
  const movies = await movieServices.getAll()
  res.status(statusCodes.OK).send(movies)
}

module.exports = { getAllMovies }