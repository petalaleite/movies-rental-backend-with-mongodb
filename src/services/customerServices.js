const Customer = require('../models/customer');

const getAll = async () => {
  const customers = await Customer.find({}, { __v: 0 }).sort('lastName');
  return customers;
};

module.exports = { getAll };