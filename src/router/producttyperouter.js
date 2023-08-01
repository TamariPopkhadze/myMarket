import  express  from "express";
import { createNewProductType,  getProductsType } from "../controlers/producttype.js";


const producttypeRouter = express.Router();
producttypeRouter.post('/addNewProducttype', createNewProductType);
producttypeRouter.get('/allProductstype',getProductsType);

export default producttypeRouter;