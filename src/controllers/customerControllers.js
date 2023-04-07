const { customerServices } = require('../services');
const statusCodes = require('../Utils/StatusCodes');

const INVALID_ID_MESSAGE = 'The customer with the given ID does not exist';

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
  if (!customer) return res.status(statusCodes.NOT_FOUND).send(INVALID_ID_MESSAGE);
  res.status(statusCodes.OK).send(customer);
};

const editCustomer = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const updatedCustomer = await customerServices.edit(id, body);
  if (!updatedCustomer) return res.status(statusCodes.NOT_FOUND).send(INVALID_ID_MESSAGE);
  res.status(statusCodes.OK).send(updatedCustomer);
};

module.exports = { getAllCustomers, createCustomer, getCustomerById, editCustomer };