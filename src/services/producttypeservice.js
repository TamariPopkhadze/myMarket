import pool from "../database/sql.js";

export const findProductTypeByName = async (productName) => {
    const query = `
        SELECT * FROM product_types
        WHERE name= $1;
      `;
  
    try {
      const result = await pool.query(query, [productName]);
      return result.rows[0]; 
    } catch (error) {
      console.error("Error while finding product by Name:", error);
      throw error;
    }
  };

export const insertProductType = async (payload) => {
  const name = await findProductTypeByName(payload.name)
  if(name !== undefined) return "Producttype already exist"
  const insertQuery = `
    INSERT INTO product_types (name)
    VALUES ($1 )
    RETURNING *;
  `;

  const values = [payload.name];

  try {
    await pool.query(insertQuery, values);
    return "created successfully";
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAllProductsType = async () => {
  const insertQuery = `
    select * from product_types
  `;

  try {
    const response = await pool.query(insertQuery);
   
    return response.rows;
  } catch (error) {
    return error;
  }
};
