const { Genre } = require('../models/genre');

const create = async (name) => {
  // check if genre already exists. (throw error if true)
  const newGenre = await Genre.create({ name });
  return newGenre;
};

const getAll = async () => {
  const listGenres = await Genre.find({}, { __v: 0, _id: 0 }).sort('name');
  return listGenres;
};

const getById = async (id) => {
  // checks if its a valid id, checks if the genre exist
  const genre = await Genre.findById(id);
  return genre;
};

const edit = async (id, name) => {
  const genreUpdated = await Genre.findByIdAndUpdate(id, { name }, { new: true });
  return genreUpdated;
};

const removeGenre = async (id) => {
  const genre = await Genre.findByIdAndRemove(id);
  return genre;
};

module.exports = { create, getAll, getById, edit, removeGenre };