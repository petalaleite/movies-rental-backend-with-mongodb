const express = require('express');
const { getAllRentals, createRental, getRentalById } = require('../controllers/rentalConstrollers');

const rentalRouter = express.Router();

rentalRouter.get('/', getAllRentals);
rentalRouter.post('/', createRental);
rentalRouter.get('/:id', getRentalById);

module.exports = rentalRouter;