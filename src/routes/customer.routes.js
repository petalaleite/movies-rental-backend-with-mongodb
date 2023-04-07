const express = require('express');
const {
  getAllCustomers,
  createCustomer,
  getCustomerById,
  editCustomer
} = require('../controllers/customerControllers');

const customerRouter = express.Router();

customerRouter.get('/', getAllCustomers);
customerRouter.post('/', createCustomer);
customerRouter.get('/:id', getCustomerById);
customerRouter.patch('/:id', editCustomer);

module.exports = customerRouter;