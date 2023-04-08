const Rental = require('../models/rental');

const getAll = async () => {
  const rentals = await Rental.find({}, { __v: 0 })
  return rentals
}

module.exports = { getAll }