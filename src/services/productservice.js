import pool from "../database/sql.js";

export const insertProduct = async (payload) => {

    try {
      const insertQuery = `
        INSERT INTO products (title, description, price,userId,typeId)
        VALUES ($1, $2, $3, $4, $5, )
        RETURNING *;
      `;
  
      const values = [
        payload.title,
        payload.description,
        payload.price,
        payload.userId,
        payload.typeId,
      ];
  
      await pool.query(insertQuery, values);
      return 'created successfully';
    } catch (error) {
        return error;
    }
  };