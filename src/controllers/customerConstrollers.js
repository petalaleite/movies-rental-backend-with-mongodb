const { customerServices } = require('../services');
const statusCodes = require('../Utils/StatusCodes');

const getAllCustomers = async (_req, res) => {
  const customers = await customerServices.getAll();
  res.status(statusCodes.OK).send(customers);
};

const createCustomer = async (req, res) => {
  const { body } = req;
  const newCustomer = await customerServices.create(body);
  res.status(statusCodes.CREATED).send(newCustomer);
};

const getCustomerById = async (req, res) => {
  const { id } = req.params;
  const customer = await customerServices.getById(id);
  res.status(statusCodes.OK).send(customer);
};

module.exports = { getAllCustomers, createCustomer, getCustomerById };