const { serviceGenre } = require('../services');

const INVALID_ID_MESSAGE = 'The genre with the given ID does not exist.';

const createGenre = async (req, res) => {
  const { name } = req.body;
  const newGenre = await serviceGenre.create(name);
  res.status(201).send(newGenre);
};

const getAllGenres = async (_req, res) => {
  const genresList = await serviceGenre.getAll();
  res.status(200).send(genresList);
};

const getGenreById = async (req, res) => {
  const { id } = req.params;
  const genre = await serviceGenre.getById(id);
  if (!genre) return res.status(404).send(INVALID_ID_MESSAGE);
  res.status(200).send(genre);
};

const updateGenre = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const genre = await serviceGenre.edit(id, name);
  if (!genre) return res.status(404).send(INVALID_ID_MESSAGE);
  res.status(200).send(genre);
};

const removeGenre = async (req, res) => {
  const { id } = req.params;
  const genre = await serviceGenre.removeGenre(id);
  if (!genre) return res.status(404).send(INVALID_ID_MESSAGE);
  return res.status(200).end();
};

module.exports = { createGenre, getAllGenres, getGenreById, updateGenre, removeGenre };