const express = require('express');
const { getAllRentals, createRental } = require('../controllers/rentalConstrollers');

const rentalRouter = express.Router();

rentalRouter.get('/', getAllRentals);
rentalRouter.post('/', createRental);

module.exports = rentalRouter;