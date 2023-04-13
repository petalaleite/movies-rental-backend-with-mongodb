const express = require('express');
const {
  getAllRentals,
  createRental,
  getRentalById,
  deleteRental,
  rentalUpdate,
} = require('../controllers/rentalConstrollers');
const { validateID } = require('../middlewares/idValidation');

const rentalRouter = express.Router();

rentalRouter.get('/', getAllRentals);
rentalRouter.post('/', createRental);
rentalRouter.get('/:id', validateID, getRentalById);
rentalRouter.put('/:id', validateID, rentalUpdate);
rentalRouter.delete('/:id', validateID, deleteRental);

module.exports = rentalRouter;