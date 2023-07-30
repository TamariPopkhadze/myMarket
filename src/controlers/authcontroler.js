import loginUser from "../services/authservice.js";
import { createUser } from "../services/userservice.js";


export const registration = async (req, res) => {
  const payload = req.body;
  await createUser(payload);
  return res.json({ message: "created" });
};

export const login = async (req, res) => {
  const payload = req.body;
  const token = await loginUser(payload);
  return res.json({ token });
};
