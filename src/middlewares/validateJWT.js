const jwt = require('jsonwebtoken');
const { secret } = require('../Utils/JWT');
const statusCodes = require('../Utils/StatusCodes');

const validateToken = async (req, res, next) => {
  const token = req.header('authorization');
  if (!token) {
    return res.status(statusCodes.UNAUTHORIZED).json(
      { message: 'Access denied. No token provided.' },
    );
  }
  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Expired or invalid token.' });
  }
};

module.exports = validateToken;