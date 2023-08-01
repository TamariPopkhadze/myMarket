import { insertProduct } from "../services/productservice.js";

export const createNewProduct = async(req,res) => {
    const payload = req.body;
    const product = await insertProduct(payload);
    return res.json({message:product})


}

export const getAllProducts = async(req,res) => {
    
}

export const getOneProduct = async(req,res) => {
    
}

export const updateProduct = async(req,res) => {
    
}

export const deleteProduct = async(req,res) => {
    
}

