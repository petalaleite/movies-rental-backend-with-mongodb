const express = require('express');
const {
  getAllCustomers,
  createCustomer,
  getCustomerById,
  editCustomer,
  deleteCustomer,
} = require('../controllers/customerControllers');
const { validateID } = require('../middlewares/idValidation');

const customerRouter = express.Router();

customerRouter.get('/', getAllCustomers);
customerRouter.post('/', createCustomer);
customerRouter.get('/:id', validateID, getCustomerById);
customerRouter.patch('/:id', validateID, editCustomer);
customerRouter.delete('/:id', validateID, deleteCustomer);

module.exports = customerRouter;