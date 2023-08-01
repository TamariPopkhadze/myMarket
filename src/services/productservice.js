import pool from "../database/sql.js";
import { findUserById } from "./userservice.js";

export const insertProduct = async (payload) => {
  console.log("i am in insertProduct");
  try {
    const insertQuery = `
        INSERT INTO products (title, description, price,userId,typeId)
        VALUES ($1, $2, $3, $4, $5 )
        RETURNING *;
      `;

    const values = [
      payload.title,
      payload.description,
      payload.price,
      payload.userId,
      payload.typeId,
    ];
    console.log("a");
    await pool.query(insertQuery, values);
    console.log("await");
    return "created successfully";
  } catch (error) {
    return error;
  }
};
export const getProduct = async () => {
  
  const insertQuery = `
    select * from products;
    
  `;

  try {
    const response = await pool.query(insertQuery);

    return response.rows;
  } catch (error) {
    return error;
  }
};

export const getProductById = async (id) => {
  const query = `
    SELECT * FROM products
    WHERE id= $1;
  `;

  try {
    const response = await pool.query(query, [id]);

    return response.rows[0];
  } catch (error) {
    return error;
  }
};

export const updateProductById = async (payload, id) => {
    const user = await findUserById(userId);
  
    // Check if the user is an admin
    const isAdmin = user && user.isadmin === true;
    const updateQuery = `
      UPDATE products
      SET title = $1, description = $2, price = $3, updatedAt = NOW()
      WHERE id = $4 AND userId = $5 OR $6 = true;
    `;
  
    const values = [
      payload.title,
      payload.description,
      payload.price,
      id, // The product ID for the WHERE clause
      payload.userId,
      isAdmin
    ];
  
    try {
      const result = await pool.query(updateQuery, values);
  
      if (result.rowCount === 0) {
        return "Product not found or does not belong to the user.";
      }
  
      return "updated successfully";
    } catch (error) {
      return error;
    }
  }

  export const deleteProductById = async (id, userId) => {
    const user = await findUserById(userId);
    
    // Check if the user is an admin
    const isAdmin = user && user.isadmin === true;
  
    const deleteQuery = `
      DELETE FROM products 
      WHERE (id = $1 AND userId = $2) OR $3 = true;
    `;
  
    try {
      const result = await pool.query(deleteQuery, [id, userId, isAdmin]);
  
      if (result.rowCount === 0) {
        return "Product not found or does not belong to the user.";
      }
  
      return "Deleted successfully";
    } catch (error) {
      return error;
    }
  }
  
  
  
