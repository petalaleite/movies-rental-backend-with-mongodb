const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
};

const validatePassword = async (logged, stored) => {
  const validation = await bcrypt.compare(logged, stored);
  return validation;
};

module.exports = { hashPassword, validatePassword };