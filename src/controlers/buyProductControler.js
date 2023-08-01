import { buyProduct } from "../services/buyProductService.js";

export const buyProductById = async (req,res) => {
    const {id} = req.params;
    const buyer = req.body;
   const response = await buyProduct(Number(id),buyer.userId);
   return res.json(response);

} 