const { rentalServices } = require('../services');
const statusCodes = require('../Utils/StatusCodes')
const getAllRentals = async (_req, res) => {
  const rentals = await rentalServices.getAll()
  res.status(statusCodes.OK).send(rentals)
}

module.exports = { getAllRentals }