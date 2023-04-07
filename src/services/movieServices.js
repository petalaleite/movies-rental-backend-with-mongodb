const Movie = require('../models/movie')

const getAll = async () => {
  const movies = await Movie.find({}).sort('name')
  return movies
}

module.exports = { getAll }