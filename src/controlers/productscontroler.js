import { deleteProductById, getProduct, getProductById, insertProduct, updateProductById } from "../services/productservice.js";

export const createNewProduct = async(req,res) => {
    const payload = req.body;
    const product = await insertProduct(payload);
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
    const product = await updateProductById(payload, Number(id));
    return res.json({message:product})
    
}

export const deleteProduct = async(req,res) => {
    const {id} = req.params;
    const payload = req.body;
    const response = await deleteProductById(Number(id),payload.userId)
    return res.json(response)

    
}

