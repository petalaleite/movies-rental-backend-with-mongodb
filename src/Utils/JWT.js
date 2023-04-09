require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;
const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

function generateToken(user) {
  const token = jwt.sign({ _id: user._id, role: user.role }, secret, jwtConfig);
  return token;
}

module.exports = { secret, jwtConfig, generateToken };