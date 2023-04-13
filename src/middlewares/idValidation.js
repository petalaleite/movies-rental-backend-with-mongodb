const { Types } = require('mongoose');
const statusCodes = require('../Utils/StatusCodes');

async function validateID(req, res, next) {
  const { id } = req.params;
  if (!Types.ObjectId.isValid(id)) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: 'Invalid ID' });
  }
  next();
}

module.exports = { validateID };