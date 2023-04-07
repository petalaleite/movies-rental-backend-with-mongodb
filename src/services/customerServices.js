const Customer = require('../models/customer');

const getAll = async () => {
  const customers = await Customer.find({}, { __v: 0 }).sort('lastName');
  return customers;
};

const create = async (customer) => {
  const newCustomer = await Customer.create({ ...customer });
  return newCustomer;
};

module.exports = { getAll, create };