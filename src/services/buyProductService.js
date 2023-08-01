import pool from "../database/sql.js";
import { getProductById } from "./productservice.js";
import { findUserById } from "./userservice.js";

export const buyProduct = async (id, userId) => {
  try {
    const product = await getProductById(id);
    const buyer = await findUserById(userId);
    const seller = await findUserById(product.userid);
    if (userId === product.userid)
      return "you already have this product dont be pig";
    if (buyer.balance < product.price) {
      return "You don't have enough money";
    }

    const updateBuyerBalance = `
        UPDATE users
        SET balance = $1, updatedAt = NOW() 
        WHERE id = $2;
      `;
    const buyerValue = [buyer.balance - product.price, userId];

    const updateSellerBalance = `
      UPDATE users
      SET balance = $1, updatedAt = NOW() 
      WHERE id = $2;
    `;
    const sellerValue = [
      Number(seller.balance) + Number(product.price),
      product.userid,
    ];

    const updateProduct = `
        UPDATE products
        SET userId = $1, updatedAt = NOW() , soldAt = NOW()
        WHERE id = $2;
      `;

    const value = [userId, id];
    console.log(product.userid);
    const insertQuery = `
        INSERT INTO transactions (sellerId, buyerId, productId, price, createdAt   )
        VALUES ($1, $2, $3, $4, NOW() )
        RETURNING *;
      `;

    const values = [product.userid, userId, id, product.price];

    await pool.query(insertQuery, values);
    await pool.query(updateProduct, value);
    await pool.query(updateBuyerBalance, buyerValue);
    await pool.query(updateSellerBalance, sellerValue);
    return "Congratiulation";
  } catch (error) {
    console.log(error);
    return error;
  }
};
