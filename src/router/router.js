import express from "express";
import authRouter from "./authrouter.js";
import CheckAuthMiddleware from "../middlewares/checkAuthMidlleware.js";
import { getUsers } from "../controlers/authcontroler.js";

const router = express.Router();
router.get('/allUsers',getUsers)
router.use("/auth", authRouter);

router.use(CheckAuthMiddleware);
// router.use("/product");

export default router;
