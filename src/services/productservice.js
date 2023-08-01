import pool from "../database/sql.js";

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
  console.log("getProduct");
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
