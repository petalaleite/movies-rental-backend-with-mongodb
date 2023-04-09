const User = require('../models/user');
const { userServices } = require('../services');
const { generateToken } = require('../Utils/JWT');
const statusCodes = require('../Utils/StatusCodes');

const INVALID_ID_MESSAGE = 'The user with the given ID does not exist';

const registerUser = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: 'User already registered.' });
  }
  const newUser = await userServices.register(req.body);
  const token = generateToken(newUser);
  res.header('authorization', token).send(
    {
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    },
  );
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = userServices.deleteUser(id);
  if (!user) return res.status(statusCodes.NOT_FOUND).send(INVALID_ID_MESSAGE);
  res.status(statusCodes.OK).send('User deleted');
};

module.exports = { registerUser, deleteUser };