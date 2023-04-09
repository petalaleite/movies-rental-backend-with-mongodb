const { generateToken } = require('../Utils/JWT');
const { validatePassword } = require('../Utils/hashPassword');
const User = require('../models/user');

const logUser = async (email, password) => {
  const user = User.findOne(email);
  if (!user) return { message: 'Invalid email or password' };
  const validate = validatePassword(password, user.password);
  if (!validate) return { message: 'Invalid email or password' };
  const token = generateToken(user);
  return { token };
};

module.exports = { logUser };