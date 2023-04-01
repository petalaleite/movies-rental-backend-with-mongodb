const { Genre } = require('../models/genre')

const create = async (name) => {
  const newGenre = await Genre.create({ name: name })
  return newGenre
}

const getAll = async () => {
  const listGenres = await Genre.find({}, { __v: 0, _id: 0 }).sort('name')
  return listGenres
}

module.exports = { create, getAll }