const { Genre } = require('../models/genre')
const Movie = require('../models/movie')

const getAll = async () => {
  const movies = await Movie.find({}).sort('name')
  return movies
}

const create = async (genreId, title, numberInStock) => {
  const genre = await Genre.findById(genreId)
  if (!genre) return { status: 400, message: 'Invalid Genre' }
  const movie = await Movie.create({
    title,
    genre: {
      _id: genre._id,
      name: genre.name
    },
    numberInStock
  })
  return movie
}


module.exports = { getAll, create }