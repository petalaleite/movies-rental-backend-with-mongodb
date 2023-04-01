const { serviceGenre } = require('../services')

const createGenre = async (req, res) => {
  const { name } = req.body
  const newGenre = await serviceGenre.create(name)
  res.status(201).send(newGenre)
}

const getAllGenres = async (_req, res) => {
  const genresList = await serviceGenre.getAll()
  res.status(200).send(genresList)
}

const getGenreById = async (req, res) => {
  const { id } = req.params
  const genre = await serviceGenre.getById(id)
  if (!genre) return res.status(404).send('The genre with the given ID does not exist.')
  res.status(200).send(genre)
}

module.exports = { createGenre, getAllGenres, getGenreById }