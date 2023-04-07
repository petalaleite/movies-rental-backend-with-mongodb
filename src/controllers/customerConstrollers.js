const { customerServices } = require('../services');
const statusCodes = require('../Utils/StatusCodes');

const getAllCustomers = async (_req, res) => {
  const customers = await customerServices.getAll();
  res.status(statusCodes.OK).send(customers);
};

module.exports = { getAllCustomers };