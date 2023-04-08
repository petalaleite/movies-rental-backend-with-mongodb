const express = require('express');
const { getAllRentals, createRental, getRentalById, deleteRental } = require('../controllers/rentalConstrollers');

const rentalRouter = express.Router();

rentalRouter.get('/', getAllRentals);
rentalRouter.post('/', createRental);
rentalRouter.get('/:id', getRentalById);
rentalRouter.delete('/:id', deleteRental);

module.exports = rentalRouter;