/* eslint-disable no-plusplus */
const { Types } = require('mongoose');
const Customer = require('../models/customer');
const Rental = require('../models/rental');
const Movie = require('../models/movie');
require('mongoose');

const getAll = async () => {
  const rentals = await Rental.find({}, { __v: 0 });
  return rentals;
};

const create = async (customerId, movieId, rentalFee) => {
  const customer = await Customer.findById(customerId);
  if (!Types.ObjectId.isValid(customerId)) return { message: 'Invalid ID' };
  if (!customer) return { message: 'Invalid customer.' };

  const movie = await Movie.findById(movieId);
  if (movie.numberInStock === 0) return { message: 'Movie not in stock' };
  const rental = await Rental.create({
    customer: {
      ...customer,
    },
    movie: {
      ...movie,
    },
    rentalFee,
  });
  movie.numberInStock--;
  movie.save();
  return rental;
};

const getById = async (id) => {
  if (!Types.ObjectId.isValid(id)) return { message: 'Invalid ID' };
  const rental = await Rental.findById(id);
  return rental;
};

const deleteRental = async (id) => {
  if (!Types.ObjectId.isValid(id)) return { message: 'Invalid ID' };
  const rental = await Rental.findByIdAndRemove(id);
  return rental;
};

const edit = async (id, rentalUpdate) => {
  const { customerId, movieId, rentalFee } = rentalUpdate;
  const customer = await Customer.findById(customerId);
  if (!Types.ObjectId.isValid(customerId)) return { message: 'Invalid ID' };
  if (!customer) return { message: 'Invalid customer.' };
  const movie = await Movie.findById(movieId);

  const rental = await Rental.findByIdAndUpdate(id, {
    customer: {
      ...customer,
    },
    movie: {
      ...movie,
    },
    rentalFee,
  });
  return rental;
};

module.exports = { getAll, create, getById, deleteRental, edit };