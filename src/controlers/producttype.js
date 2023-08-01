import { getAllProductsType, insertProductType } from "../services/producttypeservice.js";

export const createNewProductType = async(req,res) => {
    const productTypeName = req.body;
    const response = await insertProductType(productTypeName);
    return res.json({message: response})
    
}


export const getProductsType = async(_,res) => {
    const response = await getAllProductsType();

    return res.json(response)

    
}

