import Joi from "joi";

const loginSchema = async () => {
  return Joi.object({
    email: Joi.string().trim().email().required().messages({
      "any.required": "Email is required.",
      "string.email": "Email must be a valid email address.",
    }),
    password: Joi.string().trim().required().messages({
      "any.required": "Password is required.",
    }),
  });
};

export default loginSchema;
