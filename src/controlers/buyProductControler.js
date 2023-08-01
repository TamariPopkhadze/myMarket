import { buyProduct } from "../services/buyProductService.js";
import ByProductSchema from "../validation/buyproductschema.js";

export const buyProductById = async (req,res) => {
    const {id} = req.params;
    const buyer = req.body;
    const validator = await ByProductSchema();
    const { value, error } = validator.validate(buyer);
    if (error) {

      return res.status(422).json(error.details);
    }
   
   const response = await buyProduct(Number(id),value.userId);
   return res.json(response);
   

} 