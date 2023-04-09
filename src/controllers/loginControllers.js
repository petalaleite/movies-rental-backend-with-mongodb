const statusCodes = require('../Utils/StatusCodes');
const { loginServices } = require('../services');

const login = async (req, res) => {
  const { email, password } = req.body;
  const log = await loginServices.logUser(email, password);
  res.status(statusCodes.OK).send(log);
};

module.exports = { login };