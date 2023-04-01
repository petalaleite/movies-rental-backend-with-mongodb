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

module.exports = { createGenre, getAllGenres }