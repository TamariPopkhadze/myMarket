import pool from "../database/sql.js";

export const transactions = async () => {
  const transactionQuery = `
    SELECT * FROM transactions
    `;
  try {
    const response = await pool.query(transactionQuery);

    return response.rows;
  } catch (error) {
    return error;
  }
};
