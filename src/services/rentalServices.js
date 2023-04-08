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
      _id: customer.id,
      firstName: customer.firstName,
      lastName: customer.lastName,
      address: customer.address,
      phone: customer.phone,
    },
    movie: {
      _id: movie._id,
      title: movie.title,
    },
    rentalFee,
  });
  movie.numberInStock--;
  movie.save();
  return rental;
};

module.exports = { getAll, create };