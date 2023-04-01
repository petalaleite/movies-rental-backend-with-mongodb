const { serviceGenre } = require('../services')

const createGenre = async (req, res) => {
  const { name } = req.body
  const newGenre = await serviceGenre.create(name)
  res.status(201).send(newGenre)
}

module.exports = { createGenre }