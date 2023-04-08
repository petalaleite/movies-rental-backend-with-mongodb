const express = require('express');
const { getAllRentals } = require('../controllers/rentalConstrollers');

const rentalRouter = express.Router()

rentalRouter.get('/', getAllRentals)

module.exports = rentalRouter