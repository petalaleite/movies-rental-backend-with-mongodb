const User = require('../models/user');
const { hashPassword } = require('../Utils/hashPassword');

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

const deleteUser = async (id) => {
  const user = await User.findByIdAndDelete(id);
  return user;
};

module.exports = { register, deleteUser };