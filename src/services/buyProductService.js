import pool from "../database/sql.js";
import { getProductById } from "./productservice.js";
import { findUserById } from "./userservice.js";

export const buyProduct = async (id, userId) => {
    try {
      const product = await getProductById(id);
      const buyer = await findUserById(userId);
      
      const seller = await findUserById(product.userid); 
      
      if (userId === product.userid)
        return "You already have this product. Don't be greedy.";
      
      const productPrice = Number(product.price); 
      const buyerBalance = Number(buyer.balance); 
      const sellerBalance = Number(seller.balance); 
      
        
      if (buyerBalance < productPrice) {
        return "You don't have enough money.";
      }
  
      const updateBuyerBalance = `
        UPDATE users
        SET balance = $1, updatedAt = NOW() 
        WHERE id = $2;
      `;
      const buyerValue = [buyerBalance - productPrice, userId];
  
      const updateSellerBalance = `
        UPDATE users
        SET balance = $1, updatedAt = NOW() 
        WHERE id = $2;
      `;
      const sellerValue = [
        sellerBalance + productPrice, 
        product.userid, 
      ];
  
      const updateProduct = `
        UPDATE products
        SET userId = $1, updatedAt = NOW(), soldAt = NOW()
        WHERE id = $2;
      `;
      const value = [userId, id];
  
      const insertQuery = `
        INSERT INTO transactions (sellerId, buyerId, productId, price, createdAt)
        VALUES ($1, $2, $3, $4, NOW())
        RETURNING *;
      `;
      const values = [product.userid, userId, id, productPrice]; 
  
      await pool.query(insertQuery, values);
      await pool.query(updateSellerBalance, sellerValue);
      await pool.query(updateBuyerBalance, buyerValue);
      await pool.query(updateProduct, value);
     
      
      return "Congratulations! The purchase was successful.";
    } catch (error) {
      console.error(error);
      return error;
    }
  };
  
