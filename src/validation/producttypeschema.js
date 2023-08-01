import Joi from "joi";

const ProductTypeSchema = async () => {
  return Joi.object({
    name: Joi.number().required().messages({
      "any.required": "name is required.",
    }),
  });
};

export default ProductTypeSchema;
