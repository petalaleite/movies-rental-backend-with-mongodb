// const validateUser = (req, res, next) => {
//   const { body } = req;
//   const { error } = Joi.user.validate(body);
//   if (error) return res.status(statusCodes.BAD_REQUEST).json({ message: error.message });
//   next();
// };

// const validateUser = (user) => {
//   const schema = Joi.object({
//     name: Joi.string().min(2).required(),
//     email: Joi.string().email().required(),
//     password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
//     role: Joi.string().required(),
//   });
//   return Joi.validate(user, schema);
// };
