import pool from "../database/sql.js";
import loginUser from "../services/authservice.js";
import { createUser } from "../services/userservice.js";

export const registration = async (req, res) => {
  const payload = req.body;
  const user = await createUser(payload);
  if(user) return res.json({message:user})
  
};

export const login = async (req, res) => {
  const payload = req.body;
  const token = await loginUser(payload);
  return res.json({ token });
};

export const getUsers = async (req, res) => {
  const selectQuery = `select * from users`;
  try {
    const result = await pool.query(selectQuery);
    const rows = result.rows;
    return res.json({ rows });
  } catch (error) {
    console.error("Error retrieving users:", error);
    throw error;
  }
};
