import Joi from "joi";

const ProductSchema = async () => {
  return Joi.object({
    title: Joi.string().required().messages({
      "any.required": "title is required.",
    }),
    description: Joi.string().required().messages({
      "any.required": "description is required.",
    }),
    price: Joi.number().required().messages({
      "any.required": "price is required.",
    }),
    userId: Joi.number().required().messages({
      "any.required": "userId is required.",
    }),
    typeId: Joi.number().required().messages({
      "any.required": "typeId is required.",
    }),
  });
};

export default ProductSchema;
