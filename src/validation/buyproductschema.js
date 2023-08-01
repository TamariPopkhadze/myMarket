import Joi from "joi";

const ByProductSchema = async () => {
  return Joi.object({
    userid: Joi.number().required().messages({
      "any.required": "id is required.",
    }),
  });
};

export default ByProductSchema;
