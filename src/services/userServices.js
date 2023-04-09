const User = require('../models/user');
const hashPassword = require('../Utils/hashPassword');

const register = async (user) => {
  const { password } = user;
  const hashedPassword = await hashPassword(password);
  const createdUser = await User.create({
    name: user.name,
    email: user.email,
    password: hashedPassword,
    role: user.role,
  });
  return createdUser;
};

module.exports = { register };