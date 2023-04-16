const express = require('express');
const { registerUser, deleteUser } = require('../controllers/userControllers');
const validateToken = require('../middlewares/validateJWT');
const admin = require('../middlewares/admin');
const { validateUser } = require('../middlewares/validations');

const userRouter = express.Router();

userRouter.post('/register', validateUser, registerUser);
userRouter.delete('/:id', [validateToken, admin], deleteUser);

module.exports = userRouter;
