const statusCodes = require('../Utils/StatusCodes');

const admin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(statusCodes.FORBIDDEN).json({ message: 'Access denied.' });
  }
  next();
};

module.exports = admin;