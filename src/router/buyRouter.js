import  express  from "express";
import { buyProductById } from "../controlers/buyProductControler.js";



const buyRouter = express.Router();
buyRouter.post('/product/:id', buyProductById);


export default buyRouter;