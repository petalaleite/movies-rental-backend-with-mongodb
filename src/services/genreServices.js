const { Genre } = require('../models/genre')

const create = async (name) => {
  const newGenre = await Genre.create({ name: name })
  return newGenre
}

module.exports = { create }