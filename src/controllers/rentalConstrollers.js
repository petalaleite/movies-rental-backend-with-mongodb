const { rentalServices } = require('../services');
const statusCodes = require('../Utils/StatusCodes');

const getAllRentals = async (_req, res) => {
  const rentals = await rentalServices.getAll();
  res.status(statusCodes.OK).send(rentals);
};

const createRental = async (req, res) => {
  const { customerId, movieId, rentalFee } = req.body;
  const rental = await rentalServices.create(customerId, movieId, rentalFee);
  res.status(statusCodes.CREATED).send(rental);
};

const getRentalById = async (req, res) => {
  const { id } = req.params;
  const rental = await rentalServices.getById(id);
  res.status(statusCodes.OK).send(rental);
};

module.exports = { getAllRentals, createRental, getRentalById };
