const express = require('express');
const { registerUser, deleteUser } = require('../controllers/userControllers');

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;
