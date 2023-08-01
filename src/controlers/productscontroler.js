import { deleteProductById, getProduct, getProductById, insertProduct, updateProductById } from "../services/productservice.js";
import deleteSchema from "../validation/deleteproductsschema.js";
import ProductSchema from "../validation/productschema.js";
import UpdateproductSchema from "../validation/updateproductschema.js";

export const createNewProduct = async(req,res) => {
    const payload = req.body;
    const validator = await ProductSchema();
    const { value, error } = validator.validate(payload);
    if (error) {
      return res.status(422).json(error.details);
    }
    const product = await insertProduct(value);
    return res.json({message:product})


}

export const getAllProducts = async(_,res) => {
    
    const product = await getProduct();
    return res.json(product)
    
}

export const getOneProduct = async(req,res) => {
    const {id} = req.params;
    const productById = await getProductById(Number(id));
    return res.json(productById)
    
    
}

export const updateProduct = async(req,res) => {

    const payload = req.body;
    const {id} = req.params;
    const validator = await UpdateproductSchema();
    const { value, error } = validator.validate(payload);
    if (error) {
      return res.status(422).json(error.details);
    }
    const product = await updateProductById(value, Number(id));
    return res.json({message:product})
    
}

export const deleteProduct = async(req,res) => {
    const {id} = req.params;
    const payload = req.body;
    const validator = await deleteSchema();
    const { value, error } = validator.validate(payload);
    if (error) {
      return res.status(422).json(error.details);
    }
    const response = await deleteProductById(Number(id),value.userId)
    return res.json(response)

    
}

