import { getAllProductsType, insertProductType } from "../services/producttypeservice.js";
import ProductTypeSchema from "../validation/producttypeschema.js";

export const createNewProductType = async(req,res) => {
    const productTypeName = req.body;
    const validator = await ProductTypeSchema();
    const { value, error } = validator.validate(productTypeName);
    if (error) {
      return res.status(422).json(error.details);
    }
    const response = await insertProductType(value);

    return res.json({message: response})
    
}


export const getProductsType = async(_,res) => {
    const response = await getAllProductsType();

    return res.json(response)

    
}

