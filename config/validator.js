const joi = require("joi");
const passwordComplex = require("joi-password-complexity");
const complexOptions = {
  min: 7,
  max: 30,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
};

const validator = (req, res, next) => {
  const schema = joi.object({
    name: joi
      .string()
      .required()
      .trim()
      .min(3)
      .max(30)
      .pattern(new RegExp("[A-Za-z]"))
      .messages({
        "string.min": "Name must contain at least 3 letters",
        "string.max": "Name must not exceed 15 letters",
        "string.empty": "Name cannot be empty",
        "string.pattern.base": "Name can only contain letters",
      }),
    lastName: joi
      .string()
      .required()
      .trim()
      .min(1)
      .max(35)
      .pattern(new RegExp("[A-Za-z]"))
      .messages({
        "string.min": "Last name must contain at least 1 letters",
        "string.max": "Last name must not exceed 15 letters",
        "string.empty": "Last name cannot be empty",
        "string.pattern.base": "Last name can only contain letters",
      }),
    email: joi.string().max(30).min(6).required().trim().email().messages({
      "string.email": "Please provide a valid email address",
      "string.empty": "Email cannot be empty",
    }),
    password: joi.string().required().min(7).max(35).messages({
      "string.min": "Password must be at least 7 characters long",
      "string.max": "Password cannot exceed 30 characters long",
      "string.empty": "Password cannot be empty",
    }),
    image: joi.required(),
    googleUser: joi.boolean(),
  });
  const validation = schema.validate(req.body, { abortEarly: false });
  let passwordValidation = passwordComplex(complexOptions).validate(
    req.body.password,
    { abortEarly: false }
  );
  if (validation.error) {
    return res.json({
      success: false,
      error: validation.error.details,
      response: null,
    });
  } else if (passwordValidation.error) {
    return res.json({
      success: false,
      error: passwordValidation.error.details,
      response: null,
    });
  }
  next();
};

module.exports = validator;