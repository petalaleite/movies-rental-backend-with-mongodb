const express = require('express');
const { getAllCustomers, createCustomer } = require('../controllers/customerConstrollers');
const customerRouter = express.Router();

customerRouter.get('/', getAllCustomers);
customerRouter.post('/', createCustomer);

module.exports = customerRouter;