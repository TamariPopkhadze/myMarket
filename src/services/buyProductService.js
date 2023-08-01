import pool from "../database/sql.js";
import { getProductById } from "./productservice.js";
import { findUserById } from "./userservice.js";



export const buyProduct = async (id, userId) => {
    try {
      const product = await getProductById(id);
      const buyer = await findUserById(userId);
      if (buyer.balance < product.price) {
        return "You don't have enough money";
      }
  
      const updateProduct = `
        UPDATE products
        SET userId = $1, updatedAt = NOW()
        WHERE id = $2;
      `;
  
      const value = [userId, id];
  
      const insertQuery = `
        INSERT INTO transactions (sellerId, buyerId, productId, price, createdAt)
        VALUES ($1, $2, $3, $4, NOW())
        RETURNING *;
      `;
  
      const values = [product.userId, userId, id, product.price];
  
      await pool.query(insertQuery, values);
      await pool.query(updateProduct, value);
  
      return "created successfully";
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  
