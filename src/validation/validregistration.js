import Joi from "joi";

const userSchema = async () => {
  return Joi.object({
    firstName: Joi.string().trim().required().messages({
      "any.required": "First name is required.",
      "string.empty": "First name must not be empty.",
    }),
    lastName: Joi.string().trim().required().messages({
      "any.required": "Last name is required.",
      "string.empty": "Last name must not be empty.",
    }),
    balance: Joi.number().required().messages({
      "any.required": "Balance is required.",
    }),
    email: Joi.string().trim().email().required().messages({
      "any.required": "Email is required.",
      "string.email": "Email must be a valid email address.",
    }),
    password: Joi.string().trim().required().messages({
      "any.required": "Password is required.",
    }),
    userType: Joi.string().trim().required().messages({
      "any.required": "User type is required.",
      "string.empty": "User type must not be empty.",
    }),
    isAdmin: Joi.boolean().required().messages({
      "any.required": "isAdmin is required.",
    }),
  });
};

export default userSchema
