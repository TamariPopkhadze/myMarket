import  express  from "express";
import { createNewProduct, deleteProduct, getAllProducts, getOneProduct, updateProduct } from "../controlers/productscontroler.js";

const productRouter = express.Router();
productRouter.post('/addNewProduct', createNewProduct);
productRouter.get('/allProducts',getAllProducts);
productRouter.get('/:id',getOneProduct)
productRouter.patch('/update/:id',updateProduct)
productRouter.delete('/delete/:id',deleteProduct)
export default productRouter;