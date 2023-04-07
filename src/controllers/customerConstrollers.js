const { customerServices } = require('../services');
const statusCodes = require('../Utils/StatusCodes');

const getAllCustomers = async (_req, res) => {
  const customers = await customerServices.getAll();
  res.status(statusCodes.OK).send(customers);
};

const createCustomer = async (req, res) => {
  const { body } = req;
  newCustomer = await customerServices.create(body);
  res.status(statusCodes.CREATED).send(newCustomer);
};

module.exports = { getAllCustomers, createCustomer };