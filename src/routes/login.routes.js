const express = require('express');
const { login } = require('../controllers/loginControllers');

const loginRouter = express.Router();

loginRouter.post('/', login);

module.exports = loginRouter;