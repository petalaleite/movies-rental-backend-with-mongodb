const express = require('express');
const { registerUser, deleteUser } = require('../controllers/userControllers');
const validateToken = require('../middlewares/validateJWT');
const admin = require('../middlewares/admin');

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.delete('/:id', [validateToken, admin], deleteUser);

module.exports = userRouter;
