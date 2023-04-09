const express = require('express');
const { registerUser } = require('../controllers/userControllers');

const userRouter = express.Router();

userRouter.post('/', registerUser);

module.exports = userRouter;
