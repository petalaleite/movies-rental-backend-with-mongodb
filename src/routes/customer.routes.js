const express = require('express');
const { getAllCustomers } = require('../controllers/customerConstrollers');
const customerRouter = express.Router();

customerRouter.get('/', getAllCustomers);

module.exports = customerRouter;