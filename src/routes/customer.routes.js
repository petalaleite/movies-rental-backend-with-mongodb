const express = require('express');
const { getAllCustomers, createCustomer, getCustomerById } = require('../controllers/customerConstrollers');
const customerRouter = express.Router();

customerRouter.get('/', getAllCustomers);
customerRouter.post('/', createCustomer);
customerRouter.get('/:id', getCustomerById);

module.exports = customerRouter;