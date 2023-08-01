import Joi from "joi";

const ByProductSchema = async () => {
  return Joi.object({
    userId: Joi.number().required().messages({
      "any.required": "id is required.",
    }),
  });
};

export default ByProductSchema;
