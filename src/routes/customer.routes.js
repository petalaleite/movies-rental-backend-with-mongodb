const express = require('express');
const {
  getAllCustomers,
  createCustomer,
  getCustomerById,
  editCustomer,
  deleteCustomer,
} = require('../controllers/customerControllers');

const customerRouter = express.Router();

customerRouter.get('/', getAllCustomers);
customerRouter.post('/', createCustomer);
customerRouter.get('/:id', getCustomerById);
customerRouter.patch('/:id', editCustomer);
customerRouter.delete('/:id', deleteCustomer);

module.exports = customerRouter;