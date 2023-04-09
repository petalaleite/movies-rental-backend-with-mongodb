const express = require('express');
const {
  getAllRentals,
  createRental,
  getRentalById,
  deleteRental,
  rentalUpdate,
} = require('../controllers/rentalConstrollers');

const rentalRouter = express.Router();

rentalRouter.get('/', getAllRentals);
rentalRouter.post('/', createRental);
rentalRouter.get('/:id', getRentalById);
rentalRouter.put('/:id', rentalUpdate);
rentalRouter.delete('/:id', deleteRental);

module.exports = rentalRouter;