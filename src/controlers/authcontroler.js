import pool from "../database/sql.js";
import loginUser from "../services/authservice.js";
import { createUser } from "../services/userservice.js";
import loginSchema from "../validation/loginvalidation.js";
import userSchema from "../validation/validregistration.js";

export const registration = async (req, res) => {
  const payload = req.body;
  const validator = await userSchema();
  const { value, error } = validator.validate(payload);
  if (error) {
    return res.status(422).json(error.details);
  }
  const user = await createUser(value);
  if (user) return res.json({ message: user });
};

export const login = async (req, res) => {
  const payload = req.body;
  const validator = await loginSchema();
  const { value, error } = validator.validate(payload);
  if (error) {
    return res.status(422).json(error.details);
  }
  const token = await loginUser(value);
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
