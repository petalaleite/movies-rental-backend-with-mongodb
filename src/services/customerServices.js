const Customer = require('../models/customer');

const getAll = async () => {
  const customers = await Customer.find({}, { __v: 0 }).sort('lastName');
  return customers;
};

const create = async (customer) => {
  const newCustomer = await Customer.create({ ...customer });
  return newCustomer;
};

const getById = async (id) => {
  const customer = await Customer.findById(id);
  return customer;
};

module.exports = { getAll, create, getById };