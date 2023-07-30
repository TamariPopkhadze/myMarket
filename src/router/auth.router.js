import express from "express";
import  { login, registration } from "../controlers/auth.controler";

const authRouter = express.Router();

authRouter.post("/register",registration)
authRouter.post("/login",login)
export default authRouter