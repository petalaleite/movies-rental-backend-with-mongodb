const { Genre } = require('../models/genre')

const create = async (name) => {
  const newGenre = await Genre.create({ name: name })
  return newGenre
}

const getAll = async () => {
  const listGenres = await Genre.find({}, { __v: 0, _id: 0 }).sort('name')
  return listGenres
}

const getById = async (id) => {
  const genre = await Genre.findById(id)
  return genre
}

const edit = async (id, name) => {
  const genreUpdated = await Genre.findByIdAndUpdate(id, { name: name }, { new: true })
  return genreUpdated
}

module.exports = { create, getAll, getById, edit }