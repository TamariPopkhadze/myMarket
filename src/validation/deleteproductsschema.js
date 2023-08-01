import Joi from "joi";

const deleteSchema = async () => {
  return Joi.object({
    userId: Joi.number().required().messages({
      "any.required": "userId is required.",
    }),
  });
};

export default deleteSchema;
