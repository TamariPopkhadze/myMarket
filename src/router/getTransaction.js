import  express  from "express";
import { getTransaction } from "../controlers/transactions.js";




const getTransactionRouter = express.Router();
getTransactionRouter.get('/', getTransaction);


export default getTransactionRouter;