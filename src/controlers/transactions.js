import { transactions } from "../services/transactionServices.js"

export const getTransaction = async (_,res) =>{
    const response = await transactions();
    return res.json(response)
}