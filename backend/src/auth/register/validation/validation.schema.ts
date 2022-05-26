import Joi = require('joi');

const registerSchema = Joi.object({
  firstName: Joi.string().min(3).max(20).required(),
  lastName: Joi.string().min(5).max(25).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'pl'] } }).required(),
  password: Joi.string().min(5).required(),
  confirmPassword: Joi.ref('password'),
});

export default registerSchema;
