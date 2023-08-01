import pool from "../database/sql.js";

export const getStatistic = async(req,res) => {
    try {
        const query = `
          SELECT
            EXTRACT(YEAR FROM createdAt) AS year,
            EXTRACT(MONTH FROM createdAt) AS month,
            SUM(price) AS totalSales
          FROM transactions
          GROUP BY EXTRACT(YEAR FROM createdAt), EXTRACT(MONTH FROM createdAt)
          ORDER BY EXTRACT(YEAR FROM createdAt), EXTRACT(MONTH FROM createdAt);
        `;
    
        const result = await pool.query(query);
    
        
        const statistics = result.rows.map((row) => ({
          year: row.year,
          month: row.month,
          totalSales: row.totalsales, 
        }));
    
        return res.json(statistics);
      } catch (error) {
        console.error(error);
        throw error;
      }

    
}